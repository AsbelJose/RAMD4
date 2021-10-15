import mongoose from "mongoose";
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    numeral:{
        type:Number,
        require:true,
    },
    title:{
        type:String,
        require:true,
    },
    description:String,
    status:String,
    phase:String,
    budget:Number,
    /*objetives:{
        general:String,
        specific1:String,
        specific2:String,
        specific3:String,
    },*/
    date:Date,
    /*reports:{
        avance:String,
        observaciones:String,
    },
    researchers_id:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Researcher'
    }]*/
});

const Project = mongoose.model('project', projectSchema);
export default Project;
