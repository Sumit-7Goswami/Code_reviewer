🚀 Code Reviewer

Code Reviewer is an AI-powered MERN stack application that helps developers automatically review their code, detect potential issues, and suggest improvements. The platform is designed to enhance productivity, reduce bugs, and maintain clean coding standards.

✨ Features

🧠 AI-Powered Code Review – Get instant feedback and suggestions.

📂 MERN Stack – Built with MongoDB, Express, React, Node.js.

🔒 Secure APIs – Authentication and token-based access.

📊 Code Quality Insights – Highlights errors, warnings, and best practices.

🌐 Deployed on Vercel & MongoDB Atlas for seamless cloud integration.

🛠️ Tech Stack

Frontend: React, TailwindCss

Backend: Node.js, Express.js

Database: MongoDB (Atlas)

AI Integration: OpenAI API / Custom AI logic

Deployment: Vercel (Frontend), Vercel/Render (Backend)

📂 Project Structure
Code_Reviewer/
│── backend/        # Express backend (API & AI logic)
│── frontend/       # React frontend
│── .gitignore      # Ignored files for GitHub
│── README.md       # Project documentation

⚡ Getting Started
Prerequisites

Make sure you have installed:

Node.js
 (v16 or later)

MongoDB Atlas
 or local MongoDB instance

API Key (if using OpenAI or another AI service)

Installation

1️⃣ Clone the repository

git clone https://github.com/Sumit-7Goswami/Code_reviewer.git
cd Code_reviewer


2️⃣ Install dependencies

cd backend
npm install
cd ../frontend
npm install


3️⃣ Setup environment variables

In backend/.env

MONGO_URI=your_mongo_uri
PORT=5000
OPENAI_API_KEY=your_api_key


4️⃣ Run the project

# Run backend
cd backend
npm start

# Run frontend
cd ../frontend
npm start

🚀 Deployment

Frontend: Deployed on Vercel

Backend: Deploy on Vercel / Render / Railway

Database: MongoDB Atlas

🤝 Contributing

Contributions are welcome! Please fork the repo and create a pull request with your changes.
