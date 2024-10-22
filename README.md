# Real-Time WebSocket Application

This application demonstrates a simple setup for receiving real-time data via WebSocket using NestJS as the backend framework and React for the frontend. The backend processes incoming data and stores it in a MongoDB database, while the frontend displays this data in real-time.

## Features

- WebSocket connection to receive real-time data.
- Processing and saving data using a MongoDB database.
- Simple frontend for displaying incoming data.
- CORS support for cross-origin requests.

## Technologies Used

- **Backend**: NestJS, Socket.IO, MongoDB
- **Frontend**: React
- **Database**: MongoDB
- **Deployment**: Aws and Vercel

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- MongoDB (local or cloud instance)
- Postman (for testing WebSocket connection)
- Git (for version control)

### Clone the Repository

```bash
git https://github.com/Ali-web-0/task
cd task

cd backend
npm install

cd frontend
npm install

Configure Environment Variables

Create a .env file in the backend directory and set your MongoDB connection string:

mongodbUrl=mongodb://localhost:27017/your-database-name

cd backend

npm run start:dev

Configure Environment Variables for frontend
create a config.js file in src directory

and paste this 

export const config = { baseUrl: 'http://localhost:3000' };

cd frontend
npm start