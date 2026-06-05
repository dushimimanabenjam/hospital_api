const express = require('express');
const { getAppointments, addAppointment, updateAppointment, deleteAppointment } = require('../controllers/appointmentsController');


const router = express.Router();


router.get('/appointments', getAppointments);
router.post('/appointments', addAppointment);
router.put('/appointments', updateAppointment);
router.delete('/appointments', deleteAppointment);


module.exports = router;