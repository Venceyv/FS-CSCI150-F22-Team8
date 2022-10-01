import mongoose from 'mongoose';

const {Schema} = mongoose;

const tagsSchema = new Schema(
    {
        tagName:{
            type:String,
            required:true,
        }
    }
)
export {tagsSchema};