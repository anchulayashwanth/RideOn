const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');
const { verifyToken, requireAdmin } = require('../middleware/authMiddleware');

// Public endpoint for users to submit messages
router.post('/', contactController.createContact);

// Admin-only: list messages
router.get('/', verifyToken, requireAdmin, contactController.getAllContacts);

module.exports = router;
