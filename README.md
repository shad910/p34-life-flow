## Project Structure

Below is the current project file structure for this repository:

```
.
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
├── vite.config.js
├── public/
│   ├── favicon.svg
│   └── icons.svg
└── src/
    ├── apis/
    ├── assets/
    │   ├── hero.png
    │   ├── react.svg
    │   └── vite.svg
    ├── components/
    ├── contexts/
    ├── firebase/
    ├── hooks/
    ├── index.css
    ├── layouts/
    │   └── HomeLayout.jsx
    ├── main.jsx
    ├── pages/
    │   └── Home/
    │       └── Home.jsx
    └── routes/
        └── router.jsx
```
"# p34-life-flow-client" 


# Life Flow

Life Flow is a blood donation application organized as a monorepo with separate frontend and backend applications. The React frontend is preserved in `frontend/`, while the Express backend follows a lightweight MVC structure in `backend/`.

## Project structure

```text
.
├── frontend/
│   ├── public/
│   └── src/
│       ├── assets/
│       ├── components/
│       ├── contexts/
│       ├── firebase/
│       ├── layouts/
│       ├── pages/
│       └── routes/
├── backend/
│   ├── config/
│   │   └── database.js
│   ├── controllers/
│   │   └── server.controller.js
│   ├── models/
│   │   └── server.model.js
│   ├── routes/
│   │   └── index.js
│   └── index.js
├── .gitignore
└── README.md
```

## Requirements

- Node.js 18 or newer
- npm
- MongoDB URI for database-backed features

## Environment variables

Create `backend/.env` using these names:

```env
PORT=5000
CLIENT_URL=http://localhost:5173
MONGODB_URI=mongodb://127.0.0.1:27017
DB_NAME=life_flow
```

Create `frontend/.env.local` for Firebase values used by the frontend:

```env
VITE_apiKey=
VITE_authDomain=
VITE_projectId=
VITE_storageBucket=
VITE_messagingSenderId=
VITE_appId=
```

## Installation

```bash
cd frontend
npm install

cd ../backend
npm install
```

## Run locally

Start the backend:

```bash
cd backend
npm run dev
```

Start the frontend in another terminal:

```bash
cd frontend
npm run dev
```

Frontend: `http://localhost:5173`  
Backend: `http://localhost:5000`

## Backend architecture

The backend uses JavaScript ES modules and separates responsibilities into MVC folders:

- `routes` define API paths and map them to controllers.
- `controllers` handle HTTP requests and responses.
- `models` contain application data and business logic.
- `config/database.js` manages the MongoDB connection.
- `index.js` configures middleware and starts the server.

