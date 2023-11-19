const express = require('express');
const bodyParser = require('body-parser');
const alunoRoutes = require('./routes/alunoRoutes');
const disciplinaRoutes = require('./routes/disciplinaRoutes');
const professorRoutes = require('./routes/professorRoutes');
const turmaRoutes = require('./routes/turmaRoutes');
const alunoTurmaRoutes = require('./routes/alunoTurmaRoutes');
const authRouter = require('./routes/authRoutes.js');
const swaggerRouter = require('./routes/swaggerRoutes.js');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use("/api", authRouter);
app.use('/api', alunoRoutes);
app.use('/api', disciplinaRoutes);
app.use('/api', professorRoutes);
app.use('/api', turmaRoutes);
app.use('/api', alunoTurmaRoutes);
app.use('/api', swaggerRouter);


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});