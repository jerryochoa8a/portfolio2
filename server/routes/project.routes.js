const ProjectController = require('../controllers/project.controllers');

module.export = function(app){
    app.post('/api/Project/create', ProjectController.createProjectPost);
    app.get('/api/getAllProjects', ProjectController.getAllProjects);
    app.get('/api/getProjects/python', ProjectController.getPythonProjects);
    app.get('/api/getProjects/mern', ProjectController.getMERNProjects);
    app.get('/api/getProjects/html', ProjectController.getHTMLProjects);
    app.get('/api/project/:id', ProjectController.getProject);
    app.put('/api/project/:id/update', ProjectController.updateProject);
    app.delete('/api/projeect/:id/delete', ProjectController.deleteProject);
    
}