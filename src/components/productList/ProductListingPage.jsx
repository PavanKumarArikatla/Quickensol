import { useState } from "react";
import CategoryFilter from "../CategoryFilter/CategoryFilter";
import ProductCard from "../../components/productCard/ProductCard";
import useFetch from "../../hooks/Fetch";
import getProducts from "../../apis/getProducts";
import styles from "./ProductListingPage.module.css";
import { FaBagShopping } from 'react-icons/fa6';

export default function ProductListingPage() {
    const [cartItems, setCartItems] = useState([]);
    const { data: products, loading, error } = useFetch(getProducts);
    const [selectedCategory, setSelectedCategory] = useState("all");
    const categories = ["all", ...new Set(products.map((product) => product.category))];
    const filteredProducts = selectedCategory === "all"
            ? products
            : products.filter(
                  (product) => product.category === selectedCategory
              );

    function addToCart(product) {
        setCartItems((prevItems) => [...prevItems, product]);
    }

    function removeFromCart(productId) {
        setCartItems((prevItems) =>
            prevItems.filter((item) => item.id !== productId)
        );
    }
    if (loading) return <p>Loading products...</p>;

    if (error) return <p>{error}</p>;

    if (!products.length) return <p>No products found.</p>;

    return (
        <div className={styles.productListingPage}>
            <div className={styles.filterSection}>
                <h1>QUICKENSOL</h1>
                <div className={styles.cartAndFilter}>
                        <i className={styles.cart}>
                            <FaBagShopping />
                            {cartItems.length > 0 && <span className={styles.badge}>{cartItems.length}</span>}
                        </i>
                    <CategoryFilter
                        categories={categories}
                        selectedCategory={selectedCategory}
                        onCategoryChange={setSelectedCategory}
                    />
                </div>
            </div>
            
            {filteredProducts.length === 0 ? (
                <p>No products found in this category.</p>
            ) : (
                <div className={styles.products}>
                    {filteredProducts.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            addToCart={addToCart}
                            removeFromCart={removeFromCart}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}