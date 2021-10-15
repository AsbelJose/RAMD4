import mongoose from "mongoose";

const Schema = mongoose.Schema;
const todoSchema = new Schema({
    title:{
        type:String,
        require:true,
    },
    detail:String,
    date:Date
},{timestamps:true})

const Todo = mongoose.model('todo', todoSchema);
export default Todo;