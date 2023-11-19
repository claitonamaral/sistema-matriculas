const jwt = require('jsonwebtoken');

const secretKey = process.env.SECRET_KEY || 'secretKey';

function authenticateToken(req, res, next) {
    const token = process.env.Authorization; 

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized - Token missing' });
    }

    next();
}

module.exports = authenticateToken;