//Import express
const express = require('express');

//Create app and using JSON
const app = express();
app.use(express.json());

//Projects
const projects = [];

//Middlewares
function checkProjectExists(req, res, next){
    const { id } = req.params;
    const project = projects.find(p => p.id == id);

    if(!project){
        return res.status(400).json({error: 'project not found'})
    }

    next();
}

let countReqs = 0;
function reqCount(req, res, next){
    countReqs++;

    console.log(`Requests: ${countReqs}`);

    return next();
}

app.use(reqCount);

//Route get projects
app.get('/projects', (req, res) => {
    return res.send(projects)
});


//Route create project
app.post('/projects', (req, res) => {
    const {id, title} = req.body;
    
    const project = {id, title, tasks:[]}
    
    projects.push(project);
    
    res.send(projects);
});

//Route create task
app.post('/projects/:id/tasks', checkProjectExists, (req, res) => {
    const { id } = req.params;
    const { title } = req.body;
    const project = projects.find(p => p.id == id);

    project.tasks.push(title);

    return res.json(project);
});

//Route update project
app.put('/projects/:id', checkProjectExists, (req, res) => {
    const { id } = req.params;
    const { title } = req.body;
    const project = projects.find(p => p.id == id);

    project.title = title;

    return res.json(project);
});

//Route delete project
app.delete('/projects/:id', checkProjectExists, (req, res) => {
    const { id } = req.params;  
    projectIndex = projects.find(p => p.id == id);

    projects.splice(projectIndex, 1);

    return res.send(projects);
});

app.listen(3000);