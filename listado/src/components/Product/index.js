import styles from "./index.module.sass";

export default function Product({ product }) {
  const { color, image, lastPrice, longName, name, price } = product;
  return (
    <div className={styles.product}>
      <img src={image} className={styles.image} />
      <p className={styles.name}>{name}</p>
      <p className={styles.longName}>{longName}</p>
      <p className={styles.price}>{price}</p>
    </div>
  );
}
