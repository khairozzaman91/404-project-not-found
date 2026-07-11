# 404 Project Not Found

A full-stack task management and image annotation system built using **React**, **TypeScript**, **Django**, and **SQLite**.

---

# Development Journey

---

# Authentication Module (Frontend)

## Technologies Used

- React
- TypeScript
- Vite
- Tailwind CSS

---

## Components Created

- AuthLayout
- Card
- Input
- Button
- LoginPage

---

## Demo Credentials

| Email | Password |
|--------|----------|
| admin@404project.com | admin123 |

---

# Completed

- Created a clean and responsive Login page.
- Added Email input field.
- Added Password input field.
- Added Remember Me checkbox.
- Built reusable UI components.
- Designed a reusable authentication layout.

---

# Challenges Faced

## UI Components

Initially, the spacing between UI components was inconsistent, causing the login form to look crowded.

---

## Tailwind CSS

Tailwind CSS styles were not being applied correctly after the initial project setup.

---

# Solution

### UI Components

Improved spacing using Tailwind CSS utility classes and adjusted margins and padding to create a cleaner layout.

### Tailwind CSS

Verified and fixed the Tailwind CSS configuration, ensuring all utility classes were loaded correctly.

---

# Backend Authentication API

## Technologies Used

- Python
- Django
- Django ORM
- SQLite
- Postman

---

# Completed

- Created the Admin model.
- Configured SQLite database.
- Inserted a demo administrator account.
- Built the Login API.
- Connected Django ORM with SQLite.
- Successfully authenticated administrator credentials.

---

# API

## Login

```
POST /api/login/
```

---

# Database

| Email | Password |
|--------|----------|
| admin@404project.com | admin123 |

---

# Challenges Faced

## URL Configuration

The Login API endpoint was not accessible because of incorrect URL routing.

---

## CSRF Protection

POST requests were blocked by Django's CSRF protection during development.

---

## SQLite Setup

Creating the SQLite database and inserting the administrator account required manual configuration.

---

# Solution

### URL Configuration

Updated Django URL routing and correctly registered the authentication endpoints.

### CSRF

Used `@csrf_exempt` during development to simplify API testing.

### SQLite

Inserted the administrator account manually into the SQLite database and verified the data.

---

# API Testing

The Login API was tested using **Postman**.

Verified:

- Request payload
- Response status
- Authentication success
- Invalid credential handling

---

# Frontend & Backend Integration

# Completed

- Connected the React Login page with the Django Login API using Axios.
- Implemented administrator authentication.
- Redirected authenticated users to the Task Board.
- Successfully connected the frontend with the backend.
- Verified API responses using Postman.

---

# Challenges Faced

## CORS Issue

The React frontend could not communicate with the Django backend because the browser blocked cross-origin requests.

---

## Frontend & Backend Connection

The frontend failed to authenticate because the API endpoint configuration was incorrect.

---

# Solution

### CORS

Installed and configured:

```
django-cors-headers
```

Added the middleware and allowed the frontend origin.

---

### API Connection

- Verified API endpoints.
- Tested endpoints using Postman.
- Configured Axios correctly.
- Successfully established communication between the frontend and backend.

---

# API Testing

The complete authentication flow was tested using **Postman** before integrating it with the frontend.

Verified:

- POST request
- Response body
- Authentication
- Error handling

---

# Task Board UI

# Completed

Created the initial Kanban Board interface.

Built reusable components:

- Board
- Column
- TaskCard
- DateSelector

Organized the page using reusable React components to improve scalability and maintainability.

---

# Challenges Faced

Initially, the Task Board UI was placed inside a single component, making the code difficult to maintain as the project grew.

---

# Solution

Separated the UI into reusable components so that each component had a single responsibility.

---

# Task Backend

# Technologies Used

- Django
- Django ORM
- SQLite
- Postman

---

# Completed

- Created the Task model.
- Built Create Task API.
- Built Get Tasks API.
- Stored task data inside SQLite.
- Connected Django ORM with SQLite.

---

# APIs

## Create Task

```
POST /api/tasks/
```

## Get Tasks

```
GET /api/tasks/list/
```

---

# Challenges Faced

Initially, it was difficult to verify whether the APIs were correctly storing and retrieving task data from SQLite.

---

# Solution

Used **Postman** to test both endpoints.

Verified:

- POST request
- GET request
- Response body
- Stored database records

Also checked the SQLite database manually to confirm that the task data was successfully stored and retrieved.

---

# Features

## Task Management

- User authentication using Django backend.
- Create Task.
- View Task.
- Update Task.
- Delete Task.
- Kanban Board.
- Date filtering.
- Backend persistence.
- SQLite integration.

---

## Kanban Columns

- To Do
- In Progress
- Done

---

# Drag and Drop

# Completed

Implemented drag-and-drop functionality using **@dnd-kit/core**.

Users can now move tasks between:

- To Do
- In Progress
- Done

---

# Challenges Faced

Managing task movement while keeping both the frontend and backend synchronized.

---

# Solution

Updated the task status immediately after drag completion and synchronized the updated task with the backend.

---

# Challenges Faced

## Drag & Drop Conflict

While implementing drag-and-drop using **@dnd-kit/core**, the entire task card became draggable.

Because of this:

- Clicking Edit sometimes started dragging.
- Clicking Delete sometimes started dragging.

The action buttons could not be clicked reliably.

---

# Solution

Stopped drag event propagation from the action button area.

Implemented:

- Independent drag handling.
- Independent Edit button handling.
- Independent Delete button handling.
- Proper separation between dragging and clicking.

This allowed the task card to remain draggable while keeping the Edit and Delete buttons fully functional.

---
# Task Editing & State Management

## Completed

- Implemented task editing functionality.
- Implemented React Context API to synchronize the selected date across components.
- Added task serial numbers.
- Added an empty state message ("No tasks available").
- Improved task card UI and spacing.

---

## Challenges Faced

### Task Edit Issue

After editing a task, the updated data was successfully saved in the database, but the frontend continued showing the old data until the page was refreshed.

### Solution

Called `loadTasks()` immediately after every successful update so the latest task data is fetched from the backend and rendered without requiring a page refresh.

---

## Challenges Faced

### Date State Synchronization

Initially, the selected date was managed using local component state (`useState`). Because of this, sharing the selected date between multiple components became difficult.

### Solution

Implemented React Context API using `useContext`.

Created a shared `DateContext` so both `TasksPage` and `DateSelector` access the same selected date without prop drilling.

---

## Challenges Faced

### Empty State

When there were no tasks for a selected date, the Kanban columns appeared completely empty, making it difficult for users to understand whether tasks failed to load or simply did not exist.

### Solution

Added a professional empty state message:

> **No tasks available**

This clearly indicates that no tasks exist for the selected date.

---

## Challenges Faced

### Task Organization

Tasks had no visible ordering, making multiple tasks difficult to identify quickly.

### Solution

Added serial numbering:

```
#1
#2
#3
...
```

This improves readability and task organization.

---

# Dashboard Layout & Navigation

## Completed

- Created a reusable DashboardLayout component.
- Created a reusable Sidebar.
- Created a reusable Navbar.
- Added dynamic page titles.
- Created the Annotation page.
- Added routing between Task Board and Annotation pages.
- Refactored the overall page structure for better scalability.
- Reused the same layout across multiple pages.

---

## Challenges Faced

As the application expanded beyond the Task Board, maintaining separate layouts for each page resulted in duplicated code and inconsistent UI.

---

## Solution

Created a reusable `DashboardLayout` component containing:

- Sidebar
- Navbar
- Dynamic Page Title

Both the Task Board and Annotation pages now share the same layout while displaying different page titles.

Benefits:

- Reduced duplicate code.
- Improved maintainability.
- Consistent user experience.
- Easier future expansion.

---

# Annotation Dashboard

## Completed

Implemented the Annotation page using the shared Dashboard Layout.

Added:

- Previous Image button.
- Next Image button.
- Upload Image button.
- Save Annotation button.
- Image Viewer section.
- Polygon List panel.
- Delete Polygon button.
- Clear Polygon button.
- Horizontal Thumbnail Slider.

The layout was designed to support future backend integration for:

- Image Upload
- Image Navigation
- Polygon Drawing
- Annotation Persistence

---

## Challenges Faced

### Annotation Page Layout

Initially, arranging the Image Viewer, Polygon List, Navigation, and Toolbar while keeping the layout clean and responsive was difficult.

Several layout approaches resulted in inconsistent spacing and alignment.

### Solution

Refactored the page using Flexbox.

Separated the page into independent sections:

- Image Navigation
- Upload Section
- Image Viewer
- Polygon List
- Annotation Toolbar
- Thumbnail Slider

This made the UI easier to maintain and improved responsiveness.

---

## Challenges Faced

### Annotation Toolbar Position

Finding the most intuitive location for the Delete and Clear actions was difficult.

Placing them inside the Image Viewer or Polygon List made the interface cluttered.

### Solution

Moved all annotation actions into a dedicated Annotation Toolbar located below the Image Viewer.

This clearly separates annotation tools from image navigation.

---

## Challenges Faced

### Thumbnail Navigation

The thumbnail gallery needed to support multiple uploaded images without affecting the overall layout.

### Solution

Designed a horizontally scrollable thumbnail slider.

Initially the slider displayed placeholder images, making it easy to replace them later with backend data.

---

## Challenges Faced

### Future Backend Integration

The UI needed to support future features such as:

- Image Upload
- Image Navigation
- Polygon Storage
- Annotation Persistence

### Solution

Designed every section independently so each feature could later connect to backend APIs without requiring major UI changes.

---

# Annotation Backend

## Technologies Used

- Python
- Django
- Django ORM
- SQLite
- Pillow
- Postman

---

## Completed

- Created the `annotation` Django application.
- Created the `Image` model using `ImageField`.
- Configured `MEDIA_URL`.
- Configured `MEDIA_ROOT`.
- Implemented Image Upload API.
- Implemented Image List API.
- Registered the Image model inside Django Admin.
- Successfully uploaded images.
- Successfully retrieved uploaded images.

---

## APIs

### Upload Image

```
POST /api/annotation/images/
```

### Get Images

```
GET /api/annotation/images/
```

---

## API Testing

All APIs were tested using **Postman**.

Verified:

- Image upload.
- Multipart form request.
- Response status.
- Database records.
- Uploaded media files.

---

## Challenges Faced

### ImageField Error

Django raised an error because Pillow was not installed.

### Solution

Installed Pillow and verified that `ImageField` works correctly.

---

## Challenges Faced

### Media Files

Uploaded images could not be accessed after uploading.

### Solution

Configured:

- MEDIA_URL
- MEDIA_ROOT

Served media files during development using:

```python
static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
```

---

## Challenges Faced

### URL Configuration

Initially the Annotation APIs were unreachable because the annotation routes had not been registered.

### Solution

Created dedicated annotation URLs and included them inside the project routing configuration.

---

## API Verification

Verified using Postman:

- POST request
- GET request
- Response body
- Uploaded image
- SQLite database records

Successfully confirmed that the backend worked correctly before integrating it with the frontend.

---
# Dynamic Image Loading & Image Viewer

## Completed

- Connected the Annotation page with the Django backend.
- Fetched uploaded images using the Image API.
- Implemented frontend image upload functionality.
- Displayed uploaded images as dynamic thumbnails.
- Displayed the selected image inside the Image Viewer.
- Automatically selected the first uploaded image after loading.
- Updated the image navigation counter dynamically.

---

## Challenges Faced

### Static Thumbnail Data

Initially, the thumbnail gallery displayed only static placeholder images. Newly uploaded images did not appear in the interface, and the Image Viewer continued displaying placeholder content.

---

## Solution

Integrated the frontend with the backend Image APIs.

Implemented:

- Dynamic image loading.
- Image state management.
- Automatic refresh after every successful upload.
- Automatic selection of the first available image.

Uploaded images now appear immediately without requiring a page refresh.

---

# Image Previous & Next Navigation

## Completed

- Added Previous Image navigation.
- Added Next Image navigation.
- Implemented seamless image switching without reloading the page.
- Updated the Image Viewer dynamically.
- Updated the image counter automatically.
- Disabled the Previous button on the first image.
- Disabled the Next button on the last image.
- Kept the thumbnail gallery synchronized with the selected image.

---

## Challenges Faced

Initially, image navigation was only possible by clicking thumbnail images.

There was no simple way to browse uploaded images sequentially.

Synchronizing:

- Selected Image
- Image Counter
- Thumbnail Selection

required additional state management.

---

## Solution

Tracked the currently selected image using React state.

Whenever the selected image changes:

- Image Viewer updates.
- Thumbnail selection updates.
- Previous / Next navigation updates.
- Image counter updates.

Boundary validation prevents navigation beyond the first and last uploaded image.

---

# Annotation Module

## Technologies Used

- React Konva
- React
- TypeScript

---

## Completed

- Integrated React Konva into the Annotation page.
- Rendered uploaded images inside the annotation canvas.
- Added interactive point placement.
- Prepared the foundation for polygon drawing.

---

## Challenges Faced

Initially, images were displayed using a standard HTML `<img>` element.

Because of this:

- Drawing on top of images was impossible.
- Polygon rendering was not supported.
- Mouse interaction could not be captured correctly.

Replacing the Image Viewer while preserving the existing layout also required restructuring the component.

---

## Solution

Replaced the traditional image viewer with React Konva.

Uploaded images are now rendered directly inside the canvas.

Captured mouse coordinates on click events to support future polygon drawing while preserving:

- Image navigation
- Thumbnail gallery
- Existing layout

---

# Polygon Drawing

## Completed

- Added Draw Polygon mode.
- Enabled and disabled drawing using a toolbar button.
- Added a dedicated Annotation Toolbar.

---

## Challenges Faced

Initially, users could start drawing immediately after opening the Annotation page.

This caused accidental annotations while navigating between images.

---

## Solution

Introduced a dedicated Draw Polygon mode.

Drawing is now enabled only after clicking the Draw Polygon button.

This prevents accidental point placement.

---

# Annotation Toolbar

## Completed

Created a dedicated Annotation Toolbar containing:

- Draw Polygon
- Finish Polygon
- Undo Point
- Clear Polygon
- Delete Polygon
- Zoom In
- Zoom Out

---

## Challenges Faced

Initially, annotation actions were scattered throughout the interface, making the workflow confusing.

---

## Solution

Moved all annotation actions into a single toolbar located below the Image Viewer.

This provides a cleaner and more organized annotation workflow.

---

# Parent–Child Component Communication

## Completed

- Added `forwardRef`.
- Added `useImperativeHandle`.
- Connected the toolbar with the PolygonCanvas.
- Replaced double-click polygon completion with the Finish Polygon button.

---

## Challenges Faced

Toolbar buttons could not directly control the PolygonCanvas component because the drawing state existed inside the child component.

Additionally, double-clicking to finish polygons was not intuitive.

---

## Solution

Implemented:

- `forwardRef`
- `useImperativeHandle`
- `useRef`

Exposed canvas methods to the parent component.

The toolbar can now directly control:

- Finish Polygon
- Undo Point
- Clear Polygon
- Delete Polygon
- Zoom In
- Zoom Out

without tightly coupling the components.

---

# Undo Point

## Completed

- Added Undo Point functionality.
- Connected the toolbar with the PolygonCanvas.
- Limited undo functionality to the currently active polygon.

---

## Challenges Faced

Undo needed to remove only the last point of the polygon currently being drawn while keeping previously completed polygons unchanged.

---

## Solution

Reused the exposed `undoPoint()` method through `forwardRef`.

Triggered the undo action from the parent component using `canvasRef`.

Previously completed polygons remain untouched while only the active polygon is modified.

---
# Annotation Persistence

## Completed

- Implemented annotation persistence workflow.
- Saved annotations are automatically loaded when switching between images.
- Synchronized the PolygonCanvas state with backend annotation data.
- Improved image navigation and annotation rendering.
- Connected frontend annotation state with the backend database.

---

## Challenges Faced

### Annotation Synchronization

Initially, previously saved annotations were not displayed after switching between images, even though the annotation data already existed in the database.

The PolygonCanvas state and the parent component state became out of sync, causing polygons to disappear whenever another image was selected.

---

## Solution

Refactored the annotation workflow by lifting the polygon state to the parent component.

Passed polygon data to `PolygonCanvas` through props.

Whenever the selected image changes:

- Fetch annotations from the backend.
- Update the parent state.
- Synchronize the PolygonCanvas.
- Render previously saved polygons automatically.

This keeps the frontend synchronized with the database.

---

# Delete Annotation Issue

## Problem

After deleting every polygon and saving the image, the frontend correctly displayed an empty canvas.

However, after refreshing the page, the deleted annotations appeared again because they still existed in the database.

---

## Root Cause

Every save request created new annotation records instead of replacing the previous records.

The backend validation also rejected empty polygon arrays.

---

## Challenges Faced

### Duplicate Annotation Records

Every save operation inserted new annotation records into the database.

Old annotation records were never removed.

This produced duplicate polygon data.

---

## Solution

Before saving annotations, deleted every existing annotation belonging to the selected image.

```python
Annotation.objects.filter(image_id=image_id).delete()
```

The backend now replaces old annotations with the latest annotation set instead of creating duplicates.

---

## Challenges Faced

### Empty Annotation Handling

Deleting all polygons resulted in an empty array.

The backend rejected the request because the validation treated an empty array as invalid.

---

## Root Cause

The backend validation was:

```python
if not image_id or not points:
```

An empty list evaluates to `False`, so valid delete operations failed.

---

## Solution

Updated the validation logic to:

```python
if image_id is None or points is None:
```

Now the backend correctly accepts an empty polygon list while still validating required request fields.

---

## Challenges Faced

### Polygon Synchronization

Deleting polygons from the frontend did not immediately synchronize with the backend.

---

## Solution

Improved synchronization between the React state and backend APIs.

Updated the polygon state before saving annotations so both frontend and backend always contain the same polygon data.

---

# Result

After implementing these improvements:

- Annotation saving works correctly.
- Deleted polygons are permanently removed.
- Refreshing the page no longer restores deleted polygons.
- Frontend and backend remain synchronized.

---

# Image Management

## Completed

- Added image deletion functionality.
- Implemented image delete endpoint in Django.
- Removed image records from the database.
- Removed image files from media storage.
- Automatically removed related annotations using Django Cascade Delete.
- Added delete action inside the thumbnail slider.
- Displayed a delete icon when hovering over image thumbnails.

---

## Challenges Faced

Initially, uploaded images could not be removed from the application.

Deleting an image from the frontend still left the image stored inside the backend database.

Related annotations also remained inside the database.

---

## Solution

Implemented a dedicated Django Delete API.

Configured Django to:

- Remove the image record.
- Delete the physical media file.
- Automatically delete all related annotations through the `CASCADE` relationship.

Integrated the API with the frontend so deleting a thumbnail immediately removes it from both the UI and the backend.

---

# Zoom Improvements

## Completed

- Added Zoom In functionality.
- Added Zoom Out functionality.
- Improved annotation workflow while zooming.
- Kept the image centered during zoom operations.

---

## Challenges Faced

Initially, zooming the annotation canvas caused the image to shift away from the center because scaling was applied directly to the Stage.

---

## Solution

Moved the scaling logic from the Stage to the Layer.

Adjusted the positioning dynamically so the image always remains centered while zooming.

---

# PolygonCanvas Improvements

## Completed

- Improved image fitting inside the annotation canvas.
- Preserved the original image aspect ratio.
- Centered images dynamically inside the canvas.
- Restricted polygon drawing to the image area only.
- Added validation to prevent invalid polygons.
- Improved responsive canvas sizing.
- Improved image positioning.
- Improved drawing accuracy.

---

## Challenges Faced

Initially, uploaded images were stretched inside the canvas.

Different image sizes caused inconsistent positioning.

Users could also place annotation points outside the image area.

Additionally, polygons containing fewer than three points could still be completed.

---

## Solution

Calculated the image scaling ratio dynamically.

Centered the image inside the canvas after scaling.

Restricted mouse clicks outside the image boundary.

Added validation to ensure a polygon contains at least three points before it can be completed.

Improved responsive canvas sizing so different screen widths are handled correctly.

---

# Project Refactoring

## Completed

- Refactored the Annotation page.
- Extracted reusable UI components.
- Reduced duplicate code.
- Improved project structure.
- Improved maintainability.
- Increased component reusability.

Created reusable components including:

- ThumbnailSlider
- UploadSection
- NavigationSection

---

## Challenges Faced

Initially, almost the entire Annotation page was implemented inside a single file.

As more features were added, the component became difficult to maintain and understand.

Updating one feature often required scrolling through hundreds of lines of code.

---

## Solution

Separated the Annotation page into reusable components.

Each component now has a single responsibility.

This makes the project:

- Easier to maintain.
- Easier to debug.
- Easier to extend.
- More scalable.
- Cleaner to read.

---

# Final Project Summary

## Features

### Authentication

- Admin Login
- SQLite Authentication
- Axios Integration

---

### Task Board

- Create Task
- Read Task
- Update Task
- Delete Task
- Drag & Drop
- Date Filtering
- React Context API
- Serial Numbers
- Empty State

---

### Dashboard

- Reusable Dashboard Layout
- Sidebar
- Navbar
- Dynamic Page Titles

---

### Annotation

- Image Upload
- Image Viewer
- Previous / Next Navigation
- Thumbnail Slider
- Polygon Drawing
- Undo Point
- Finish Polygon
- Clear Polygon
- Delete Polygon
- Save Annotation
- Load Annotation
- Zoom In
- Zoom Out
- Annotation Persistence
- Responsive Canvas
- Image Delete
- Backend Synchronization

---

## Backend

- Django
- Django ORM
- SQLite
- Media File Handling
- Annotation API
- Image Upload API
- Image Delete API
- Annotation Save API
- Annotation Retrieval API

---

## Testing

Throughout development, every backend API was verified using **Postman** before integrating it with the frontend.

Verified endpoints include:

- Login API
- Create Task API
- Get Task API
- Image Upload API
- Image List API
- Save Annotation API
- Get Annotation API
- Delete Annotation API
- Delete Image API

This ensured that each API functioned correctly before frontend integration, making debugging easier and reducing integration issues.
