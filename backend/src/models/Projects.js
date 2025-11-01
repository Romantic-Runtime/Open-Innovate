import mongoose from "mongoose";
import { required } from "zod/mini";
const projectSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    emoji:{
        type:String,
        required:false,
        trim:true,
        default:'📊 '
    },
    description:{
        type:String,
        required:false,
    },
    workspace:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Workspace',
        required:true
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    } 

},{timestamps:true })

export default mongoose.model('Project', projectSchema);