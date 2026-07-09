# Development Log

---

# Feature 1: Login UI

## Technologies Used

- React
- TypeScript
- Vite
- Tailwind CSS

## Components Created

- AuthLayout
- Card
- Input
- Button
- LoginPage
- 
## Database

| Email | Password |
|--------|----------|
| admin@404project.com | admin123 |


## Completed

- Created a clean and responsive login page.
- Added email and password input fields.
- Added a "Remember Me" checkbox.
- Built reusable UI components.
- Designed a simple authentication layout.

## Challenges Faced

- UI components were too close together.
- Tailwind CSS was not working correctly during the initial setup.

## Solution

- Improved spacing using Tailwind CSS utilities.
- Fixed the Tailwind CSS configuration.

---

# Feature 2: Backend Login API

## Technologies Used

- Python
- Django
- Django ORM
- SQLite
- Postman



## Completed

- Created the Admin model.
- Configured SQLite database.
- Inserted a demo admin account.
- Built the Login API.
- Tested the API using Postman.

## Challenges Faced

- URL configuration issues.
- CSRF protection blocked POST requests.
- SQLite setup and manual data insertion.

## Solution

- Fixed URL routing.
- Used `@csrf_exempt` during development.
- Inserted the admin record into SQLite.
- Verified the API using Postman.


### Completed

- Connected the React login form with the Django Login API using Axios.
- Implemented admin authentication using SQLite.
- Redirected authenticated users to the Task Board.
- Tested the login API using Postman.

### Challenges & Solutions

#### CORS Issue

**Problem**
React could not access the Django API due to CORS restrictions.

**Solution**
Installed and configured `django-cors-headers`, added the middleware, and allowed the frontend origin.

#### Frontend & Backend Connection

**Problem**
The frontend could not communicate with the backend during login.

**Solution**
Verified the API endpoint, tested it with Postman, configured Axios correctly, and confirmed successful authentication.


### Completed

- Created the initial Task Board UI.
- Built reusable components:
  - Board
  - Column
  - TaskCard
  - DateSelector
- Organized the task page into a modular component structure.

### Completed

- Created the `Task` model using Django ORM.
- Added the Create Task API (`POST /api/tasks/`).
- Added the Get Tasks API (`GET /api/tasks/list/`).
- Successfully stored task data in the SQLite database.
- Tested both APIs using Postman.

### Challenges

**Problem:**
- I needed to verify whether the Task APIs were correctly storing and retrieving data from the SQLite database.

**Solution:**
- I tested the `POST /api/tasks/` and `GET /api/tasks/list/` endpoints using Postman.
- I verified the API responses and checked the SQLite database to confirm that the task data was successfully stored and retrieved.

  ## Features

### Task Management (Kanban Board)

- User authentication with Django backend
- Create, view, update, and delete tasks
- Kanban board with three columns:
  - To Do
  - In Progress
  - Done
- Date-based task filtering
- Drag and drop tasks between columns using dnd-kit
- Task cards with priority and tags support
- Backend persistence using Django ORM and SQLite


## Challenges & Solutions

### 1. Implementing Drag and Drop

**Challenge:**
Managing task movement between different Kanban columns while keeping the UI state synchronized with the backend.

**Solution:**
Implemented drag and drop functionality using `@dnd-kit/core`. Used draggable task cards and droppable columns. On drag completion, the task status is updated and synchronized with the backend API.


### 2. Drag and Drop Conflict with Edit/Delete Actions

**Challenge:**

While implementing Kanban drag and drop using `@dnd-kit/core`, the entire task card became draggable. Because of this, clicking the Edit or Delete buttons was sometimes detected as a drag action instead of a button click.

**Solution:**

Stopped the drag event propagation from the action button area using pointer event handling. This allowed the task card to remain draggable while keeping Edit and Delete buttons fully functional.

Implemented:
- Drag and drop for task cards between columns.
- Separate handling for card dragging and button actions.
- Fixed event conflicts between draggable elements and clickable buttons.

## Completed

- Implemented task editing functionality.
- Implemented React Context API to synchronize the selected date across components.
- Added task serial numbers.
- Added an empty state message ("No tasks available").
- Improved task card UI and spacing.

## Challenges & Solutions

### 1. Task Edit Issue

**Problem**

After editing a task, the updated data was saved in the database, but the frontend continued showing the old data until the page was refreshed.

**Solution**

Called `loadTasks()` after every successful update so the latest data is fetched from the backend immediately.

---

### 2. Date State Synchronization

**Problem**

The selected date was managed using local component state (`useState`), making it difficult to share between multiple components.

**Solution**

Implemented React Context API using `useContext` and created a shared `DateContext` so both `TasksPage` and `DateSelector` use the same date state.

---

### 3. Empty State

**Problem**

When no tasks existed for a selected date, the task columns appeared empty.

**Solution**

Added a professional message:

> **No tasks available**

to clearly indicate there are no tasks for the selected date.

---

### 4. Task Organization

**Problem**

Tasks did not have any visible ordering.

**Solution**

Added serial numbers (`#1`, `#2`, `#3`, ...) to improve readability and organization.



## Dashboard Layout & Navigation

### Completed

- Created a reusable `DashboardLayout` component.
- Added a reusable `Sidebar` for navigation.
- Added a reusable `Navbar` with dynamic page titles.
- Created the `AnnotationPage`.
- Added routing between **Task Board** and **Image Annotation** pages.
- Refactored the project structure for better scalability and maintainability.
- Integrated the shared dashboard layout across multiple pages.

### Challenge

**Problem:**

As the project expanded with multiple pages, maintaining separate layouts for each page resulted in duplicated code and inconsistent UI.

### Solution

Implemented a reusable `DashboardLayout` that includes a shared `Sidebar` and `Navbar`. Both the **Task Board** and **Annotation** pages now use the same layout while displaying dynamic page titles. This reduced code duplication, improved maintainability, and ensured a consistent user experience.


# Annotation Dashboard

## Features Implemented

- Implemented the Annotation page using a reusable Dashboard Layout.
- Added Previous and Next navigation controls for switching images.
- Added Upload Image and Save Annotation action buttons.
- Created a dedicated Image Viewer section for image annotation.
- Designed a Polygon List panel to display saved polygons.
- Added Delete and Clear buttons for polygon management.
- Implemented a horizontal scrollable thumbnail slider for navigating multiple uploaded images.
- Structured the layout to support future backend integration for image upload, image navigation, polygon drawing, and annotation persistence.

---

## Challenges Faced

### 1. Annotation Page Layout

Initially, arranging the Image Viewer, Polygon List, and action buttons while maintaining a clean and responsive layout was challenging. Different layout approaches resulted in inconsistent spacing and alignment.

### Solution

Refactored the page using a Flexbox-based layout, allowing the Image Viewer and Polygon List to remain aligned while keeping the interface responsive and easier to maintain.

---

### 2. Positioning Annotation Controls

Finding the best position for the Delete and Clear buttons was difficult. Placing them inside the Polygon List or Image Viewer made the interface look cluttered and interrupted the annotation workflow.

### Solution

Moved the annotation action buttons below the Image Viewer and above the thumbnail slider, creating a clear separation between annotation actions and image navigation.

---

### 3. Thumbnail Navigation

Designing a thumbnail section that could later support multiple uploaded images without affecting the overall layout required careful planning.

### Solution

Implemented a dedicated horizontal scrollable thumbnail slider. The current UI uses placeholder thumbnails, making it easy to replace them with dynamically loaded images from the backend later.

---

### 4. Future Backend Integration

The Annotation page needed to support future backend functionality such as image uploads, image navigation, polygon storage, and annotation persistence.

### Solution

Designed the UI in a modular way so each section (Image Viewer, Polygon List, Navigation, and Thumbnail Slider) can be connected to backend APIs independently without major UI changes.


## Annotation Backend

### Completed

- Created `annotation` Django app.
- Added `Image` model using `ImageField`.
- Configured media file handling (`MEDIA_URL` and `MEDIA_ROOT`).
- Implemented image upload API (`POST /api/annotation/images/`).
- Implemented image list API (`GET /api/annotation/images/`).
- Registered image model in Django Admin.
- Tested image upload and retrieval successfully using Postman.

  ### Problems Faced

1. Django raised an error when using `ImageField` because Pillow was not installed.

2. Uploaded images were not accessible until media file serving was configured in Django.

3. Initially, the annotation APIs were not reachable because the `annotation` app routes had not been included in the project URLs.

### Solutions

1. Installed the Pillow package to enable Django's `ImageField` support.

2. Configured `MEDIA_URL` and `MEDIA_ROOT` in `settings.py` and served media files during development using `static()` in `config/urls.py`.

3. Created dedicated annotation routes and registered them in the project's URL configuration.

4. Verified both upload (`POST`) and retrieval (`GET`) endpoints using Postman before integrating the frontend.
