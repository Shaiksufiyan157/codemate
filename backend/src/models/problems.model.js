import mongoose from "mongoose";

const Schema = mongoose.Schema

const ProblemSchema = new Schema({
    id:{
        type:String,
        required: true
    },
    problem_statement: {
        type: String,
        required: true
    },
    approach_1: {
        type: String,
        required: true
    },
    approach_2: {
        type: String,
    },
    ds: {
        type: String,
        required: true
    },
    algo: {
        type: String,
        required: true
    },
    link:{
        type:String,
        required:true
    },
    code:{
        type:String
    }
}, { timestamps: true })

const Problem=mongoose.model('Problem',ProblemSchema);

export default Problem