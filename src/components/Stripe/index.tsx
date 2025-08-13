import styles from "./Stripe.module.css";

type StripeProps = {
  src: string;
  alt: string;
};

const Stripe = ({ src, alt }: StripeProps) => {
  return <img src={src} alt={alt} className={styles.stripe} />;
};

export default Stripe;