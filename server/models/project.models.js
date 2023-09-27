const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Project Name is Required']
    },
    type: {
        type:String,
        required: [true, 'Type is Required']
    },
    builtWith: {
        type:String
    },
    bio:{
        type:String
    },
    youTubeLink:{
        type:String
    }


},{timeStamps: true});

module.exports.projects = mongoose.model('projects', ProjectSchema)