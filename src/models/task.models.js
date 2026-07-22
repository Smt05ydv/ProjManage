import mongoose, { Schema } from "mongoose";

import {AvailabletaskStatuses, TaskStatusEnum} from "../utils/constants.js"

const taskSchema = new Schema({
    title:{
        type : String,
        required : true,
        unique: true,
        trim:true,
    },
    description: {
        type: String,
    },
    project:{
        type: Schema.Types.ObjectId,
        ref:"Project",
        required:true,
    },
    assignedTo:{
        type: Schema.Types.ObjectId,
        ref:"User",
        },
         assignedBy:{
        type: Schema.Types.ObjectId,
        ref:"User",
        },
        status:{
            type:String,
            enum: AvailabletaskStatuses,
            default: TaskStatusEnum.TODO
        },
        attachments: {
            type: [{
                url:String,
                mimetype: String,
                size: Number
            }],
            default : []
        }
},
    
    
    { timestamps:true});

   export const Tasks = mongoose.model("Task",taskSchema) 