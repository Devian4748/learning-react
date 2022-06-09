import classes from './AddProductForm.module.css';
import Input from '../ui/Input';
import Button from '../ui/Button';

const AddProductForm = ({
  productInfo,
  onProductSubmit,
  onNameChange,
  onDescriptionChange,
  err,
}) => {
  return (
    <form onSubmit={onProductSubmit}>
      <div>
        <label htmlFor='name'>Name</label>
        <Input
          type='text'
          name='name'
          id='name'
          placeholder='Enter the name'
          value={productInfo.name}
          onChange={onNameChange}
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
          onChange={onDescriptionChange}
        />
      </div>
      <div className={classes['form-footer']}>
        <div className={classes['validation-message']}>{err}</div>
        <Button type='submit' className='btn-primary btn-middle'>
          Add Product
        </Button>
      </div>
    </form>
  );
};

export default AddProductForm;
