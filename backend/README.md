# 404 Project Backend

## Overview

This is the backend application for the **404 Project**, built using **Django** and **Django ORM**.

The backend provides REST APIs for:

- User Authentication
- Task Management
- Image Upload
- Image Annotation
- Annotation Persistence

All data is stored using **SQLite** and managed through **Django ORM**.

---

# Technologies Used

- Python
- Django
- Django ORM
- SQLite
- Django REST Framework
- Pillow
- django-cors-headers
- Postman

---

# Features

## Authentication

- Admin Login API
- Email & Password authentication
- SQLite authentication

---

## Task Management

- Create Task
- Get Tasks
- Update Task
- Delete Task
- Filter tasks by date
- Store tasks using Django ORM

---

## Image Annotation

- Upload Image
- Get Images
- Save Annotation
- Get Annotation
- Delete Image
- Delete Annotation
- Persist polygons in SQLite

---

# Database

## Models

### Admin

- Email
- Password

### Task

- Title
- Priority
- Due Date
- Tags
- Status

### Image

- Image File

### Annotation

- Image
- Polygon Points

---

# API Endpoints

## Authentication

POST

```
/api/login/
```

---

## Task

GET

```
/api/tasks/list/
```

POST

```
/api/tasks/
```

PUT

```
/api/tasks/<id>/
```

DELETE

```
/api/tasks/<id>/
```

---

## Annotation

GET Images

```
/api/annotation/images/
```

POST Image

```
/api/annotation/images/
```

GET Annotation

```
/api/annotation/annotations/?image=id
```

POST Annotation

```
/api/annotation/annotations/
```

DELETE Annotation

```
/api/annotation/annotations/<id>/
```

DELETE Image

```
/api/annotation/images/<id>/
```

---

# Postman Testing

All backend APIs were tested using Postman before frontend integration.

Verified APIs:

- Login API
- Create Task
- Get Tasks
- Update Task
- Delete Task
- Upload Image
- Get Images
- Save Annotation
- Get Annotation
- Delete Annotation
- Delete Image

---

# Development Journey

## Login API

### Completed

- Created Admin model.
- Configured SQLite.
- Created Login API.
- Connected authentication with frontend.

### Challenges Faced

Initially, login requests failed because of URL configuration and CSRF restrictions.

### Solution

Fixed URL routing, configured CSRF for development, and verified authentication using Postman.

---

# Task APIs

## Completed

- Created Task model.
- Implemented Create API.
- Implemented Get API.
- Implemented Update API.
- Implemented Delete API.
- Stored tasks using Django ORM.

### Challenges Faced

Initially, it was necessary to verify whether tasks were correctly stored and retrieved from the database.

### Solution

Tested every endpoint using Postman and verified SQLite records.

---

# Annotation Backend

## Completed

- Created Annotation application.
- Created Image model.
- Created Annotation model.
- Configured media handling.
- Implemented image upload.
- Implemented image retrieval.
- Implemented annotation save.
- Implemented annotation retrieval.
- Implemented image deletion.
- Implemented annotation deletion.

---

### Challenges Faced

Initially, Django could not store uploaded images because Pillow was missing.

### Solution

Installed Pillow and configured MEDIA_URL and MEDIA_ROOT.

---

### Challenges Faced

Uploaded media files could not be accessed from the frontend.

### Solution

Configured media serving using Django static() during development.

---

### Challenges Faced

Annotation routes were inaccessible because the URLs were not registered.

### Solution

Created dedicated annotation routes and included them in the project URL configuration.

---

# Annotation Persistence

## Completed

- Saved polygon annotations.
- Loaded annotations automatically.
- Synced frontend and backend state.

### Challenges Faced

Previously saved annotations disappeared when changing images.

### Solution

Returned annotation data through the API and synchronized frontend state after every request.

---

# Duplicate Annotation Issue

### Challenges Faced

Every save operation created duplicate annotation records.

### Solution

Removed existing annotations for the selected image before saving new polygons.

---

# Empty Annotation Issue

### Challenges Faced

Saving an empty polygon list caused validation errors.

### Solution

Updated backend validation to accept empty arrays while validating required request fields.

---

# Polygon Synchronization

### Challenges Faced

Deleting polygons in the frontend did not remove them permanently from the database.

### Solution

Updated backend save logic so the latest polygon state completely replaces previous annotations.

---

# Image Management

### Completed

- Added Delete Image API.
- Removed image from database.
- Removed image from media storage.
- Deleted related annotations automatically using CASCADE.

---

### Challenges Faced

Deleting an image removed the database record but related files and annotations required proper cleanup.

### Solution

Used Django relationships with CASCADE and removed media files during image deletion.

---

# Validation Fix

### Problem

Backend validation used:

```python
if not image_id or not points:
```

This rejected empty polygon lists.

### Solution

Updated validation to:

```python
if image_id is None or points is None:
```

### Result

- Annotation save works correctly.
- Deleted polygons remain deleted.
- Database stays synchronized.
- Refresh no longer restores deleted annotations.

---

# Environment

## Backend

Python: **(Your Python Version)**

Django: **(Your Django Version)**

---

# Installation

```bash
git clone <backend-repository>

cd backend

python -m venv venv

# Windows
venv\Scripts\activate

# macOS/Linux
source venv/bin/activate

pip install -r requirements.txt

python manage.py migrate

python manage.py runserver
```

---

# Demo Account

Email:

admin@404project.com

Password:

admin123

---

# Live API

(Add Render URL)

---

# GitHub Repository

[(Backend Repository URL)](https://github.com/khairozzaman91/404-project-not-found/tree/main/backend)