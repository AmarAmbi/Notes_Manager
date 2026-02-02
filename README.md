# ✨ Notes Manager ✨

A full‑stack notes management application built with **React (Vite)** on the frontend and **Spring Boot (JPA)** on the backend.  
It allows users to create, view, update, delete, search, and pin notes, with a visually appealing UI powered by CSS, Framer Motion, and Three.js.

---

## 🚀 Features
- **CRUD Operations**: Create, Read, Update, Delete notes.
- **Search Notes**: Search notes by title using a search bar + button.
- **Character Count**: Shows live character count while typing content.
- **Pin Notes**: Toggle pin/unpin notes (frontend‑only, keeps pinned notes at the top).
- **Attractive UI**: Neon theme with gradient background, glowing buttons, and animations.
- **REST API Integration**: Frontend communicates with backend via REST endpoints.
- **Database Persistence**: Notes stored in SQL database using JPA/Hibernate.

---

## 🖥️ Tech Stack
### Frontend
- React + Vite
- Hooks (`useState`, `useEffect`)
- CSS (custom neon theme)
- Framer Motion & Three.js (animations)

### Backend
- Spring Boot
- JPA/Hibernate
- REST Controller
- H2 (in‑memory) or MySQL database

---

## ⚙️ Backend Setup
1. Clone the repo and open backend in IntelliJ.
2. Configure `application.properties`:

## Frontend Setup
1.after clone the repo open notes-frontend file in Vs_code 
2.install all required npm node modules

### Option A: H2 (default)
```properties
spring.datasource.url=jdbc:h2:mem:testdb
spring.datasource.driverClassName=org.h2.Driver
spring.datasource.username=sa
spring.datasource.password=
spring.jpa.hibernate.ddl-auto=update
spring.h2.console.enabled=true
