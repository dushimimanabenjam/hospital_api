const express = require('express');
const app = express();
const port = 3000;
const db = require('./models/db');
const patientsRoute = require('./routes/patientsRoute');
const departmentsRoute = require('./routes/departmentsRoute');
const doctorsRoute = require('./routes/doctorsRoutes');
const appointmentsRoute = require('./routes/appointmentsRoute');

app.use(express.json());

app.use(patientsRoute);
app.use(departmentsRoute);
app.use(doctorsRoute);
app.use(appointmentsRoute);

db.connect((err) => {
    if (err) throw err;
    console.log('Database connected.');
    
    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}/`);
    })
});
