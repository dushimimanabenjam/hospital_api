const db = require('../models/db');



function getDepartments(req, res) {
 const sql = 'SELECT * FROM departments';
 db.query(sql, (err, results) => {
  if (err) {
   return res.status(500).json(err);
  }
  else {
   return res.status(200).json(results);
  }
 });
}


function addDepartment(req, res) {
 const { department_id, department_name, description } = req.body;
 const sql = "INSERT INTO departments (department_id, department_name, description) VALUES (?, ?, ?)";
 db.query(sql, [department_id, department_name, description], (err, results) => {
  if (err) {
   return res.status(500).json(err);
  }
  else {
   return res.status(200).json("department inserted successfully");
  }
 });
}



function updateDepartment(req, res) {
 const { department_id } = req.body;
 const { department_name, description } = req.body;
 const sql = 'update departments set department_name=?, description=? where department_id=?';
 db.query(sql, [department_name, description, department_id], (err, results) => {
  if (err) {
   return res.status(500).json(err);
  }
  else {
   return res.status(200).json("departments updated successfully");
  }
 });
}



function deleteDeppartment(req, res) {
 const { department_id } = req.body;
 const sql = 'delete from departments where department_id=?';
 db.query(sql, [department_id], (err, results) => {
  if (err) {
   return res.status(500).json(err);
  }
  else {
   return res.status(200).json("data deleted successfully");
  }
 });
}


module.exports = {
 getDepartments,
 addDepartment,
 updateDepartment,
 deleteDeppartment
}