import { Github, Twitch, Twitter } from 'lucide-react'

const metaData = {
    name: "web whale",
    description: "Make your own website in seconds",
    version: "delta-0.8"
}
const websiteLink = 'https://webwhale.io'
const visitePages = ["about", "contact", "privacy", "terms"]
const linkesWithIcons = [
    {
        name: "Github",
        icon: Github,
        link: "https://github.com/webwhale-io"
    },
    {
        name: "Twitter",
        icon: Twitch,
        link: "https://twitter.com/webwhale_io"
    },
    {
        name: "Twitter",
        icon: Twitter,
        link: "https://twitter.com/webwhale_io"
    }
]

const auther = {
    name: "Kira Aziz",
    link: "https://github.com/kiraaziz"
}

const pluginExploreLink = '/plugins'

export { websiteLink, visitePages, pluginExploreLink, linkesWithIcons, auther, metaData }