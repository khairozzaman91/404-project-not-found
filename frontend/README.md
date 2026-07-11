# 404 Project Frontend

## Overview

This is the frontend application for the **404 Project**, built using **React**, **TypeScript**, **Vite**, and **Tailwind CSS**.

The application contains two major modules:

- Task Management (Kanban Board)
- Image Annotation

The frontend communicates with the Django backend through REST APIs and provides a clean, reusable, and responsive user interface.

---

# Technologies Used

- React
- TypeScript
- Vite
- Tailwind CSS
- React Router DOM
- Axios
- React Context API
- React Konva
- dnd-kit
- Lucide React

---

# Features

## Authentication

- Login page
- Email & Password authentication
- Connected with Django Login API

---

## Task Management

- Kanban Board
- Create Task
- Edit Task
- Delete Task
- Drag and Drop
- Date Filtering
- Task Priority
- Tags
- Due Date
- Empty State
- Shared Date Context

---

## Image Annotation

- Upload Images
- Previous / Next Navigation
- Thumbnail Slider
- Draw Polygon
- Finish Polygon
- Undo Point
- Clear Polygon
- Delete Polygon
- Zoom In
- Zoom Out
- Save Annotation
- Load Annotation
- Delete Image

---

# Components

Reusable components include:

- DashboardLayout
- Sidebar
- Navbar
- DateSelector
- Board
- Column
- TaskCard
- PolygonCanvas
- UploadSection
- ThumbnailSlider
- NavigationSection

---

# Development Journey

## Login Page

### Completed

- Designed a responsive login page.
- Created reusable UI components.
- Connected the frontend with the Django Login API.

### Challenges Faced

Initially, the frontend could not communicate with the backend because of API configuration and CORS issues.

### Solution

Configured Axios correctly and verified backend connectivity after CORS configuration.

---

# Task Board

## Completed

- Built a Kanban board.
- Added drag and drop.
- Added create, edit, and delete functionality.
- Added reusable task components.
- Added shared DateSelector.
- Added task filtering by date.

### Challenges Faced

Synchronizing the selected date across multiple components became difficult when each component managed its own local state.

### Solution

Implemented React Context API so every component shares the same selected date.

---

## Drag and Drop

### Challenges Faced

The Edit and Delete buttons inside TaskCard triggered drag events because the entire card was draggable.

### Solution

Handled pointer events separately so dragging and button actions work independently.

---

## Task Synchronization

### Challenges Faced

After editing a task, the updated task was stored in the backend, but the UI still displayed the previous task until the page was refreshed.

### Solution

Reloaded the task list immediately after successful updates so the latest data is displayed.

---

# Dashboard

## Completed

- Created reusable Dashboard Layout.
- Added Sidebar.
- Added Navbar.
- Added dynamic page titles.

### Challenges Faced

Using different layouts for different pages resulted in duplicated code.

### Solution

Created a reusable DashboardLayout shared by every page.

---

# Annotation Page

## Completed

- Built the annotation page UI.
- Added Previous / Next navigation.
- Added image viewer.
- Added polygon list.
- Added annotation toolbar.
- Added thumbnail slider.

### Challenges Faced

Organizing the annotation interface while keeping the layout responsive became difficult as more features were added.

### Solution

Designed the page using reusable layout sections and Flexbox.

---

# Dynamic Image Viewer

## Completed

- Loaded uploaded images dynamically.
- Displayed thumbnails.
- Displayed selected image.
- Updated image counter automatically.

### Challenges Faced

Initially, the application displayed placeholder images instead of backend images.

### Solution

Connected the frontend with backend image APIs and updated the UI using React state.

---

# Polygon Drawing

## Completed

- Integrated React Konva.
- Added polygon drawing.
- Added Finish Polygon button.
- Added Undo Point.
- Added Delete Polygon.
- Added Clear Polygon.

### Challenges Faced

Initially, polygons were completed using double click, making the workflow less intuitive.

### Solution

Introduced a dedicated Finish Polygon button using forwardRef and useImperativeHandle.

---

# Zoom

## Challenges Faced

The image shifted away from the center while zooming.

### Solution

Moved scaling logic to the Konva Layer and adjusted positioning dynamically.

---

# Annotation Synchronization

### Challenges Faced

Previously saved annotations disappeared after changing images.

### Solution

Moved polygon state to the parent component and synchronized it with the backend whenever the selected image changes.

---

# Polygon Validation

### Challenges Faced

Users could complete polygons with fewer than three points.

### Solution

Added validation to prevent invalid polygons.

---

# Responsive Canvas

### Challenges Faced

Different image sizes caused stretching and inconsistent positioning.

### Solution

Calculated image scaling dynamically while preserving the original aspect ratio.

---

# Code Refactoring

## Completed

Refactored the annotation page into reusable components.

Created:

- UploadSection
- ThumbnailSlider
- NavigationSection

### Challenges Faced

The Annotation page contained too much logic inside a single component, making it difficult to maintain.

### Solution

Separated the UI into reusable components, improving readability, maintainability, and scalability.

---

# Environment

## Frontend

Node.js: **(Your Node Version)**

npm: **(Your npm Version)**

---

# Installation

```bash
git clone <frontend-repository>

cd frontend

npm install

npm run dev
```

---

# Demo Account

Email:

admin@404project.com

Password:

admin123

---

# Live Demo

Frontend:

(Vercel URL) : 404-project-not-found-287l.vercel.app

---

# GitHub Repository

[(Frontend Repository URL)](https://github.com/khairozzaman91/404-project-not-found/tree/main/frontend)