const db = require('../models/db');


function getDoctors(req, res) {
 const sql = 'select *from doctors';
 db.query(sql, (err, results) => {
  if (err) {
   return res.status(500).json(err);
  } else {
   return res.status(200).json(results);
  }
 });
}


function addDoctor(req, res) {
 const { doctor_id, full_name, specialization, phone, department_id } = req.body;
 const sql = "INSERT INTO doctors (doctor_id, full_name, specialization, phone, department_id) VALUES (?, ?, ?, ?, ?)";
 db.query(sql, [doctor_id, full_name, specialization, phone, department_id], (err, results) => {
  if (err) {
   return res.status(500).json({"message": "Error occurred while inserting doctor"});
  }
  else {
   return res.status(200).json({"message": "doctor inserted successfully"});
  }
 });
}



function updateDoctor(req, res) {
 const { doctor_id } = req.body;
 const { full_name, specialization, phone, department_id } = req.body;
 const sql = 'update doctors set full_name=?, specialization=?, phone=?, department_id=? where doctor_id=?';
 db.query(sql, [full_name, specialization, phone, department_id, doctor_id], (err, results) => {
  if (err) {
   return res.status(500).json({"message": "Error occurred while updating doctor"});
  } else {
   return res.status(200).json({"message": "doctor updated successfully"});
  }
 });
}



function deleteDoctor(req, res) {
 const { doctor_id } = req.body;
 const sql = 'delete from doctors where doctor_id=?';
 db.query(sql, [doctor_id], (err, results) => {
  if (err) {
   return res.status(500).json(err);
  }
  else {
   return res.status(200).json({"message": "doctor deleted successfully"});
  }
 });
}

module.exports = {
 getDoctors,
 addDoctor,
 updateDoctor,
 deleteDoctor
}