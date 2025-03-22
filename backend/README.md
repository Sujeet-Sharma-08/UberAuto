# UberAuto Backend

This folder contains the backend service for the UberAuto application. It handles user registration, authentication, and other backend functionalities.

## Features

- User registration with validation
- Password hashing and authentication
- JWT-based token generation
- MongoDB integration for user data storage

## Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn

## Installation

1. Navigate to the backend folder:

   ```bash
   cd backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the backend folder and add the following environment variables:

   ```
   JWT_SECRET=<your_jwt_secret>
   MONGO_URI=<your_mongodb_connection_string>
   ```

4. Start the server:
   ```bash
   npm start
   ```

## API Endpoints

### User Registration

**POST** `/users/register`

- **Request Body**:

  ```json
  {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "password": "password123"
  }
  ```

- **Response**:
  ```json
  {
    "token": "<jwt_token>",
    "user": {
      "_id": "<user_id>",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com"
    }
  }
  ```

### User Login

**POST** `/users/login`

- **Description**: This endpoint allows users to log in by providing their email and password. If the credentials are valid, a JWT token is returned along with the user's details.

- **Request Body**:

  ```json
  {
    "email": "user@example.com",
    "password": "password123"
  }
  ```

- **Response**:
  ```json
  {
    "token": "<jwt_token>",
    "existingUser": {
      "_id": "<user_id>",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "user@example.com"
    }
  }
  ```

- **Error Responses**:
  - **400**: Validation Error
    ```json
    {
      "message": "Validation Error",
      "errors": [
        {
          "msg": "Invalid value",
          "param": "email",
          "location": "body"
        }
      ]
    }
    ```
  - **401**: Invalid email or password
    ```json
    {
      "message": "Invalid email or password"
    }
    ```

## Folder Structure

```
backend/
├── controller/
│   └── userController.js
├── models/
│   └── userModel.js
├── routes/
│   └── userRoute.js
├── services/
│   └── user.service.js
└── README.md
```



