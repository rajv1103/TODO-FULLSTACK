
# 📝 Todo App Backend

This is the **backend API** for a fullstack Todo App built with **Node.js**, **Express**, and **MongoDB** using **Mongoose**.

---

## 📦 Tech Stack

- Node.js
- Express.js
- MongoDB (with Mongoose)
- Zod (for validation)
- Dotenv (for environment variables)
- CORS

---

## 📁 Project Structure

```

backend/
├── index.js           # Entry point
├── db.js              # MongoDB connection setup
├── todo.js            # Mongoose model for todos
├── middleware.js      # Zod validation schemas
├── .env               # Environment variables
└── package.json

````

---

## ⚙️ Setup Instructions

### 1. Clone the repo

```bash
git clone https://github.com/your-username/todofullv1.git
cd todofullv1/backend
````

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment

Create a `.env` file in the `backend/` directory and add your MongoDB URL:

```env
MONGO_URL=mongodb+srv://<username>:<password>@cluster0.mongodb.net/user_app?retryWrites=true&w=majority&appName=Cluster0
```

> 🔐 **Important:** Make sure to add `.env` to your `.gitignore` to avoid committing sensitive information.

### 4. Start the server

```bash
node index.js
```

If everything works, you should see:

```
Server running on port 3000
MongoDB Connected
```

---

## 📡 API Endpoints

### ➕ Create a Todo

**POST** `/todo`

**Request Body:**

```json
{
  "title": "Learn Node.js",
  "description": "Finish backend project"
}
```

---

### 📋 Get All Todos

**GET** `/todo`

---

### ✅ Mark Todo as Completed

**POST** `/completed`

**Request Body:**

```json
{
  "id": "60a7c2a5f6d3c830d8a9b9d9"
}
```

---

## ✅ Validation

* Validation is handled via **Zod** schemas in `middleware.js`.
* Ensures that request bodies are properly structured and complete.

---

## 🧑‍💻 Author

Created by **Raj Verma**
Feel free to reach out for any collaboration or feedback!

```

