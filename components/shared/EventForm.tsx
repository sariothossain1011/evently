"use client";
import { useForm } from "react-hook-form"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Textarea } from "@/components/ui/textarea"
import * as z from "zod"
import { Button } from "../ui/button"
import { Input } from "@/components/ui/input"
import { evnetFormSchema } from "@/lib/validation";
import { eventDefaultValues } from "@/constants";
import Dropdown from "./Dropdown";
import FileUploader from "./FileUploader";
import { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
type EventFormProps = {
    userId: string,
    type: "Create" | "Update"
}

const initialValues = eventDefaultValues;

const EventForm = ({ userId, type }: EventFormProps) => {
    const [files,setFiles] = useState<File[]>([])
    const form = useForm<z.infer<typeof evnetFormSchema>>({
        resolver: zodResolver(evnetFormSchema),
        defaultValues: initialValues,
    })
    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof evnetFormSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }
    return (
        <>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5">
                    <div className="flex flex-col gap-5 md:flex-row">
                        <FormField
                            control={form.control}
                            name="title"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormControl>
                                        <Input placeholder="Event title" {...field} className=" input-field" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="categoryId"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormControl>
                                        <Dropdown onChangeHandler={field.onChange} value={field.value} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                    </div>
                    <div className="flex flex-col gap-5 md:flex-row">
                        <FormField
                            control={form.control}
                            name="description"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormControl className="h-72">
                                        <Textarea  placeholder="Evnet description" {...field} className="textarea rounded-2xl"  />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="imageUrl"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormControl className="h-72">
                                        <FileUploader onFieldChange={field.onChange} imageUrl={field.value} setFiles={setFiles} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="flex flex-col gap-5 md:flex-row">
                        <FormField
                            control={form.control}
                            name="location"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormControl>
                                        <div className="flex-center h-[54px] w-full overflow-hidden rounded-full bg-gray-50 px-4 py-2">
                                            <FaLocationDot size={23}/>
                                        <Input placeholder="Event location or online" {...field} className=" input-field" />    
                                        </div>
                                        
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        </div>

                    <Button type="submit">Submit</Button>
                </form>
            </Form>

        </>
    )
}

export default EventForm