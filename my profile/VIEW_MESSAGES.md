# How to View Contact Messages

When people submit messages through the contact form, they are stored in MongoDB. Here are several ways to view them:

## Method 1: Using API Endpoint (Recommended)

### Get All Messages
```bash
curl http://localhost:3001/api/contact
```

Or open in your browser:
```
http://localhost:3001/api/contact
```

### Get a Specific Message
```bash
curl http://localhost:3001/api/contact/{message-id}
```

## Method 2: Using MongoDB Compass

1. Download and install [MongoDB Compass](https://www.mongodb.com/try/download/compass)
2. Connect to `mongodb://localhost:27017`
3. Navigate to the `myprofile` database
4. Open the `contacts` collection
5. View all messages with their details

## Method 3: Using MongoDB Shell

```bash
# Connect to MongoDB
mongosh

# Switch to database
use myprofile

# View all contact messages
db.contacts.find().pretty()

# View unread messages
db.contacts.find({ read: false }).pretty()

# Count total messages
db.contacts.countDocuments()
```

## Method 4: Create a Simple Admin Page (Future Enhancement)

You could create an admin page in the frontend to view messages. The API endpoints are already available:
- `GET /api/contact` - Get all messages
- `GET /api/contact/:id` - Get specific message
- `PATCH /api/contact/:id/read` - Mark as read

## Message Structure

Each message contains:
- `_id`: Unique identifier
- `name`: Sender's name
- `email`: Sender's email
- `message`: Message content
- `read`: Boolean indicating if message has been read
- `createdAt`: Timestamp when message was created
- `updatedAt`: Timestamp when message was last updated
