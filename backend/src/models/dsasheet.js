import mongoose from "mongoose";

const Schema = mongoose.Schema;
const SheetsProblemsSchema = new Schema({
    id: {
        type: String,
        require: true
    },
    problem_statement: {
        type: String,
        require: true
    },
    link: {
        type: String,
        require: true
    }
})
const DsaSheetSchema = new Schema({
    id: {
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    problems: [SheetsProblemsSchema]
}, {
    timestamps: true
})

const DsaSheet = mongoose.model('DsaSheet', DsaSheetSchema)

export default DsaSheet