'use server'

import { CreateEventParams } from "@/types"
import { handleError } from "../utils"
import { connectToDatabase } from "../database"
import Event from "../database/models/event.model"





export const createEvent =async(event:CreateEventParams)=>{
    try {
        await connectToDatabase();
        const newEvent = await Event.create(event);
        return JSON.parse(JSON.stringify(newEvent));
    } catch (error) {
        handleError(error)
    }

}

export const getAllEvent =async()=>{
    try {
        await connectToDatabase();
        const events = await Event.find();
        return JSON.parse(JSON.stringify(events));
    } catch (error) {
        handleError(error)
    }

}