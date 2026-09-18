# 🛒 ShopEase — E-Commerce Client

> A clean, responsive React e-commerce demo built as a practical assignment for a **React Developer** role.

---

## 📋 Assignment Overview

Build a product listing application with:

- **Category filtering** (client-side, no extra API calls)
- **Reusable Button component** with `primary`, `secondary`, and `danger` variants
- **Custom `useFetch` hook** for generic data fetching
- Clean, responsive, and accessible UI

---

## ✨ Features

- Product listing grid with images, titles, categories, and prices
- Dynamic category filter derived from API data
- Reusable `Button` component with three visual variants
- Generic `useFetch` hook with loading, error, and abort handling
- Responsive layout (desktop → tablet → mobile)
- Graceful handling of loading, error, and empty states
- Semantic HTML and keyboard accessibility
- CSS Modules for component-scoped styles

---

## 🛠️ Tech Stack

| Technology   | Purpose                       |
| ------------ | ----------------------------- |
| React 19     | UI library                    |
| Vite 8       | Build tool & dev server       |
| JavaScript   | Language                      |
| CSS Modules  | Component-scoped styling      |
| Fetch API    | Data fetching (native)        |

> **No additional libraries** — no Redux, Zustand, Axios, TanStack Query, or UI frameworks.

---

## 📂 Project Structure

```
src/
├── components/
│   ├── Button/
│   │   ├── Button.jsx            # Reusable button with variant support
│   │   └── Button.module.css
│   ├── ProductCard/
│   │   ├── ProductCard.jsx       # Single product display card
│   │   └── ProductCard.module.css
│   ├── ProductList/
│   │   ├── ProductList.jsx       # Product grid with filtering
│   │   └── ProductList.module.css
│   └── CategoryFilter/
│       ├── CategoryFilter.jsx    # Category filter bar
│       └── CategoryFilter.module.css
├── hooks/
│   └── useFetch.js               # Generic data-fetching hook
├── services/
│   └── productApi.js             # API URL & helper functions
├── App.jsx                       # Main application shell
├── App.css                       # App-level layout styles
├── main.jsx                      # Entry point
└── index.css                     # Global reset & base styles
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) ≥ 18
- npm ≥ 9

### Installation

```bash
git clone https://github.com/<your-username>/shopease.git
cd shopease
npm install
```

### Run Locally

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
npm run preview
```

---

## 🌐 API Used

**[Fake Store API](https://fakestoreapi.com/)**

- **Endpoint:** `https://fakestoreapi.com/products`
- Returns 20 products with `id`, `title`, `price`, `description`, `category`, and `image`.
- The API URL is stored in `src/services/productApi.js` — a single source of truth.

---

## 🪝 Custom `useFetch` Hook

A generic, reusable hook located in `src/hooks/useFetch.js`.

```jsx
const { data, loading, error } = useFetch(url);
```

**What it does:**

- Accepts any URL as input
- Uses the native `fetch` API
- Manages three states: `data`, `loading`, `error`
- Handles HTTP errors (non-2xx responses)
- Uses `AbortController` to cancel in-flight requests on unmount or URL change
- Guards against state updates after unmount
- Contains **no product-specific logic** — fully reusable

---

## 🔘 Reusable Button Component

A single `<Button>` component at `src/components/Button/Button.jsx` with three variants:

```jsx
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="danger">Danger</Button>
```

**Features:**

- Supports `children`, `type`, `onClick`, `disabled`, `className`, and any extra button attributes
- Visually distinct variants using CSS Modules
- Clear disabled state styling
- Hover and focus states
- Semantic `<button>` element with keyboard accessibility

---

## 🏷️ Category Filtering

The `CategoryFilter` component:

1. Receives dynamically-extracted categories from the product data
2. Renders an "All" button plus one button per category
3. Highlights the currently selected category
4. Filters products **client-side** — no additional API requests are made once products are loaded
5. Uses the reusable `Button` component for each filter option

---

## 📸 Screenshots

> _Add screenshots here after running the project._

---

## 🔗 Live Demo

> _Add your deployed URL here (e.g., Vercel, Netlify)._

---

## 📦 GitHub Repository

> _Add your repository URL here._

---

## 📄 License

This project is built for educational / assignment purposes.
