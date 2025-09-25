import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { email } = req.body;

    if (!email || !email.includes('@')) {
      return res.status(400).json({ error: 'Valid email is required' });
    }

    const timestamp = new Date().toISOString();
    const emailData = {
      email,
      timestamp,
      source: 'Patriot\'s List',
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString()
    };

    // Save to JSON file
    const dataPath = path.join(process.cwd(), 'newsletter-emails.json');
    
    try {
      // Read existing emails
      let emails = [];
      if (fs.existsSync(dataPath)) {
        const fileContent = fs.readFileSync(dataPath, 'utf8');
        emails = JSON.parse(fileContent);
      }
      
      // Add new email
      emails.push(emailData);
      
      // Save back to file
      fs.writeFileSync(dataPath, JSON.stringify(emails, null, 2));
      
      console.log('📧 Newsletter signup saved:', emailData);
      console.log(`📊 Total emails collected: ${emails.length}`);
      
    } catch (fileError) {
      console.error('File save error:', fileError);
      // Still log to console as backup
      console.log('📧 Newsletter signup (console backup):', emailData);
    }

    return res.status(200).json({ 
      success: true, 
      message: 'Successfully joined the Patriot\'s List!' 
    });

  } catch (error) {
    console.error('Newsletter signup error:', error);
    return res.status(500).json({ 
      error: 'Failed to process newsletter signup',
      message: 'Please try again later'
    });
  }
}
