import { Schema, model, models } from "mongoose";

export interface IOrder extends Document{
    createAt:Date;
    stripeId:string,
    totalAmount:string,
    event:{_id:string,tilte:string},
    buyer:{_id:string,firstName:string,lastName:string}
}

export type IOrderItem={
    _id:string,
    totalAmount:string,
    createAt:Date,
    eventTitle:string,
    eventId:string,
    buyer:string,
}

const OrderSchema = new Schema({
    createAt:{type:Date,default:Date.now},
    stripeId:{type:String,required:true,uniqued:true},
    totalAmount:{type:String},
    event:{type:Schema.Types.ObjectId,ref:"Event"},
    buyer:{type:Schema.Types.ObjectId,ref:"User"}

});

const Order = models.Order || model('Order',OrderSchema);


export default Order;