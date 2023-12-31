
import * as z from "zod"
export const evnetFormSchema = z.object({
    title:z.string().min(5,"Title must be at least 5 characters!"),
    description:z.string().min(3,"Description must be at least 3 characters!").max(400,"Description must be less 400 characters!"),
    location:z.string().min(5,"Location must be at least 5 characters!").max(400,"Location must be less 300 characters!"),
    imageUrl:z.string(),
    startDateTime:z.date(),
    endDateTime:z.date(),
    price:z.string(),
    isFree:z.boolean(),
    url:z.string().url(),
    categoryId:z.string(),
})
