"use strict";

const fetch = require('node-fetch');

let controller = {
    // for view
    getView: (req, res) => {
        fetch(process.env.API_URL + 'employees')
        .then(response => response.json())
        .then(data => {
            console.log(data) // Prints result from `response.json()` in getRequest
            res.render('employee/index', { pageTitle: 'Employee List', employees: data }); // load in view
        })
        .catch(error => console.error(error))
    },
    getDetailView: (req, res) => {
        const employeeId = req.params.id
        fetch(process.env.API_URL + 'employee/' + employeeId)
        .then(response => response.json())
        .then(data => {
            res.render('employee/detail', { pageTitle: data.employee_name + "'s Detail", employee: data });
        })
        .catch(error => console.error(error))
    },


    // for json output
    getData: async (req, res) => {
        await fetch(process.env.API_URL + 'employees')
        .then(response => response.json())
        .then(data => {
            res.send({
                success: true,
                data: data
            })
        })
        .catch(error => console.error(error))
    },
    getDetail: (req, res) => {
        fetch(process.env.API_URL + 'employee/' + req.params.id)
        .then(response => response.json())
        .then(data => {
            res.send({
                success: true,
                data: data
            })
        })
        .catch(error => {
            console.error(error)
            res.send(error) 
        })
    },
    createData: (req, res) => {
        fetch(
            process.env.API_URL + 'create',
            {
                method  : 'POST',
                body    : JSON.stringify(req.body),
                headers : {
                    'Content-Type'  : 'application/json'
                },
            }
        )
        .then(response => response.json())
        .then(data => {
            res.send({
                success: true,
                data: data
            })
        })
        .catch(error => {
            console.error(error)
            res.send(error) 
        })
    },
    updateData: (req, res) => {
        fetch(
            process.env.API_URL + 'update/' + req.params.id,
            {
                method  : 'PUT',
                body    : JSON.stringify(req.body),
                headers : {
                    'Content-Type'  : 'application/json'
                },
            }
        )
        .then(response => response.json())
        .then(data => {
            res.send({
                success: true,
                data: data
            })
        })
        .catch(error => {
            console.error(error)
            res.send(error) 
        })
    },
    deleteData: (req, res) => {
        fetch(
            process.env.API_URL + 'delete/' + req.params.id,
            {
                method  : 'DELETE',
                headers : {
                    'Content-Type'  : 'application/json'
                },
            }
        )
        .then(response => response.json())
        .then(data => {
            res.send(data)
        })
        .catch(error => {
            console.error(error)
            res.send(error) 
        })
    }
};

module.exports = controller;