# 🚀 404 Project Not Found

A full-stack **Task Management & Medical Image Annotation Platform** built with **React, TypeScript, Django, and SQLite**. The application combines a Kanban-style task management system with an interactive image annotation tool, demonstrating modern frontend development, RESTful API integration, reusable component architecture, and backend data persistence.

---

## 📌 Project Overview

This project was developed to provide a complete workflow for task management and image annotation within a single application.

It includes:

- Secure administrator authentication
- Kanban-style task management
- Medical image upload and navigation
- Polygon-based image annotation
- Backend persistence for annotations
- Responsive dashboard interface
- RESTful API integration

---

## ✨ Features

### 🔐 Authentication

- Secure Admin Login
- Django Authentication API
- Protected Dashboard
- Axios API Integration

### 📋 Task Management

- Create Task
- Update Task
- Delete Task
- Kanban Board
- Drag & Drop Tasks
- Date Filtering
- Task Status Management
- Backend Persistence

### 📊 Dashboard

- Reusable Dashboard Layout
- Sidebar Navigation
- Responsive Navbar
- Dynamic Page Titles

### 🖼 Image Annotation

- Upload Images
- Previous / Next Navigation
- Thumbnail Gallery
- Polygon Drawing
- Undo Points
- Finish Polygon
- Delete Polygon
- Clear Polygon
- Zoom In / Zoom Out
- Save Annotations
- Load Existing Annotations
- Delete Images

---

# 🏗 System Architecture

```text
React + TypeScript
        │
      Axios
        │
 RESTful API
        │
 Django Backend
        │
 Django ORM
        │
    SQLite
```

---

## 🛠 Tech Stack

### Frontend

- React
- TypeScript
- Vite
- Tailwind CSS
- React Context API
- Axios
- React Konva
- dnd-kit

### Backend

- Python
- Django
- Django ORM
- SQLite
- Pillow

### Tools

- Git
- GitHub
- Postman
- Vercel
- PythonAnywhere

---

# 📂 Project Structure

```text
frontend/
│
├── components/
├── context/
├── hooks/
├── pages/
├── services/
└── utils/

backend/
│
├── authentication/
├── annotation/
├── tasks/
├── media/
└── config/
```

---

# 🌐 REST APIs

## Authentication

```http
POST /api/login/
```

---

## Tasks

```http
GET    /api/tasks/list/
POST   /api/tasks/
PUT    /api/tasks/{id}/
DELETE /api/tasks/{id}/
```

---

## Images

```http
GET    /api/annotation/images/
POST   /api/annotation/images/
DELETE /api/annotation/images/{id}/
```

---

## Annotations

```http
GET    /api/annotation/
POST   /api/annotation/
DELETE /api/annotation/
```

---

# 🚧 Engineering Challenges Solved

During development, several real-world engineering problems were addressed:

- Designed reusable React components to improve maintainability.
- Built a reusable Dashboard Layout shared across multiple pages.
- Integrated frontend with Django REST APIs using Axios.
- Resolved CORS configuration between React and Django.
- Implemented Drag & Drop using **dnd-kit**.
- Prevented drag events from interfering with Edit/Delete actions.
- Used React Context API to eliminate unnecessary prop drilling.
- Built an interactive annotation canvas using **React Konva**.
- Implemented Parent–Child communication using `forwardRef` and `useImperativeHandle`.
- Persisted polygon annotations in the backend.
- Fixed duplicate annotation records.
- Supported empty annotation deletion.
- Added dynamic image upload and navigation.
- Implemented image deletion with automatic annotation cleanup.
- Improved zoom behavior while keeping images centered.
- Restricted drawing outside image boundaries.
- Validated polygon creation before saving.
- Refactored large components into reusable modules.
- Successfully deployed the frontend and backend while resolving production CORS and deployment issues.

---

# 🧪 API Testing

All backend APIs were tested using **Postman** before frontend integration.

Verified:

- Authentication API
- Task CRUD APIs
- Image Upload API
- Image List API
- Annotation Save API
- Annotation Retrieval API
- Image Delete API
- Annotation Delete API

---

# ⚙ Installation

## Clone Repository

```bash
git clone https://github.com/khairozzaman91/404-project-not-found.git
cd 404-project-not-found
```

---

## Frontend

```bash
npm install

npm run dev
```

---

## Backend

Create Virtual Environment

```bash
python -m venv venv
```

Windows

```bash
venv\Scripts\activate
```

Linux / macOS

```bash
source venv/bin/activate
```

Install Packages

```bash
pip install -r requirements.txt
```

Run Server

```bash
python manage.py migrate

python manage.py runserver
```

---

# 🔑 Demo Account

| Email | Password |
|--------|----------|
| admin@404project.com | admin123 |

---

# 🚀 Deployment

Frontend

- Vercel

Backend

- PythonAnywhere

---

# 📚 What I Learned

This project strengthened my practical understanding of:

- Full-Stack Web Development
- RESTful API Design
- React State Management
- Django Backend Development
- Image Annotation Workflows
- React Component Architecture
- Database Integration
- API Testing with Postman
- Deployment & Production Debugging

---


# 👨‍💻 Author

**Md. Khairozzaman**

- GitHub: https://github.com/khairozzaman91
- LinkedIn: https://linkedin.com/in/md-khairozzaman-187048298

---

## ⭐ If you found this project useful, consider giving it a star!
