import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const ResearcherSchema = new Schema({
    //_id: mongoose.Schema.Types.ObjectId,
    firstName:String,
    LastName:String,
    role:String,
    cell:String,
    entry_date:Date,
    career:String,
    assigned_hours:Number
});

const Researcher = mongoose.model('researcher', ResearcherSchema);
export default Researcher;