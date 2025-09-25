# 📧 Newsletter Email Management

## Where to Find Saved Emails

### 1. **Admin Dashboard** (Recommended)
- **URL**: `http://localhost:3000/admin`
- **Features**:
  - View all subscribers in a table
  - Download emails as CSV
  - See statistics (total, today's signups, this week)
  - Real-time updates

### 2. **JSON File** (Backend Storage)
- **Location**: `newsletter-emails.json` in your project root
- **Format**: JSON array with email data
- **Example**:
```json
[
  {
    "email": "customer@example.com",
    "timestamp": "2025-09-25T03:06:41.987Z",
    "source": "Patriot's List",
    "date": "9/24/2025",
    "time": "11:06:42 PM"
  }
]
```

### 3. **Console Logs** (Development)
- Check your terminal where `npm run dev` is running
- Look for entries like: `📧 Newsletter signup saved:`

## How to Access Emails

### Option 1: Admin Dashboard
1. Go to `http://localhost:3000/admin`
2. View all subscribers in a beautiful table
3. Click "Download CSV" to export all emails
4. Use "Refresh" to get latest signups

### Option 2: Direct File Access
1. Open `newsletter-emails.json` in your project folder
2. Copy the email addresses from the JSON data
3. Use a JSON viewer for better formatting

### Option 3: Command Line
```bash
# View all emails
Get-Content "newsletter-emails.json" | ConvertFrom-Json

# Count total emails
(Get-Content "newsletter-emails.json" | ConvertFrom-Json).Count
```

## Email Data Structure

Each email entry contains:
- **email**: Customer's email address
- **timestamp**: ISO timestamp of signup
- **source**: Where they signed up (usually "Patriot's List")
- **date**: Human-readable date
- **time**: Human-readable time

## Setting Up Google Sheets Integration

To automatically save emails to Google Sheets:

1. **Create a Google Apps Script**:
   - Go to [script.google.com](https://script.google.com)
   - Create a new project
   - Use this code:

```javascript
function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSheet();
  const data = JSON.parse(e.postData.contents);
  
  sheet.appendRow([
    data.email,
    data.timestamp,
    data.source,
    data.date,
    data.time
  ]);
  
  return ContentService.createTextOutput('Success');
}
```

2. **Deploy as Web App**:
   - Click "Deploy" → "New deployment"
   - Set execute as "Me" and access to "Anyone"
   - Copy the web app URL

3. **Update the API**:
   - Replace the file storage in `pages/api/newsletter.js`
   - Add the Google Apps Script URL
   - Emails will automatically sync to your Google Sheet

## Email Export Options

### CSV Export (Admin Dashboard)
- Click "Download CSV" button
- File includes: Email, Date, Time, Source
- Perfect for importing into email marketing tools

### JSON Export (Manual)
- Copy from `newsletter-emails.json`
- Use for API integrations
- Maintains all metadata

## Security Notes

- The admin page is currently public (no authentication)
- For production, add password protection
- Consider rate limiting for the API endpoints
- Store sensitive data securely

## Troubleshooting

### No emails showing up?
1. Check if `newsletter-emails.json` exists
2. Verify the API is working: test newsletter signup
3. Check console logs for errors

### Admin page not loading?
1. Make sure the server is running
2. Check browser console for errors
3. Verify the API endpoint is accessible

### Emails not saving?
1. Check file permissions in your project folder
2. Verify the API is receiving requests
3. Look for error messages in console logs
