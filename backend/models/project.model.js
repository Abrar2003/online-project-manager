const mongoose =  require("mongoose");

const projectSchema = new mongoose.Schema({
    title : {required: true, type: String},
    startDate: {required: true, type: Date},
    endDate: {required: true, type: Date},
    type: {required: true, type: String},
    reason: {required: true, type: String},
    division: {required:  true, type: String},
    category: {required: true, type: String},
    priority: {required: true, type: String},
    department: {required: true, type: String},
    location: {required: true, type: String},
    status: {required: true, type: String, enum: ["registered", "running", "closed"]}
});

const Project = mongoose.model("projects", projectSchema);
module.exports = Project;