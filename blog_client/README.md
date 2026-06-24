# Blog Client

A modern React frontend for the Blog API project built as part of The Odin Project's Node.js curriculum.

This application allows visitors to browse blog posts, read individual articles, view comments, register for an account, log in, and leave comments on posts.

The frontend communicates with a separate Express + PostgreSQL REST API using Axios and JWT authentication.

---

## Features

### Public Features

- View all blog posts
- Read individual blog posts
- View comments on posts
- Responsive blog layout
- Clean modern UI

### Authentication

- User registration
- User login
- JWT authentication
- Persistent login using Local Storage
- Logout functionality

### Commenting

- Authenticated users can leave comments
- Comments display author information
- Comments update dynamically after submission

---

## Tech Stack

### Frontend

- React
- React Router DOM
- Axios
- CSS

### Backend

This application consumes data from a separate Blog API built with:

- Express
- PostgreSQL
- Prisma ORM
- JSON Web Tokens (JWT)

---

## Project Structure

```text
src
├── api
│   └── api.js
├── components
│   ├── CommentForm.jsx
│   ├── CommentList.jsx
│   ├── Layout.jsx
│   ├── Navbar.jsx
│   └── PostCard.jsx
├── pages
│   ├── Home.jsx
│   ├── Login.jsx
│   ├── PostDetails.jsx
│   └── Register.jsx
├── styles
│   └── global.css
├── App.jsx
└── main.jsx
```

---

## Installation

Clone the repository:

```bash
git clone <repository-url>
```

Move into the project:

```bash
cd blog_client
```

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

---

## Environment Configuration

Create a `.env` file in the project root.

Example:

```env
VITE_API_URL=http://localhost:3002
```

Update your Axios configuration to use the environment variable:

```javascript
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});
```

---

## Authentication Flow

### Login

Users authenticate through:

```http
POST /auth/login
```

The API returns a JWT token.

The token is stored in:

```javascript
localStorage;
```

Example:

```javascript
localStorage.setItem("token", token);
```

### Protected Requests

Authenticated requests include:

```http
Authorization: Bearer <token>
```

Example:

```javascript
headers: {
  Authorization: `Bearer ${token}`;
}
```

---

## API Endpoints Used

### Authentication

```http
POST /auth/register
POST /auth/login
```

### Posts

```http
GET /posts
GET /posts/:id
```

### Comments

```http
GET /comments/post/:id
POST /comments/post/:id
```

---

## Future Improvements

### Reader Experience

- Search posts
- Filter posts by category
- Pagination
- Related posts section
- Dark mode

### Authentication

- Remember logged-in user
- Refresh token implementation
- Protected routes

### User Features

- User profiles
- Edit own comments
- Delete own comments
- Like posts

### UI Improvements

- Loading skeletons
- Toast notifications
- Better mobile navigation
- Improved typography
- Rich text rendering

---

## Learning Outcomes

This project reinforced:

- React fundamentals
- Component-based architecture
- React Router
- State management with hooks
- Working with REST APIs
- Axios requests
- JWT authentication
- Local Storage
- Protected frontend functionality
- Full-stack application architecture

---

## Related Projects

- Blog API (Express Backend)
- Blog Client (Reader Frontend)
- Blog Admin (Author Dashboard)

Built as part of The Odin Project.
