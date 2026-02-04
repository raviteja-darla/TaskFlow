# 📝 Professional TaskFlow Application (Frontend)

A **professional-level Todo List application** built using **React (Frontend only)**. This project is designed to demonstrate **real-world React concepts**, clean architecture, and best practices not just a basic CRUD demo.

---

## 🚀 Live Demo

> [*(Add your deployed Netlify / Vercel link here)*](https://task-flow-gamma-silk.vercel.app/)

---

## 📌 Features

### ✅ Core Features

* Add new todos
* Delete todos
* Mark todos as completed
* Inline editing of todos (Edit → Save)

### 🚀 Professional Features

* Filter todos (All / Active / Completed)
* Clean and reusable component structure
* Proper parent–child data flow
* Controlled inputs
* Immutable state updates

> ⚠️ Backend is **not used**. This is a **frontend-only project**.

---

## 🧠 Concepts Covered

This project intentionally focuses on **understanding how React really works**:

* React Functional Components
* `useState` for state management
* Parent → Child data flow using **props**
* Child → Parent communication using **callback functions**
* Derived state (filters)
* Conditional rendering
* Clean UI logic separation
* Component reusability

---

## 🗂️ Folder Structure

```text
src/
│
├── components/
│   ├── TodoInput.jsx     # Add new todo
│   ├── TodoList.jsx      # Renders todo list & filtering logic
│   ├── TodoItem.jsx      # Single todo item (edit, delete, toggle)
│   └── TodoFilters.jsx   # Filter buttons (All / Active / Completed)
│
├── App.jsx               # Root component (state owner)
├── main.jsx              # App entry point
└── index.css             # Global styles
```

---

## 🔄 Application Workflow

```text
User Action (UI)
   ↓
Component Event (TodoItem / TodoInput)
   ↓
Callback Function
   ↓
State Update in App.jsx
   ↓
React Re-render
   ↓
Updated UI
```

> **State always lives in `App.jsx`**. Child components only *request* changes.

---

## 🧪 How to Run Locally

```bash
# Clone repository
git clone <your-repo-url>

# Install dependencies
npm install

# Start development server
npm run dev
```

---

## 🎯 Why This Project?

This project was built to:

* Understand **React fundamentals deeply**
* Learn **how data flows in real applications**
* Avoid tutorial-style anti-patterns
* Build an **interview-ready frontend project**

It is intentionally built **step by step** instead of using advanced libraries too early.

---

## 🧩 Future Enhancements (Planned)

* Context API for global state
* LocalStorage persistence
* Search functionality
* Performance optimizations (`useMemo`, `useCallback`)
* Dark mode
* Keyboard accessibility

---

## 🙌 Author

**Darla Raviteja**
Frontend Developer (React)

---

## ⭐ If You Like This Project

Give it a ⭐ on GitHub it motivates learning developers like me 😊

---

> *This project is part of a guided learning journey to master frontend development.*
