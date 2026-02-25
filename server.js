const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint
app.post('/api/register-patient', (req, res) => {
    const patientData = req.body;
    console.log("New Patient Received:", patientData);

    res.status(200).send({ message: "Registration successful!" });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});