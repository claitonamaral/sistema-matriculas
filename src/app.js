const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors({
    origin: '*'
}));

app.use(bodyParser.json());
app.use('/api/v1', authRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
