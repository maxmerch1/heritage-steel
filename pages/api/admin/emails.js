import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const dataPath = path.join(process.cwd(), 'newsletter-emails.json');
    
    if (!fs.existsSync(dataPath)) {
      return res.status(200).json({ emails: [] });
    }

    const fileContent = fs.readFileSync(dataPath, 'utf8');
    const emails = JSON.parse(fileContent);

    // Sort by timestamp (newest first)
    emails.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

    return res.status(200).json({ emails });

  } catch (error) {
    console.error('Error reading emails:', error);
    return res.status(500).json({ 
      error: 'Failed to read emails',
      emails: []
    });
  }
}
