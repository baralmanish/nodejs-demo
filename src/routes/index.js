const express = require('express');
const router = express.Router();

const ctrl = require('../controllers/employee.controller');

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

router.get('/employees', ctrl.getView);
router.get('/employee/:id', ctrl.getDetailView);

module.exports = router;
