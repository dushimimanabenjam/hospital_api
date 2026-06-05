const express = require('express');
const { getDepartments, addDepartment, updateDepartment, deleteDeppartment } = require('../controllers/departmentsController');

const router = express.Router();

router.get('/departments', getDepartments);
router.post('/departments', addDepartment);
router.put('/departments', updateDepartment);
router.delete('/departments', deleteDeppartment);


module.exports = router;