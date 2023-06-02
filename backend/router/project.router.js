const express = require('express')
const Project = require('../models/project.model')

const app = express.Router()

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.post('/new-project', async (req, res) => {
    try{
        const project = await Project.create(req.body);
        res.status(201).send({
            success: true,
            message: "Project saved successfull",
            project: project
        });
    }
    catch(err){
        console.log(err);
        res.status(500).send(err);
    }
});

module.exports = app;