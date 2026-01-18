import connectDB from '../db.js';
import Contact from '../models/Contact.js';

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  try {
    await connectDB();
    const { id } = req.query;

    if (req.method === 'PATCH') {
      const contact = await Contact.findByIdAndUpdate(
        id,
        { read: true },
        { new: true }
      );
      if (!contact) {
        return res.status(404).json({
          success: false,
          message: 'Contact not found',
        });
      }
      return res.status(200).json({
        success: true,
        data: contact,
      });
    }

    res.setHeader('Allow', ['PATCH']);
    return res.status(405).json({ success: false, message: `Method ${req.method} not allowed` });
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: error.message,
    });
  }
}
