# MERN Book Search Engine

## Description

This is a full-stack MERN application that allows users to search for books using the Google Books API, save their favorite books, and manage their saved books. The app uses a React front end, a Node.js/Express.js server, MongoDB with Mongoose, and Apollo Server for a GraphQL API. Authentication is handled with JWT, and users can sign up, log in, and save/remove books from their personal collection.

## Features

- Search for books using the Google Books API
- View book details: title, author(s), description, image, and link to Google Books
- User authentication with JWT (sign up, log in, log out)
- Save books to your account
- View and remove saved books
- Responsive and modern UI with React and React-Bootstrap
- GraphQL API with Apollo Server and Apollo Client
- Deployed on Render with MongoDB Atlas

## User Story

```
AS AN avid reader
I WANT to search for new books and save them to my profile
SO THAT I can keep track of books I want to read
```

## Acceptance Criteria

- When the app loads, the navbar shows "Search for Books" and "Login/Signup"
- Users can search for books and view results with title, author, description, image, and a link
- Clicking "Login/Signup" opens a modal with toggles for login and signup
- Signup requires username, email, and password; login requires email and password
- After login/signup, the navbar shows "Search for Books", "Saved Books", and "Logout"
- Logged-in users can save books from search results
- Saved books are shown on the "Saved Books" page with the option to remove them
- Logging out returns the navbar to "Search for Books" and "Login/Signup"

## Demo

### Search for Books

![Book Search](https://github.com/user-attachments/assets/326362a3-7f98-4837-9874-e28efe8fb905)


### Save a Book

![Save Book](https://github.com/user-attachments/assets/89e71123-7232-4853-a63d-fb87feb805f3)


### View Saved Books

![View Saved Books](https://github.com/user-attachments/assets/834cfb14-fac5-4dbf-af16-be6040d0109c)


## Technologies Used

- MongoDB & Mongoose
- Express.js
- React
- Node.js
- Apollo Server & Apollo Client (GraphQL)
- JWT Authentication
- React-Bootstrap
- Vite

## Getting Started

### Prerequisites

- Node.js and npm
- MongoDB Atlas account

### Installation

1. Clone the repository:
   ```
   git clone <your-repo-url>
   cd <project-folder>
   ```

2. Install dependencies for both client and server:
   ```
   npm run install
   ```

3. Set up your environment variables:

   - In `server/.env`:
     ```
     MONGODB_URI=<your-mongodb-uri>
     JWT_SECRET_KEY=<your-jwt-secret>
     ```

   - In `client/.env` (for local development):
     ```
     VITE_GRAPHQL_URI=http://localhost:3001/graphql
     ```

4. Start the development servers:
   ```
   npm run develop
   ```

   - Client: [http://localhost:3000](http://localhost:3000)
   - Server/GraphQL: [http://localhost:3001/graphql](http://localhost:3001/graphql)

### Build & Deploy

- To build for production:
  ```
  npm run render-build
  ```
- To start the production server:
  ```
  npm start
  ```

## Deployment

This app is deployed on Render with a MongoDB Atlas database.

- [Live App URL](https://dashboard.render.com/web/srv-d1358dbe5dus73eejep0/deploys/dep-d136636mcj7s7380oa0g)
- [GitHub Repository](https://github.com/AdrewReyes/Book-Search/tree/main)

## Folder Structure

```
Develop/
  client/      # React front end
  server/      # Express/GraphQL back end
  package.json # Root scripts for build/deploy
```

## License

This project is licensed under the ISC License.

---

© 2024 Your Name. All Rights Reserved.
