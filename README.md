# Quickensol — E-Commerce Client

A responsive e-commerce product listing application built with React. The project demonstrates product API integration, category filtering, reusable components, custom React hooks, and basic cart functionality.

## Features

* Product listing fetched from the DummyJSON API
* Filter products by category
* Reusable `Button` component with:

  * Primary
  * Secondary
  * Danger variants
* Custom `useFetch` hook for API data fetching
* Loading and error states
* Add to Cart functionality
* Cart item count badge
* Responsive layout for desktop, tablet, and mobile
* CSS Modules for component-level styling

## Tech Stack

* React
* JavaScript
* Vite
* CSS Modules
* React Icons
* DummyJSON API

## API

Product data is fetched from:

DummyJSON Products API

`https://dummyjson.com/products`

## Project Structure

```text
src/
├── apis/
│   └── getProducts.js
├── components/
│   ├── Button/
│   ├── CategoryFilter/
│   ├── ProductCard/
│   └── ProductList/
├── hooks/
│   └── useFetch.js
├── pages/
│   └── ProductListingPage/
├── App.jsx
└── main.jsx
```

## Getting Started

### 1. Clone the repository

```bash
git clone <your-github-repository-url>
```

### 2. Navigate to the project

```bash
cd Quickensol
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```
The application will be available at the local URL provided by Vite.