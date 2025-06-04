# 📝 Task Manager App

This is a full-stack Dockerized Task Manager web application built for the **Alpha AI Full Stack Web Developer Intern Evaluation**. It includes task CRUD functionality, vector search using `pgvector`, performance caching, and a responsive UI with dark mode.
## 🚀 Features

- Add, edit, and delete tasks
- Task search with semantic vector matching
- Task status filtering (`todo`, `inprogress`, `done`)
- Task update highlights
- Inline editing & real-time feedback
- Caching tasks using `localStorage` for performance
- Responsive design with Bootstrap
- Additional pages: **About Me** and **Contact Form**
- Optional: Light/Dark mode toggle
- PostgreSQL + pgvector-powered semantic search
- Fully containerized with Docker (both frontend and backend)

### ✅ Task Manager
- Add, Edit, Delete, Search Tasks
- Task completion indicator
- Priority tags and timestamps

### 🎨 Dark Mode Support
- Toggle between light and dark themes
- Input fields and layout dynamically styled
- Smooth UX across all components

### 👤 About Me Page
- Education Journey Timeline
- Skills Grid with Java, SQL, React, Spring, etc.
- Achievements and Certifications Showcase

### ✉️ Contact Page
- Clean dark-mode compatible contact form
- Contact details with map & social links
---

## 🧰 Tech Stack

- **Frontend**: React + Vite + Bootstrap 5
- **Backend**: Node.js + Express.js
- **Database**: PostgreSQL + pgvector
- **Vector Embedding**: Python + Sentence Transformers
- **Dockerized**: Frontend and backend run in containers via `docker-compose`

## 📦 Docker Setup

Ensure you have Docker and Docker Compose installed.
---
## 📸 Screenshots
## 📸 Task Manager(Home) Page Preview
![Home Page](./assets/HomePage1_Light_Mode)
![Home Page](./assets/HomePage2_Light_Mode)
## 📸 Dark Mode Enabled
![Home Page](./assets/HomePage_Dark_Mode_1)
![Home Page](./assets/HomePage_Dark_Mode_2)

## 📸 About Page Preview
![About Page](./assets/About_Me_Page1.jpg)
![About Page](./assets/About_Me_Page2.jpg)
![About Page](./assets/About_Me_Page3.jpg)
![About Page](./assets/About_Me_Page4.jpg)
![About Page](./assets/About_Me_Page5.jpg)

## 📸 Contact Page Preview
![Contact Page](./assets/Contact_Page_1.jpg)
![Contact Page](./assets/Contact_Page_2.jpg)

## 📦 Setup Instructions

### 1. Clone the repo
git clone https://github.com/vickyshelar96k/Task-Manager.git
cd Task-Manager

Frontend runs at: http://localhost:5173
Backend runs at: http://localhost:5000

## 🚀 Caching Logic
To improve performance, task data is cached using localStorage.
On page load:
Cached tasks are rendered immediately if available.
API is called in the background to update latest data.
This reduces backend dependency and improves speed.

## 🤖 Vector Search with pgvector
We use sentence-transformers to convert task descriptions into embeddings and store them using pgvector.
How it works:
On task creation, backend generates embedding and stores in Postgres.
When a user searches, their input is also embedded.
We retrieve top 3 similar tasks using:
    SELECT * FROM tasks
    ORDER BY embedding <-> '[query_embedding]'
    LIMIT 3;
The search is handled via /api/tasks/search-similar endpoint.

## 📂 Folder Structure (Simplified)
├── client/               # React frontend
│   ├── src/pages         # About.jsx, Contact.jsx, TaskManager.jsx
│   ├── App.jsx
│   └── main.jsx
├── server/               # Node + Express backend
│   ├── routes/taskRoutes.js
│   ├── controllers/
│   └── db.js
├── docker-compose.yml
├── Dockerfile (frontend & backend)
└── README.md

## ✅ Author
Name: Vikas Shelar
