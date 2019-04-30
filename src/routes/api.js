const express = require('express');
const router = express.Router();

const ctrl = require('../controllers/employee.controller');

/* GET Employees */
router.get('/employees', ctrl.getData);
router.get('/employee/:id', ctrl.getDetail);
router.post('/employee/create', ctrl.createData);
router.put('/employee/update/:id', ctrl.updateData);
router.delete('/employee/delete/:id', ctrl.deleteData);
  
module.exports = router;