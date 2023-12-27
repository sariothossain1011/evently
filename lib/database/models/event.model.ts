import { Schema, model, models } from "mongoose";

export interface IEvent extends Document{
    _id:string,
    title: string;
    description: string;
    location: string;
    createAt: Date;
    ImageUrl: string;
    startDateTime: Date;
    endDateTime: Date;
    price: string;
    isFree: boolean;
    url: string;
    category: {_id:string,name:string};
    organized: {_id:string,firstName:string,lastName:string};

};

const EventSchema = new Schema({
    title:{type:String,required:true},
    description:{type:String},
    location:{type:String},
    createAt:{type:String,default:Date.now},
    ImageUrl:{type:String,required:true},
    startDateTime:{type:String,default:Date.now},
    endDateTime:{type:String,default:Date.now},
    price:{type:String},
    isFree:{type:String,default:false},
    url:{type:String},
    category:{type:Schema.Types.ObjectId,ref:"Category"},
    organized:{type:Schema.Types.ObjectId,ref:"User"},
});

const Event = models.Event || model('Event',EventSchema);


export default Event;