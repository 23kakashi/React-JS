import styles from "./Card.module.css";

const Card = (props) => {
  // console.log(styles);
  return (
    <div className={`${styles.card} + ${props.className}`}>
      {/* This will give us the content passed between Card component */}
      {props.children}
    </div>
  );
};

export default Card;
