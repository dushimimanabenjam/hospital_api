const express = require('express');
const {getPatients, addPatient, updatePatient, deletePatient} = require('../controllers/patientsController');
const router = express.Router();

router.get('/patients', getPatients);
router.post('/patients', addPatient);
router.put('/patients/:patient_id', updatePatient);
router.delete('/patients/:patient_id', deletePatient);

module.exports = router;