import { User } from "../models/user.models.js";
import { Project } from "../models/project.models.js";
import {Task} from "../models/task.models.js";
import { Subtask } from "../models/subtasks.models.js";
import { ApiResponse } from "../utils/api-response.js";
import { ApiError } from "../utils/api-error.js";
import { asyncHandler } from "../utils/async-handler.js";
import mongoose from "mongoose";
import { AvailableUserRole } from "../utils/constants.js";

const getTasks= asyncHandler(async(req,res)=>{
    //chai
});

const createTasks= asyncHandler(async(req,res)=>{
    //chai
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