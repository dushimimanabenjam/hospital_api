const express = require('express');
const { getDoctors, addDoctor, updateDoctor, deleteDoctor } = require('../controllers/doctorsController');

const router = express.Router();

router.get('/doctors', getDoctors);
router.post('/doctors', addDoctor);
router.put('/doctors', updateDoctor);
router.delete('/doctors', deleteDoctor);


module.exports = router;