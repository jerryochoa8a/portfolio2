const { request, response } = require('express');
const { project } = require('../models/project.models');
// var CurrentDate = moment();



module.exports.createProjectPost = (request, response) => {
    const { name, type, builtWith, bio, youTubeLink } = request.body;
    project.create({
        name,
        type,
        builtWith,
        bio,
        youTubeLink
    })
        .then(post => response.json(post))
        .catch(err => console.log(err))
        .catch(err => response.status(400).json(err))
}

module.exports.getProject = (request, response) =>{
    project.findOne({_id: request.params.id})
        .then(oneProject => response.json(oneProject))
        .catch(err => response.json(err))
}

module.exports.getPythonProjects = (request, response) =>{
    project.find({type: 'python'})
        .then(pythonProjects => response.json(pythonProjects))
        .catch(err=> response.json(err))
}

module.exports.getMERNProjects = (request, response) =>{
    project.find({type: 'mern'})
        .then(pythonProjects => response.json(pythonProjects))
        .catch(err=> response.json(err))
}

module.exports.getHTMLProjects = (request, response) =>{
    project.find({type: 'html'})
        .then(pythonProjects => response.json(pythonProjects))
        .catch(err=> response.json(err))
}


module.exports.getAllProjects  = (request, response) => {
    project.find({})
        .then(posts => response.json(posts))
        .catch(err => response.json(err))
}

module.exports.updateProject = (request, response) => {
    post.findOneAndUpdate({_id: request.params.id}, request.body, {new:true} )
        .then(updateProject => response.json(updateProject))
        .catch(err => response.json(err))
    
}

module.exports.deleteProject = (request, response) => {
    post.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}