# Blog APP

A React-based admin dashboard for managing blog content. This application allows authenticated users to create, edit, publish, unpublish, and delete blog posts, as well as moderate comments related to their posts.

## Features

### Authentication

- Secure login using JWT authentication
- Protected routes for authorized users only
- Automatic token handling using Axios interceptors
- Logout functionality

### Post Management

- Create new blog posts
- Edit existing posts
- Delete posts
- Publish and unpublish posts
- View all authored posts in a dashboard

### Comment Moderation

- View comments on owned blog posts
- Delete inappropriate comments
- Manage community engagement from a central dashboard

### User Experience

- Clean and responsive admin interface
- React Router navigation
- Reusable components
- Protected route handling
- Modern dashboard layout

---

## Tech Stack

### Frontend

- React
- React Router DOM
- Axios
- CSS

### Backend

- Express.js
- Prisma ORM
- PostgreSQL
- JWT Authentication

---

## Installation

### Clone the repository

```bash
git clone <repository-url>
cd blog_admin
```

### Install dependencies

```bash
npm install
```

### Configure environment variables

Create a `.env` file:

```env
VITE_API_URL=http://localhost:3002
```

### Start development server

```bash
npm run dev
```

---

## API Requirements

The admin application expects the Blog API to be running and available.

Required backend endpoints include:

### Authentication

```http
POST /auth/login
POST /auth/register
```

### Posts

```http
GET    /posts
GET    /posts/:id
POST   /posts
PUT    /posts/:id
DELETE /posts/:id
PATCH  /posts/:id/publish
```

### Comments

```http
GET    /comments
DELETE /comments/:id
PUT    /comments/:id
```

---

## Security

- JWT-based authentication
- Protected admin routes
- Authorization checks on backend operations
- Automatic token attachment to requests using Axios interceptors

---

## Future Improvements

- Rich text editor for blog posts
- Search and filtering
- Post analytics dashboard
- Pagination
- User profile management
- Comment approval workflow
- Dark mode
- Image upload support
- Role-based access control

---

## Author

Arnold Adenya

Built as part of a full-stack blogging platform consisting of:

- Blog API (Express + Prisma + PostgreSQL)
- Blog Client (React)
- Blog Admin (React Admin Dashboard)
