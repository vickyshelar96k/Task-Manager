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
- Ensure you have Docker and Docker Compose installed.

## 📽️ Video Demo
- https://drive.google.com/file/d/1RVQC6nGW-13pdxabuD1aX0JRZ7I8BZwZ/view?usp=sharing
---
## 📸 Screenshots
## 📸 Task Manager(Home) Page Preview Light Mode
![HomePage1_Light_Mode](https://github.com/user-attachments/assets/a07fa6f3-bba0-4c95-bece-e2c7d3e278b5)
![HomePage2_Light_Mode](https://github.com/user-attachments/assets/3795af6e-cd0f-481e-ba8a-2e62bb9432bb)

## 📸 Dark Mode Enabled
![HomePage_Dark_Mode_1](https://github.com/user-attachments/assets/80b10faa-3d0f-4b0a-b534-e7c80cdd3207)
![HomePage_Dark_Mode_2](https://github.com/user-attachments/assets/0b3e7665-164c-4058-a7ac-8c21de264135)

## 📸 About Page Preview
![About_Me_Page1](https://github.com/user-attachments/assets/cc88c33b-9124-4ab6-8440-c8384e883af9)
![About_Me_Page2](https://github.com/user-attachments/assets/2dd27ffc-4199-40b3-a17f-18de5c5f7f3d)
![About_Me_Page3](https://github.com/user-attachments/assets/f485a3e8-70a3-4bbb-b086-4a22d9359a1b)
![About_Me_Page4](https://github.com/user-attachments/assets/df495dfb-e340-40fa-a4dd-83a869bef629)
![About_Me_Page5](https://github.com/user-attachments/assets/b756f800-d8d1-45dc-a40e-3e408edf5888)

## 📸 Contact Page Preview
![Contact_Page_1](https://github.com/user-attachments/assets/dd4bea43-8b1d-4c07-af8d-60292d9a073d)
![Contact_Page_2](https://github.com/user-attachments/assets/2b0a823a-9926-4ed5-b29a-12afd2d50d9e)

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
![image](https://github.com/user-attachments/assets/3ba2b204-16b7-406c-85fc-5f7c8fa94a46)



## ✅ Author
Name: Vikas Shelar
