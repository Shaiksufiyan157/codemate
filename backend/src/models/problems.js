import mongoose from "mongoose";

const Schema = mongoose.Schema

const ProblemSchema = new Schema({
    problme_statement: {
        type: String,
        require: true
    },
    approach_1: {
        type: String,
        require: true
    },
    approach_2: {
        type: String,
        require: true
    },
    ds: {
        type: String,
        require: true
    },
    algo: {
        type: String,
        require: true
    }
}, { timestamps: true })

const Problem=mongoose.model('Problems',ProblemSchema);

export default Problem