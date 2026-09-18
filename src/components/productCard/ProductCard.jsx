import Button from "../button/Button";
import styles from "./ProductCard.module.css";

export default function ProductCard({ product, addToCart, removeFromCart }) {
  return (
    <div className={styles.card}>

      <img className={styles.image} src={product.thumbnail} alt={product.title} />
      

      <small className={styles.category}>{product.category}</small>
      <section className={styles.details}>
        <h3>{product.title}</h3>
        {product.brand? <p>Brand: {product.brand}</p> : ""}
        <p>${product.price.toFixed(2)}</p>
        <p className={styles.inStock}>{product.availabilityStatus}</p>
      </section>

      <Button onClick={() => addToCart(product)}>Add to Cart</Button>
      <Button variant="secondary">Add to Wishlist</Button>
      <Button variant="danger" onClick={() => removeFromCart(product.id)}>
        Remove from Cart
      </Button>
    </div>
  );
}