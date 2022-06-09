import Product from '../Product/Product';
import Button from '../ui/Button';
import classes from './ProductList.module.css';

const ProductList = ({ products, onDeleteClick }) => {
  const productsContent =
    products.length !== 0 ? (
      products.map(product => (
        <li key={product.id}>
          <Product details={product} />
          <Button
            type='button'
            className='btn-outline btn-delete'
            onClick={() => onDeleteClick(product.id)}
          >
            Delete
          </Button>
        </li>
      ))
    ) : (
      <p>Add your first product</p>
    );

  return <ul className={classes['store-front']}>{productsContent}</ul>;
};

export default ProductList;
