const db = require('../models/db');




function getPatients(req, res) {
    const sql = 'SELECT * FROM patients';
    db.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to fetch patients' });
        }
        else {
            return res.json(results);
        }
    });
}


function addPatient(req, res) {
    const {patient_id, full_name, gender, date_of_birth, phone, address} = req.body;

    const sql = "INSERT INTO patients (patient_id, full_name, gender,date_of_birth, phone, address) VALUES (?, ?, ?, ?, ?, ?)";

    db.query(sql, [patient_id, full_name, gender, date_of_birth, phone, address], (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to add patient' });
        }
        else {
            return res.status(201).json({ message: 'Patient inserted successfully' });
        }
    });
}



function updatePatient(req, res) {
    const { patient_id } = req.params;
    const {full_name, gender, date_of_birth, phone, address} = req.body;

    const sql = 'UPDATE patients SET full_name = ?, gender = ?, date_of_birth = ?, phone = ?, address = ? WHERE patient_id = ?';

    db.query(sql, [full_name, gender, date_of_birth, phone, address, patient_id], (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to update patient' });
        }
        else {
            return res.json({ message: 'Patient updated successfully' });
        }
    });
}



function deletePatient(req, res) {
    const { patient_id } = req.params;

    const sql = 'DELETE FROM patients WHERE patient_id = ?';

    db.query(sql, [patient_id], (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to delete patient' });
        }
        else {
            return res.json({ message: 'Patient deleted successfully' });
        }
    });
}



module.exports = {
    getPatients,
    addPatient,
    updatePatient,
    deletePatient
};
