import { useState } from 'react';
import ProductList from './ProductList';
import AddProductForm from './AddProductForm';

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
      <AddProductForm
        productInfo={productInfo}
        onProductSubmit={handleProductSubmit}
        onNameChange={handleNameChange}
        onDescriptionChange={handleDescriptionChange}
        err={err}
      />
      <ProductList products={products} onDeleteClick={handleDeleteClick} />
    </>
  );
};

export default StoreFront;
