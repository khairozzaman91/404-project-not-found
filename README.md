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

## Database

| Email | Password |
|--------|----------|
| admin@404project.com | admin123 |

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

---
