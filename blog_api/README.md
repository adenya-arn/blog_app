# 📝 Blog API

A RESTful Blog API built with Node.js, Express, and Prisma.  
It supports user authentication, blog posts, comments, and full ownership-based access control using JWT.

This backend is designed to be consumed by separate frontend applications (reader app + admin/author dashboard).

---

## 🚀 Tech Stack

- Node.js
- Express.js
- Prisma ORM
- PostgreSQL
- JSON Web Tokens (JWT)
- bcryptjs
- CORS

---

---

## 📦 Features

### 🔐 Authentication

- User registration
- User login
- Password hashing (bcrypt)
- JWT-based authentication
- Protected routes using middleware

---

### 📝 Blog Posts

- Create post (authenticated users)
- Read all posts (public)
- Read single post (public)
- Update post (owner only)
- Delete post (owner only)
- Publish / unpublish posts (owner only)

---

### 💬 Comments

- Add comment to a post (authenticated users)
- View comments for a post (public)
- Update comment (owner only)
- Delete comment (owner or post owner)

---

### 🔒 Authorization Rules

| Action         | Auth Required | Owner Required  |
| -------------- | ------------- | --------------- |
| Create post    | ✅            | ❌              |
| Edit post      | ✅            | ✅              |
| Delete post    | ✅            | ✅              |
| Publish post   | ✅            | ✅              |
| Comment        | ✅            | ❌              |
| Edit comment   | ✅            | ✅              |
| Delete comment | ✅            | ✅ / post owner |

---

## 🧪 API Endpoints

### Auth

```
POST /auth/register
POST /auth/login
```

---

### Posts

```
GET    /posts
GET    /posts/:id
POST   /posts
PUT    /posts/:id
DELETE /posts/:id
PATCH  /posts/:id/publish
```

---

### Comments

```
GET    /comments/post/:id
POST   /comments/post/:id
PUT    /comments/:id
DELETE /comments/:id
```

---

## 🔑 Authentication

This API uses **JWT (JSON Web Tokens)**.

### How to use:

1. Login to get token:

```http
POST /auth/login
```

Response:

```json
{
  "token": "your.jwt.token"
}
```

---

2. Send token in headers:

```
Authorization: Bearer YOUR_TOKEN
```

---

## 🗄️ Database Schema (Prisma)

- User
- Post
- Comment

Relationships:

- User → Posts (1:M)
- Post → Comments (1:M)
- User → Comments (1:M optional)

---

## ⚙️ Setup Instructions

### 1. Clone repo

```bash
git clone <repo-url>
cd blog_api
```

---

### 2. Install dependencies

```bash
npm install
```

---

### 3. Setup environment variables

Create `.env`:

```
DATABASE_URL=your_postgres_url
JWT_SECRET=your_secret_key
PORT=3002
```

---

### 4. Run migrations

```bash
npx prisma migrate dev
```

---

### 5. Start server

```bash
npm run dev
```

---

## 📡 API Testing

You can test this API using:

- Postman
- Insomnia
- curl
- Browser (GET requests only)

---

## 🌐 Frontend Integration

This API is designed to be consumed by separate frontend applications:

### Possible frontends:

- Blog Reader App (public)
- Admin Dashboard (authoring posts)
- Mobile App (future expansion)

---

## 🔥 Example Frontend Usage (fetch)

```js
const res = await fetch("http://localhost:3002/posts");
const posts = await res.json();
console.log(posts);
```

---

## 🧠 Future Improvements

Here are recommended upgrades:

### 🟡 Pagination

- Add `?page=1&limit=10` to `/posts`

### 🟡 Filtering & Sorting

- `?published=true`
- `?sort=latest`

### 🟡 Refresh Tokens

- Improve JWT security with refresh token flow

### 🟡 Role-Based Access

- Admin vs normal user system

### 🟡 Rate Limiting

- Prevent API abuse

### 🟡 Input Validation

- Add Zod or Joi validation layer

### 🟡 API Documentation

- Integrate Swagger / OpenAPI for interactive docs

---

## 📚 Learning Outcome

This project demonstrates:

- REST API design
- Authentication & authorization
- Database relationships (Prisma)
- Middleware usage in Express
- Real-world backend architecture

---

## 👨‍💻 Author

Built as part of The Odin Project backend curriculum.

```

```
