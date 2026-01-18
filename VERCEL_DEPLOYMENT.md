# Vercel Deployment Guide

This project has been configured to deploy on Vercel with both frontend and backend API routes.

## Project Structure

- **Frontend**: React + Vite app in `my profile/frontend/`
- **Backend API**: Serverless functions in `/api/` directory
- **Database**: MongoDB (using Mongoose)

## Prerequisites

1. A MongoDB database (local or MongoDB Atlas)
2. A Vercel account
3. GitHub repository connected to Vercel

## Deployment Steps

### 1. Set Up MongoDB

If you don't have MongoDB Atlas:
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free cluster
3. Create a database user
4. Get your connection string (format: `mongodb+srv://username:password@cluster.mongodb.net/dbname`)

### 2. Deploy to Vercel

#### Option A: Via Vercel Dashboard
1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "Add New Project"
3. Import your GitHub repository
4. Configure the project:
   - **Framework Preset**: Other
   - **Root Directory**: Leave as root (`.`)
   - **Build Command**: `cd "my profile/frontend" && npm install && npm run build`
   - **Output Directory**: `my profile/frontend/dist`
5. Add Environment Variable:
   - **Name**: `MONGODB_URI`
   - **Value**: Your MongoDB connection string
6. Click "Deploy"

#### Option B: Via Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Set environment variable
vercel env add MONGODB_URI

# Deploy to production
vercel --prod
```

### 3. Environment Variables

In Vercel Dashboard:
1. Go to your project settings
2. Navigate to "Environment Variables"
3. Add the following:
   - `MONGODB_URI`: Your MongoDB connection string

## API Endpoints

After deployment, your API will be available at:
- `POST /api/contact` - Create a new contact message
- `GET /api/contact` - Get all contact messages
- `GET /api/contact/[id]` - Get a specific contact message
- `PATCH /api/contact/[id]/read` - Mark a contact as read

## Local Development

### Frontend
```bash
cd "my profile/frontend"
npm install
npm run dev
```

### Backend (for testing API locally)
The API functions can be tested using Vercel CLI:
```bash
vercel dev
```

Or you can use the original NestJS backend:
```bash
cd "my profile/backend"
npm install
npm run start:dev
```

## Important Notes

1. **MongoDB Connection**: Make sure your MongoDB Atlas cluster allows connections from anywhere (0.0.0.0/0) or add Vercel's IP addresses
2. **CORS**: The API is configured to allow requests from any origin. You can restrict this in production if needed
3. **Environment Variables**: Never commit `.env` files with sensitive data. Use Vercel's environment variables instead

## Troubleshooting

### Build Fails
- Check that all dependencies are listed in `package.json`
- Ensure Node.js version is compatible (18.x or higher)

### API Returns 500 Errors
- Check MongoDB connection string in environment variables
- Verify MongoDB cluster is accessible from the internet
- Check Vercel function logs in the dashboard

### CORS Errors
- The API already includes CORS headers, but if you see errors, check the `Access-Control-Allow-Origin` header in the API files

## Support

For issues, check:
- [Vercel Documentation](https://vercel.com/docs)
- [MongoDB Atlas Documentation](https://docs.atlas.mongodb.com/)
