# Exam Portal

The Exam Portal is a web application that allows users to take MCQ (Multiple Choice Question) tests within a limited timeframe. It supports two roles: **Admin** and **User**. The Admin has the privilege to create, update, and delete quizzes, questions, and quiz categories, while Normal Users can view category-wise quizzes, attempt them, and see their obtained marks.

## Tech Stacks

The Exam Portal is built using the following tech stacks:

- **Frontend**: Angular
- **Backend**: Spring Boot, Spring Security
- **Database**: MySQL

## Features

- **User Roles**: The application supports two roles - Admin and User.
- **Authentication and Authorization**: Users are required to log in, and access to various features is restricted based on their roles.
- **Quiz Management**: Admin can perform CRUD (Create, Read, Update, Delete) operations on quizzes, questions, and quiz categories.
- **Timed Tests**: Users can take quizzes within a limited timestamp. The application will automatically submit the quiz once the time is up.
- **Category-wise Quizzes**: Normal Users can view quizzes organized by categories.
- **Quiz Attempt**: Users can attempt quizzes and select answers for each question.
- **Scoring**: The application will automatically evaluate and display the marks obtained by the Users after quiz completion.

## Setup Instructions

Follow the steps below to set up and run the Exam Portal application locally:

### Prerequisites

- Node.js and Angular CLI installed on your system.
- Ensure you have Java Development Kit (JDK) 8 or later and Maven installed for Spring Boot.
- Set up a database (e.g., MySQL, PostgreSQL) and create **exam** table for the application.

### Backend Setup

1. Clone the repository from the Git repository URL.
2. Navigate to the backend directory and open the project in your favorite Java IDE.
3. Open the application.properties file and configure your database connection details.
4. Build the project and run the Spring Boot application.

### Frontend Setup

1. Install the required dependencies by running `npm install`.
2. Update the API base URL in the Angular environment file to match your backend server.
3. Build the Angular application using `ng build` or run it locally using `ng serve`.

### Accessing the Application

Once the backend and frontend are up and running, access the application in your web browser at `http://localhost:4200/`.
