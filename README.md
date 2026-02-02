# Company Assessment – Notes Manager Application

## Project Overview
This project is a **full-stack Notes Management Application** developed as part of a company assessment.  
It demonstrates the implementation of a REST-based backend using **Spring Boot** and a modern frontend using **React (Vite)**.

The application allows users to manage personal notes with full CRUD functionality and basic UI features such as search and pinning.

---

## Objective
The objective of this assessment is to:
- Build a RESTful backend using Java and Spring Boot
- Integrate the backend with a React frontend
- Perform database operations using JPA/Hibernate
- Follow clean code and standard project structure

---

## Functional Requirements

- Create a new note
- View all notes
- Update an existing note
- Delete a note
- Search notes by title
- Pin and unpin notes (frontend-level)

---

## Technology Stack

### Frontend
- React (Vite)
- JavaScript
- CSS

### Backend
- Java 8+
- Spring Boot
- Spring Data JPA
- H2 / MySQL Database

---

## Backend Implementation

### Architecture
The backend follows a **layered architecture**:
- Controller Layer – REST API endpoints
- Service Layer – Business logic
- Repository Layer – Database access using JPA
- Entity Layer – Data model

### Entity
**Note**
- id (Long)
- title (String)
- content (String)
- createdAt (LocalDateTime)
- updatedAt (LocalDateTime)

### REST Endpoints
| Method | Endpoint          | Description           |
|------|------------------|-----------------------|
| GET  | /api/notes        | Fetch all notes       |
| POST | /api/notes        | Create a new note     |
| PUT  | /api/notes/{id}   | Update an existing note |
| DELETE | /api/notes/{id} | Delete a note         |

---

## Database Configuration

---

### Option 1: H2 (In-Memory)

- spring.datasource.url=jdbc:h2:mem:testdb
- spring.datasource.driverClassName=org.h2.Driver
- spring.datasource.username=sa
- spring.datasource.password=
- spring.jpa.hibernate.ddl-auto=update


---
### Option 2: MySQL
properties
- spring.datasource.url=jdbc:mysql://localhost:3306/notesdb
- spring.datasource.username=root
- spring.datasource.password=yourpassword
- spring.jpa.hibernate.ddl-auto=update
- spring.jpa.show-sql=true
- Create database manually:

---
### In sql 
CREATE DATABASE notesdb;

---
### 🌐 Frontend Implementation
---
## Components
- App.jsx – Application state management and API integration

- NoteForm.jsx – Create notes with character count

- NoteList.jsx – Display list of notes

- NoteDetail.jsx – Edit and update notes

## Features
- REST API integration using fetch

- Search functionality

- Pin/unpin logic on UI level

Clean and user-friendly interface

---
### Application Flow
- User opens the React application

- Notes are fetched from the backend REST API

- User can create, update, delete, or search notes

- Backend processes requests and stores data using JPA

- Updated data is reflected in the UI

---

### ⚡ Setup Instructions
---
## Backend
bash
git clone https://github.com/AmarAmbi/Notes-Manager.git
cd notes-manager/javafullstack
Run the Spring Boot application on port 8080.

Frontend
bash
cd notes-frontend
npm install
npm run dev
Access the application at 👉 http://localhost:5173

## 📌 Assumptions & Limitations
- Authentication and authorization are not implemented

- Pin feature is maintained only on frontend state

- No pagination for large datasets


### 🏁 Conclusion
This project fulfills the assessment requirements by implementing a full-stack application with clean architecture, RESTful APIs, and proper frontend-backend integration.

---
