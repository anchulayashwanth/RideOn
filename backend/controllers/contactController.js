const Contact = require('../models/Contact');

exports.createContact = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ message: 'Name, email and message are required' });
    }
    const contact = await Contact.create({ name, email, subject, message });
    res.status(201).json(contact);
  } catch (error) {
    console.error('createContact error:', error);
    res.status(500).json({ message: error.message });
  }
};

// Optional: list contacts (admin)
exports.getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
