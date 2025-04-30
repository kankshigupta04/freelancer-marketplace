# Freelancer Marketplace

A web application that connects freelancers with clients seeking various services. Freelancers can create profiles, upload their resumes, and showcase their skills. Clients can post job projects, and freelancers can apply for them. This project leverages a **MERN stack** (MongoDB, Express.js, React, Node.js) to provide a seamless and interactive user experience.

## Features

- **Freelancer Registration**: Freelancers can sign up, provide their name, email, skills, experience, and upload their resumes.
- **Client Project Postings**: Clients can post projects, including project title, description, budget, and deadlines.
- **Freelancer Profile**: Freelancers can create a detailed profile to showcase their skills and work experience.
- **Project Application**: Freelancers can view available projects and apply for them.
- **Resume Upload**: Freelancers can upload resumes in PDF format to enhance their profiles.

## Tech Stack

- **Frontend**: React, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (MongoDB Atlas)
- **Authentication**: JWT (JSON Web Token)
- **File Upload**: Multer (for handling file uploads)

## Getting Started

Follow the steps below to set up the project on your local machine:

### Prerequisites

Ensure that you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [MongoDB Atlas Account](https://www.mongodb.com/cloud/atlas) for cloud database (or MongoDB locally)

### Installation

#### 1. Clone the repository

Clone the project to your local machine:

```bash
git clone https://github.com/your-username/freelancer-marketplace.git
cd freelancer-marketplace
```
#### 2. Install dependencies
For the backend:
Navigate to the backend folder (if your backend is separate):
```bash
cd backend
```
Install the backend dependencies::
```bash
npm install
```
For the frontend:
Navigate to the frontend folder
```bash
cd frontend
```
Install thefrontend dependencies::
```bash
npm install
```
#### 3. Configuration
Create a .env file in the backend folder and set the following environment variables:
```bash
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```
MONGO_URI: This is the connection string to your MongoDB database (from MongoDB Atlas or local setup).
JWT_SECRET: This is a secret key used for JWT authentication. You can generate a random string or use something secure for your app.

### API Endpoints
#### Freelancer Routes
-POST /api/freelancers: Register a new freelancer (name, email, skills, experience, resume).
-GET /api/freelancers: Get all freelancers (for admin or client use).
-GET /api/freelancers/:id: Get details of a single freelancer's profile.

#### Project Routes
-POST /api/projects: Post a new project (title, description, field, budget, deadline).
-GET /api/projects: Get all posted projects.
-GET /api/projects/:id: Get details of a single project.

### Troubleshooting
-Error: "Cannot find module":
Ensure all dependencies are installed correctly by running npm install in both the frontend and backend directories.
Make sure that your MONGO_URI in the .env file is correct and points to your MongoDB instance.
-Frontend not loading:
Check if your backend is running correctly at http://localhost:5000.
Ensure that both frontend and backend servers are running simultaneously in separate terminal windows.
  
