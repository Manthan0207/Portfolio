const express = require('express')
const path = require('path')
const project = require('../data/project')
const { timeEnd } = require('console')

const route = express.Router()



route.get('/', (req, res) => {
    res.render('home');
})

route.get('/contact', (req, res) => {
    res.render('contact');
})

route.get('/about', (req, res) => {
    res.render('about');
})


route.get('/project', (req, res) => {
    projects = project
    res.render('project', { project: project })
})

route.get('/project/:title', (req, res) => {
    const title = req.params.title;

    curProject = project.filter((pro) => {
        return pro.title === title //returns an array
    })
    res.render('projectview', { project: curProject[0] })
})
module.exports = route