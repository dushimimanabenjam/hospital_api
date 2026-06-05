const db = require('../models/db');


function getAppointments(req, res) {
 const sql = 'SELECT * FROM appointments';
 db.query(sql, (err, results) => {
  if (err) {
   return res.status(500).json(err);
  }
  else {
   return res.status(200).json(results);
  }
 });
}


function addAppointment(req, res) {
 const { appointment_id, patient_id, doctor_id, appointment_date, status } = req.body;
 const sql = "INSERT INTO appointments (appointment_id, patient_id, doctor_id, appointment_date, status) VALUES (?, ?, ?, ?, ?)";
 db.query(sql, [appointment_id, patient_id, doctor_id, appointment_date, status], (err, results) => {
  if (err) {
   return res.status(500).json(err);
  }
  else {
   return res.status(200).json("appointment inserted successfully");
  }
 });
}



function updateAppointment(req, res) {
 const { appointment_id } = req.body;
 const {  patient_id, doctor_id, appointment_date, status } = req.body;
 const sql = 'update appointments set patient_id=?, doctor_id=?, appointment_date=?, status=? where appointment_id=?';
 db.query(sql, [patient_id, doctor_id, appointment_date, status, appointment_id], (err, results) => {
  if (err) {
   return res.status(500).json(err);
  }
  else {
   return res.status(200).json("appointment updated successfully");
  }
 });
}



function deleteAppointment(req, res) {
 const { appointment_id } = req.body;
 const sql = 'delete from appointments where appointment_id=?';
 db.query(sql, [appointment_id], (err, results) => {
  if (err) {
   return res.status(500).json(err);
  }
  else {
   return res.status(200).json("data deleted successfully");
  }
 });
}



module.exports = {
 getAppointments,
 addAppointment,
 updateAppointment,
 deleteAppointment
}