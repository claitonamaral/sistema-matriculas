const jwt = require('jsonwebtoken');
require('dotenv').config();

const secretKey = '${process.env.SECRET_KEY}';

exports.generateToken = (req, res) => {
    
    const user = { id: process.env.ID, username: process.env.USERNAME };

    const token = jwt.sign(user, secretKey, { expiresIn: '1h' });

    res.json({ token });
};
