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
| admin@404project.com | admin |Admin213 |

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
