# 🚀 JobFinder

A modern **Full Stack Job Portal** built with **React**, **Spring Boot**, and **MongoDB**. JobFinder provides a seamless platform for recruiters to post jobs and job seekers to discover and apply for opportunities through an intuitive and responsive interface.

![Java](https://img.shields.io/badge/Java-17-orange)
![Spring Boot](https://img.shields.io/badge/Spring_Boot-3.x-6DB33F)
![React](https://img.shields.io/badge/React-18-61DAFB)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-47A248)
![License](https://img.shields.io/badge/License-MIT-blue)

---

## 📖 Overview

JobFinder is a full-stack web application designed to simplify the recruitment process. It enables recruiters to manage job postings while allowing candidates to search, filter, and apply for jobs through a clean and user-friendly interface.

The application follows a RESTful architecture where the React frontend communicates with the Spring Boot backend using REST APIs, with MongoDB serving as the primary database.

---

## ✨ Features

### 👨‍💼 Recruiter

- Create new job postings
- Update existing jobs
- Delete job postings
- View all posted jobs
- Manage job listings

### 👨‍🎓 Job Seeker

- Browse available jobs
- Search jobs by keyword
- Filter jobs
- View detailed job descriptions
- Responsive user experience

---

## 🛠 Tech Stack

### Frontend

- React
- React Router
- Axios
- HTML5
- CSS3
- JavaScript (ES6+)

### Backend

- Java 17
- Spring Boot
- Spring Web
- Spring Data MongoDB
- Maven

### Database

- MongoDB

### Tools

- Git
- GitHub
- Postman
- IntelliJ IDEA
- VS Code

---

## 🏗 Architecture

```text
                React Frontend
                      │
                  Axios API
                      │
              Spring Boot REST API
                      │
              Service Layer
                      │
            Repository Layer
                      │
                  MongoDB
```

---

## 📂 Project Structure

### Backend

```text
src
├── controller
├── service
├── repository
├── model
├── config
├── exception
└── resources
```

### Frontend

```text
src
├── components
├── pages
├── services
├── hooks
├── assets
├── routes
└── utils
```

---

## 🔄 Application Workflow

```text
User

↓

React UI

↓

Axios Request

↓

Spring Boot REST API

↓

Business Logic

↓

MongoDB

↓

JSON Response

↓

React Updates UI
```

---

## 📸 Screenshots

> Add screenshots here after uploading them.

| Home | Job Details |
|------|-------------|
| ![](screenshots/home.png) | ![](screenshots/job-details.png) |

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/ha7890846/JobFinder.git
```

```bash
cd JobFinder
```

---

### Backend Setup

```bash
cd backend
```

Configure your MongoDB connection in:

```properties
application.properties
```

Example:

```properties
spring.data.mongodb.uri=mongodb://localhost:27017/jobfinder
```

Run the application:

```bash
mvn spring-boot:run
```

Backend runs on:

```
http://localhost:8080
```

---

### Frontend Setup

```bash
cd frontend
```

Install dependencies

```bash
npm install
```

Start development server

```bash
npm run dev
```

Frontend runs on

```
http://localhost:5173
```

---

## 📡 REST API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/jobs` | Get all jobs |
| GET | `/jobs/{id}` | Get job by ID |
| POST | `/jobs` | Create new job |
| PUT | `/jobs/{id}` | Update job |
| DELETE | `/jobs/{id}` | Delete job |

---

## 🚀 Future Improvements

- User Authentication (JWT)
- Role-based Authorization
- Resume Upload
- Company Profiles
- Saved Jobs
- Email Notifications
- Pagination
- Advanced Search Filters
- Docker Support
- CI/CD Pipeline
- Unit & Integration Testing
- Cloud Deployment (AWS/Azure)

---

## 🎯 Learning Outcomes

This project helped me gain practical experience with:

- React Component Architecture
- RESTful API Development
- Spring Boot
- MongoDB Integration
- CRUD Operations
- Frontend & Backend Communication
- Exception Handling
- Git & GitHub Workflow
- Clean Project Structure

---

## 👨‍💻 Author

**Harsh Agrawal**

- GitHub: https://github.com/ha7890846

---

## ⭐ Support

If you found this project useful, consider giving it a ⭐ on GitHub.

It motivates me to continue building and sharing open-source projects.
