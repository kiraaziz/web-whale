import fs from 'fs';
import path from 'path';
import fetch from 'node-fetch-cache';
import crypto from 'crypto';
import puppeteer from 'puppeteer-core';
import ora from 'ora'; // For loading spinner
import Table from 'cli-table3'; // For the table UI
import chalk from 'chalk'; // Direct import (chalk is an ESM module)

async function processTemplate({
    baseDir,
    url,
    isHeadless = true,
    addImportant = false,
    browserPath,
    rootDom = 'section',
    showLogs = false,
}) {
    // Create directories if they don't exist
    const createDirs = (dirs) => {
        dirs.forEach(dir => {
            if (!fs.existsSync(dir)) {
                fs.mkdirSync(dir, { recursive: true });
            }
        });
    };

    const cssDir = path.join(baseDir, 'css');
    const jsDir = path.join(baseDir, 'js');
    const imgDir = path.join(baseDir, 'img');
    const fontsDir = path.join(baseDir, 'fonts');
    const previewDir = path.join(baseDir, 'preview');
    createDirs([cssDir, jsDir, imgDir, fontsDir, previewDir]);

    // Set up the spinner for loading feedback
    const spinner = ora('Loading page...').start();

    // Launch Puppeteer
    let browser;
    try {
        browser = await puppeteer.launch({
            executablePath: browserPath,
            headless: isHeadless,
        });
    } catch (err) {
        spinner.fail('Failed to launch browser');
        throw err;
    }

    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'domcontentloaded' });

    spinner.succeed('Page loaded successfully');

    // Select elements
    let elements = [];
    switch (rootDom.toLowerCase()) {
        case 'section':
            elements = await page.$$eval('body > section', nodes => nodes.map(n => n.outerHTML));
            break;
        case 'div':
            elements = await page.$$eval('body > div', nodes => nodes.map(n => n.outerHTML));
            break;
        default:
            elements = await page.$$eval(`body > ${rootDom}`, nodes => nodes.map(n => n.outerHTML));
            break;
    }

    // Handle CSS and add `!important` if necessary
    const cssContent = await page.evaluate(() => {
        const styles = Array.from(document.styleSheets);
        return styles
            .map(sheet => {
                try {
                    return Array.from(sheet.cssRules)
                        .map(rule => {
                            if (rule instanceof CSSStyleRule) {
                                const cssText = rule.cssText;
                                return cssText.replace(/([^\s]+)\s*:/g, (match, property) => {
                                    return addImportant ? `${property}: ${rule.style[property]} !important;` : match;
                                });
                            }
                        })
                        .join('\n');
                } catch (err) {
                    return '';
                }
            })
            .join('\n');
    });

    // Save CSS file
    const cssFileName = 'style.css';
    fs.writeFileSync(path.join(cssDir, cssFileName), cssContent);

    // Collect other assets (JS, images, etc.)
    const jsContent = await page.evaluate(() => {
        return Array.from(document.scripts)
            .map(script => script.src || script.innerText)
            .join('\n');
    });

    // Save JS file
    const jsFileName = 'script.js';
    fs.writeFileSync(path.join(jsDir, jsFileName), jsContent);

    // Collect and save images
    const imgUrls = await page.$$eval('img', imgs => imgs.map(img => img.src));
    const imagePaths = [];
    for (let i = 0; i < imgUrls.length; i++) {
        const imageUrl = imgUrls[i];
        const imagePath = path.join(imgDir, `image${i + 1}.jpg`);
        imagePaths.push(imagePath);
        const viewSource = await page.goto(imageUrl);
        fs.writeFileSync(imagePath, await viewSource.buffer());
    }

    // Collect and save fonts
    const fontUrls = await page.$$eval('link[rel="stylesheet"], style', styles => {
        return Array.from(styles)
            .map(style => style.href || style.innerText)
            .filter(url => url.includes('.woff') || url.includes('.ttf'));
    });

    const fontPaths = [];
    for (let i = 0; i < fontUrls.length; i++) {
        const fontUrl = fontUrls[i];
        const fontPath = path.join(fontsDir, `font${i + 1}.woff`);
        fontPaths.push(fontPath);
        const viewSource = await page.goto(fontUrl);
        fs.writeFileSync(fontPath, await viewSource.buffer());
    }

    // Logging (if showLogs is true)
    if (showLogs) {
        const table = new Table({
            head: [chalk.blue('File Type'), chalk.blue('File Name'), chalk.blue('Path'), chalk.blue('Size (Bytes)'), chalk.blue('Fetch State')],
            colWidths: [20, 30, 50, 20, 20],
            style: { head: [chalk.bold.white], border: ['green'] },
        });

        table.push(
            ['CSS', cssFileName, path.join(cssDir, cssFileName), fs.statSync(path.join(cssDir, cssFileName)).size, 'completed'],
            ['JS', jsFileName, path.join(jsDir, jsFileName), fs.statSync(path.join(jsDir, jsFileName)).size, 'completed'],
            ...imagePaths.map((imagePath, index) => [
                'Image',
                `image${index + 1}.jpg`,
                imagePath,
                fs.statSync(imagePath).size,
                'completed',
            ]),
            ...fontPaths.map((fontPath, index) => [
                'Font',
                `font${index + 1}.woff`,
                fontPath,
                fs.statSync(fontPath).size,
                'completed',
            ])
        );

        console.log(chalk.green('\nFiles processed:'));
        console.log(table.toString());
    }

    // Return data about the processed files
    const filesInfo = [
        {
            type: 'CSS',
            fileName: cssFileName,
            path: path.join(cssDir, cssFileName),
            size: fs.statSync(path.join(cssDir, cssFileName)).size,
            fetchState: 'completed',
        },
        {
            type: 'JS',
            fileName: jsFileName,
            path: path.join(jsDir, jsFileName),
            size: fs.statSync(path.join(jsDir, jsFileName)).size,
            fetchState: 'completed',
        },
        ...imagePaths.map((imagePath, index) => ({
            type: 'Image',
            fileName: `image${index + 1}.jpg`,
            path: imagePath,
            size: fs.statSync(imagePath).size,
            fetchState: 'completed',
        })),
        ...fontPaths.map((fontPath, index) => ({
            type: 'Font',
            fileName: `font${index + 1}.woff`,
            path: fontPath,
            size: fs.statSync(fontPath).size,
            fetchState: 'completed',
        })),
    ];

    await browser.close();
    return filesInfo;
}

(async () => {
    try {
        const result = await processTemplate({
            baseDir: '../public/templates/',  // Your base directory
            url: 'https://mobirise.com/extensions/servicem5/demoblocks.html',  // Target URL
            isHeadless: true,  // Set to false for non-headless mode
            addImportant: true,  // Whether to add !important to CSS styles
            browserPath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',  // Path to browser
            rootDom: 'section',  // Default root DOM element to process
            showLogs: true,  // Show logs in a nice table format
        });

        console.log("Files processed:", result);
    } catch (error) {
        console.error("Error processing template:", error);
    }
})();
