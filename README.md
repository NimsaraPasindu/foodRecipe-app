# FoodRecipe MERN Stack Application

A full-stack MERN (MongoDB, Express, React, Node.js) application for sharing and managing food recipes. Includes Docker support and Kubernetes Helm charts for easy deployment.

## Features

- User authentication (JWT)
- Add, edit, delete, and view recipes
- Image upload for recipes
- Favorite recipes
- Responsive React frontend (Vite + TailwindCSS)
- RESTful API backend (Express + Mongoose)
- Dockerized for local development
- Helm charts for Kubernetes deployment

---

## Project Structure

```
.
├── backend/         # Node.js/Express API
├── frontend/        # React app (Vite)
├── helm/            # Helm charts for Kubernetes
├── docker-compose.yml
├── jenkinsfile
└── .github/
```

---

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- Docker & Docker Compose
- MongoDB (or use Docker)
- (Optional) Kubernetes & Helm

---

### 1. Clone the Repository

```sh
git clone https://github.com/yourusername/foodRecipe-app.git
cd foodRecipe-app
```

---

### 2. Environment Variables

#### Backend

Create a `.env` file in `backend/`:

```
MONGODB_URL=mongodb://mongo:27017/foodRecipe
JWT_SECRET=your_jwt_secret
```

---

### 3. Local Development

#### Using Docker Compose

```sh
docker-compose up --build
```

- Backend: [http://localhost:5000](http://localhost:5000)
- Frontend: [http://localhost:3000](http://localhost:3000)
- MongoDB: [localhost:27017](http://localhost:27017)

#### Manual (without Docker)

**Backend:**

```sh
cd backend
npm install
npm run dev
```

**Frontend:**

```sh
cd frontend
npm install
npm run dev
```

---

### 4. API Endpoints

- `POST /user/register` - Register user
- `POST /user/login` - Login user
- `GET /recipe` - Get all recipes
- `GET /recipe/:id` - Get recipe by ID
- `POST /recipe` - Add recipe (auth required, multipart/form-data)
- `PUT /recipe/:id` - Edit recipe (auth required, multipart/form-data)
- `DELETE /recipe/:id` - Delete recipe (auth required)

---

### 5. Kubernetes Deployment

#### Using Helm

```sh
cd helm
helm install foodrecipe .
```

Edit `helm/Values.yaml` to configure images, ports, and environment variables.

---

### 6. CI/CD

- GitHub Actions workflow: `.github/workflows/trivy-scan.yml`
- Jenkins pipeline: `jenkinsfile`

---

## License

MIT

---

## Credits

- [React](https://react.dev/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Docker](https://www.docker.com/)
- [Helm](https://helm.sh/)
