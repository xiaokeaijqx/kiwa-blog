import {z} from "zod"


export  const insertArticleSchema = z.object({
    id: z.string().min(1,"id must be at least 1 character"),
    name: z.string().min(3,"Name must be at least 3 character"),
    slug: z.string().min(3,"slug must be at least 3 character"),
    category: z.string().min(3,"category must be at least 3 character"),
    description: z.string().min(3,"description must be at least 3 character"),
    images: z.array(z.string()).min(1,"images must be at least 1 image"),
    contend: z.string().min(3,"brand must be at least 3 character"),
    isFeatured:z.boolean(),
    banner:z.string().nullable(),
})
