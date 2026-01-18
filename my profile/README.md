# My Profile - Portfolio Web Application

A modern, responsive portfolio web application with light/dark mode, project showcase, achievements display, and contact form integration.

## Features

- 🎨 Modern, responsive design with light/dark mode toggle
- 📸 Project showcase with images
- 🏆 Achievements section
- 📧 Contact form with backend integration
- 💾 MongoDB database for storing contact messages
- ⚛️ React frontend with Vite
- 🚀 NestJS backend API

## Tech Stack

### Frontend
- React 18
- Vite
- Axios for API calls
- React Icons
- CSS with CSS Variables for theming

### Backend
- NestJS
- MongoDB with Mongoose
- TypeScript
- Class Validator for input validation

## Prerequisites

- Node.js (v18 or higher)
- MongoDB (running locally on port 27017) or MongoDB Atlas connection string
- npm or yarn

## Installation

### 1. Install Frontend Dependencies

```bash
cd frontend
npm install
```

### 2. Install Backend Dependencies

```bash
cd ../backend
npm install
```

## Running the Application

### Start MongoDB

Make sure MongoDB is running on your system:

**Windows:**
```bash
# If MongoDB is installed as a service, it should start automatically
# Or start it manually:
mongod
```

**macOS/Linux:**
```bash
# Using Homebrew (macOS)
brew services start mongodb-community

# Or manually
mongod
```

**Using Docker:**
```bash
docker run -d -p 27017:27017 --name mongodb mongo:latest
```

### Start Backend Server

```bash
cd backend
npm run start:dev
```



### Start Frontend Development Server

```bash
cd frontend
npm run dev
```



## Configuration

### MongoDB Connection



To use a different MongoDB instance (e.g., MongoDB Atlas), update the connection string in `backend/src/app.module.ts`:

```typescript
MongooseModule.forRoot('your-mongodb-connection-string', {
  // options
}),
```





## Project Structure

```
my profile/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Achievements.jsx
│   │   │   └── Contact.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── package.json
│   └── vite.config.js
├── backend/
│   ├── src/
│   │   ├── contact/
│   │   │   ├── dto/
│   │   │   ├── schemas/
│   │   │   ├── contact.controller.ts
│   │   │   ├── contact.service.ts
│   │   │   └── contact.module.ts
│   │   ├── app.module.ts
│   │   └── main.ts
│   └── package.json
└── README.md
```

## Customization

### Adding Your Projects

Edit `frontend/src/components/Projects.jsx` to add your project images and details:

1. Replace placeholder images with your actual project images
2. Update project titles, descriptions, and technologies
3. Add more projects to the `projects` array

### Adding Your Achievements

Edit `frontend/src/components/Achievements.jsx` to customize your achievements:

1. Update the `achievements` array with your actual achievements
2. Modify icons, titles, descriptions, and dates

### Viewing Contact Messages

Contact messages are stored in MongoDB. You can:

1. Use MongoDB Compass to view messages

3. Create an admin panel (future enhancement)

## API Endpoints

- `POST /api/contact` - Submit a contact form message
- `GET /api/contact` - Get all contact messages
- `GET /api/contact/:id` - Get a specific contact message
- `PATCH /api/contact/:id/read` - Mark a message as read

## Building for Production

### Frontend

```bash
cd frontend
npm run build
```

The built files will be in the `dist` folder.

### Backend

```bash
cd backend
npm run build
npm run start:prod
```

## License

MIT

## Support

For issues or questions, please open an issue in the repository.
