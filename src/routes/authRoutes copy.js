const authController = require('../controllers/authController.js');
const { Router } = require('express');
const authRouter = Router();

authRouter.post('/generate-token', authController.generateToken);

module.exports = authRouter;