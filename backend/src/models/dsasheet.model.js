import mongoose from "mongoose";

const Schema = mongoose.Schema;
const SheetsProblemsSchema = new Schema({
    id: {
        type: String,
        required: true
    },
    problem_statement: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    }
})
const DsaSheetSchema = new Schema({
    id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    problems: [SheetsProblemsSchema]
}, {
    timestamps: true
})

const DsaSheet = mongoose.model('DsaSheet', DsaSheetSchema)

export default DsaSheet