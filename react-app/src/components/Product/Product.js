import { useState } from 'react';
import Button from '../ui/Button';
import classes from './Product.module.css';

const Product = ({ details }) => {
  const [count, setCount] = useState(0);

  const isSubBtnDisabled = count === 0;
  const showCount = count === 0 ? '' : count;

  const handleIncrementClick = () => setCount(count + 1);
  const handleDecrementClick = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className={classes.product}>
      <img src={details.image} alt={details.name} />
      <div className={classes['product-info']}>
        <h2>{details.name}</h2>
        <p>{details.description}</p>
      </div>
      <div className={classes['product-buttons']}>
        <Button
          className='btn-small btn-secondary'
          disabled={isSubBtnDisabled}
          onClick={handleDecrementClick}
        >
          -
        </Button>
        <h3 className={classes['product-count']}>{showCount}</h3>
        <Button
          className='btn-small btn-primary'
          onClick={handleIncrementClick}
        >
          +
        </Button>
      </div>
    </div>
  );
};

export default Product;
