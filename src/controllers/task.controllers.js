import { User } from "../models/user.models.js";
import { Project } from "../models/project.models.js";
import {Task} from "../models/task.models.js";
import { Subtask } from "../models/subtasks.models.js";
import { ApiResponse } from "../utils/api-response.js";
import { ApiError } from "../utils/api-error.js";
import { asyncHandler } from "../utils/async-handler.js";
import mongoose from "mongoose";
import { AvailableUserRole } from "../utils/constants.js";
import { url } from "inspector";

const getTasks= asyncHandler(async(req,res)=>{
    //chai
     const{projectId} = req.params;
    const project= await Project.findById(projectId)

    if (!project){
        throw new ApiError(404,"project not found");
    }

    const tasks= await Task.find({
        project: new mongoose.Types.ObjectId(projectId)
    }).populate("assignedTo", "avatar username fullname");

    return res
           .status(201)
           .json(
            new ApiResponse(201,tasks,"Tasks fetched successfully") );

    
});

const createTasks= asyncHandler(async(req,res)=>{
    //chai
    const {title,description,assignedTo,status}= req.body
    const{projectId} = req.params;
    const project= await Project.findById(projectId)

    if (!project){
        throw new ApiError(404,"project not found");
    }

    const files= req.files || []
    const attachments = files.map((file)=>{
        return {
            url : `${process.env.SERVER_URL}/images/${file.originalname}`,
             mimetype:file.mimetype,
             size: file.size
             }

    })
    const task = await Task.create({
        title,
        description,
        project : new mongoose.Types.ObjectId(projectId),
        assignedTo : assignedTo? new mongoose.Types.ObjectId(assignedTo) : undefined,
        status,
        assignedBy :new mongoose.Types.ObjectId(req.user._id),
        attachments
    });

    return res
           .status(201)
           .json(
            new ApiResponse(201,task,"Task created successfully")

           )
});

const getTaskById= asyncHandler(async(req,res)=>{
    //chai
});

const updateTask= asyncHandler(async(req,res)=>{
    //chai
});

const deleteTask= asyncHandler(async(req,res)=>{
    //chai
});

const createSubTask= asyncHandler(async(req,res)=>{
    //chai
});

const updateSubTask= asyncHandler(async(req,res)=>{
    //chai
});

const deleteSubTask= asyncHandler(async(req,res)=>{
    //chai
});


export {
    getTasks,
    getTaskById,
    createTasks,
    updateTask,
    deleteTask,
    createSubTask,
    updateSubTask,
    deleteSubTask,

}