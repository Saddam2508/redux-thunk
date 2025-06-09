# 📝 Todos App

A simple React + Redux app that fetches and displays a list of TODOs from a remote API using `redux-thunk` for asynchronous state management.

---

## 🚀 Features

- Fetches TODO data from an API using Axios.
- Redux is used for global state management.
- Middleware support with Redux Thunk for async API calls.
- Displays loading state, error handling, and fetched TODO list.

---

## 🛠️ Tech Stack

- React
- Redux
- Redux Thunk
- Axios
- JavaScript (ES6+)

---

## 📁 Project Structure

```
src/
├── components/
│   └── TodosApp.jsx
├── services/
│   ├── actions/
│   │   └── todosAction.js
│   ├── constants/
│   │   └── todosConstant.js
│   └── reducer/
│       └── todosReducer.js
├── store.js
└── App.jsx
```

---

## 📦 Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Saddam2508/redux-thunk.git
   ```

2. Navigate to the project directory:

   ```bash
   cd todos-app
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

---

## ▶️ Usage

Start the development server:

```bash
npm start
```

Your app will be available at `http://localhost:3000`.

---

## 🌐 API Used

This project fetches TODOs from:

```
https://jsonplaceholder.typicode.com/todos
```

---

## 📃 License

This project is licensed under the MIT License.
