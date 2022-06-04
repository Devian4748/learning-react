import Product from '../Product/Product';
import classes from './StoreFront.module.css';

const products = [
  {
    name: 'Cheese',
    description: '200g cheese block',
    image:
      'https://res.cloudinary.com/dbfn5lnvx/image/upload/q_auto,w_300/v1580649404/react-tutorial/products/cheese.png',
  },
  {
    name: 'Milk',
    description: '1L of milk',
    image:
      'https://res.cloudinary.com/dbfn5lnvx/image/upload/q_auto,w_300/v1580649400/react-tutorial/products/milk.png',
  },
];

const StoreFront = () => {
  return (
    <div className={classes['store-front']}>
      <Product details={products[0]} />
      <Product details={products[1]} />
    </div>
  );
};

export default StoreFront;
