import mongoose from "mongoose";

const Schema=mongoose.Schema;
const SheetsProblemsSchema=new Schema({
    problem_statement:{
        type:String,
        require:true
    },
    link:{
        type:String,
        require:true
    }
})
const  DsaSheetSchema=new Schema({
    name:{
        type:String,
        require:true
    },
    problems:[SheetsProblemsSchema]
},{
    timestamps:true
})

const DsaSheet=mongoose.model('DsaSheet',DsaSheetSchema)

export default DsaSheet