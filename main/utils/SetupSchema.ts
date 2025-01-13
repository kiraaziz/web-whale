import { z } from "zod";

const SetupSchema = z.object({
    base: z.string(),
    options: z.object({
      baseDirPath: z.string(),
      url: z.string().url(),
      isHeadless: z.boolean(),
      addImportant: z.boolean(),
      browserPath: z.string(),
      rootDom: z.string(),
    }),
    structure: z.object({
      css: z.array(z.string()),
      root: z.array(z.string()),
      fonts: z.array(z.string()),
      img: z.array(z.string()),
      js: z.array(z.string()),
      preview: z.array(z.string()),
    }),
    name: z.string(),
    isReverse: z.boolean(),
  })
  
export { SetupSchema }