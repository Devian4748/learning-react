import { useState } from 'react';
import Product from '../Product/Product';
import classes from './StoreFront.module.css';
import Input from '../ui/Input';
import Button from '../ui/Button';

// DUMMY PRODUCTS
//
// const products = [
//   {
//     name: 'Cheese',
//     description: '200g cheese block',
//     image:
//       'https://res.cloudinary.com/dbfn5lnvx/image/upload/q_auto,w_300/v1580649404/react-tutorial/products/cheese.png',
//   },
//   {
//     name: 'Milk',
//     description: '1L of milk',
//     image:
//       'https://res.cloudinary.com/dbfn5lnvx/image/upload/q_auto,w_300/v1580649400/react-tutorial/products/milk.png',
//   },
// ];

const StoreFront = () => {
  const [products, setProducts] = useState([]);
  const [productInfo, setProductInfo] = useState({ name: '', description: '' });
  const [err, setErr] = useState('');

  const handleDeleteClick = id => {
    setProducts(products.filter(product => product.id !== id));
  };

  const productsContent =
    products.length !== 0 ? (
      products.map(product => (
        <li key={product.id}>
          <Product details={product} />
          <Button
            type='button'
            className='btn-outline btn-delete'
            onClick={() => handleDeleteClick(product.id)}
          >
            Delete
          </Button>
        </li>
      ))
    ) : (
      <p>Add your first product</p>
    );

  const handleNameChange = ({ target: { value } }) => {
    setProductInfo({ ...productInfo, name: value });
  };

  const handleDescriptionChange = ({ target: { value } }) => {
    setProductInfo({ ...productInfo, description: value });
  };

  const handleProductSubmit = e => {
    e.preventDefault();

    if (productInfo.name.trim().length === 0) {
      setErr('Please write a name');
      return;
    }

    if (productInfo.description.trim().length === 0) {
      setErr('Please write a description');
      return;
    }

    setErr('');

    setProducts([...products, { ...productInfo, id: products.length }]);
    setProductInfo({ name: '', description: '' });
  };

  return (
    <>
      <form onSubmit={handleProductSubmit}>
        <div>
          <label htmlFor='name'>Name</label>
          <Input
            type='text'
            name='name'
            id='name'
            placeholder='Enter the name'
            value={productInfo.name}
            onChange={handleNameChange}
          />
        </div>
        <div>
          <label htmlFor='description'>Description</label>
          <Input
            type='text'
            name='description'
            id='description'
            placeholder='Enter the description'
            value={productInfo.description}
            onChange={handleDescriptionChange}
          />
        </div>
        <div className={classes['form-footer']}>
          <div className={classes['validation-message']}>{err}</div>
          <Button type='submit' className='btn-primary btn-middle'>
            Add Product
          </Button>
        </div>
      </form>
      <ul className={classes['store-front']}>{productsContent}</ul>
    </>
  );
};

export default StoreFront;
