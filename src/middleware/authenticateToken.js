const jwt = require('jsonwebtoken');

const secretKey = process.env.SECRET_KEY || 'defaultSecretKey';

function authenticateToken(req, res, next) {
    const token = req.header('Authorization');

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized - Token missing' });
    }

    jwt.verify(token, secretKey, (err, user) => {
        if (err) {
            return res.status(403).json({ message: 'Forbidden - Invalid token' });
        }

        req.user = user;
        next();
    });
}

module.exports = authenticateToken;