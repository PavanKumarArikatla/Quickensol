import styles from "./CategoryFilter.module.css";

export default function CategoryFilter({
    categories,
    selectedCategory,
    onCategoryChange,
}) {
    return (
        <div className={styles.categoryFilter}>
            <label htmlFor="category">Filter by Category:</label>

            <select
                id="category"
                value={selectedCategory}
                onChange={(e) => onCategoryChange(e.target.value)}
            >
                {categories.map((category) => (
                    <option key={category} value={category}>
                        {category}
                    </option>
                ))}
            </select>
        </div>
    );
}