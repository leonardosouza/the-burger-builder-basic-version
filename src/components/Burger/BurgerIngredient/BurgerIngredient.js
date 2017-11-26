import React from 'react';
import styles from './BurgerIngredient.css';

const BurgerIngredient = (props) => {
  let ingredient = null;

  switch (props.type) {
    case 'bread-bottom':
      ingredient = <div className={styles.BreadBottom} />;
      break;

    case 'bread-top':
      ingredient = <div className={styles.BreadTop}>
          <div className={styles.Seed1} />
          <div className={styles.Seed2} />
        </div>;
      break;

    case 'meat':
      ingredient = <div className={styles.Meat} />;
      break;

    case 'cheese':
      ingredient = <div className={styles.Cheese} />;
      break;

    case 'bacon':
      ingredient = <div className={styles.Bacon} />;
      break;

    case 'salad':
      ingredient = <div className={styles.Salad} />;
      break;

    default:
      ingredient = null;
      break;
  }
};

export default BurgerIngredient;