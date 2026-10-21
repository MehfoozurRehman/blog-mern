# blog-mern

An Express and MongoDB API for blog posts, newsletter subscribers and users, with a React front end for the public site.

**Status:** In progress. The backend has working CRUD routes on MongoDB, but the React front end shows static text and never calls the API, and the backend start script runs an `api.js` file that is not in the repo.

## The problem

The code describes a blog platform: an admin-style API stores blog posts, newsletter subscribers and user accounts, and a React site presents the blog. The backend and front end are not yet connected.

## What it does

- Creates, lists and deletes blog posts with title, category, author, publish date, link and image fields (`/api/v1/createBlog`, `findAllBlogs`, `deleteBlog`).
- Stores newsletter subscribers with an email and location (`/api/v1/createSubscriber`, `findAllSubscibers`).
- Creates and lists users with name, email, password and profile picture fields (`/api/v1/createUser`, `findAllUsers`).
- Provides bulk-delete routes for blogs, subscribers and users.
- Renders a home screen and a blog screen from React components (header, footer, blog and latest-blog cards) in `frontend/src`.

## How it's built

- Backend: Node with Express 4, Mongoose 6 models in `backend/Modal/`, and `cors` with JSON body parsing. Route handlers call the Mongoose model methods directly.
- Frontend: Create React App (react-scripts 5), React 18, react-router-dom 5 and Sass.
- The MongoDB connection string is read from the `MONGODB_URI` environment variable, not from source.
- The root `package.json` uses `concurrently` to start the backend and frontend together.

## Running it locally

Set `MONGODB_URI` to a MongoDB connection string first. Then, from the repo root:

```bash
npm start
```

This runs `cd backend && npm i && npm run dev` and `cd frontend && yarn && yarn start`. You can also run the two halves separately: `npm run dev` in `backend/` and `yarn start` in `frontend/`.

Note: the backend `dev` and `start` scripts run `node api.js` before the server, and `api.js` is not in the repo, so these scripts fail as the code stands.

## What's left

- The frontend does not call the backend. Its home and blog content is static placeholder text.
- `backend/package.json` runs `api.js`, which is missing from the repo.
- `/api/v1/findSpecificUser` ignores its query and returns every user.
- No authentication or authorization on any route, including the bulk-delete routes.
- The user model stores passwords as plain strings in a field named `userPassowrd`.
- No tests. The backend `test` script is the npm placeholder.
