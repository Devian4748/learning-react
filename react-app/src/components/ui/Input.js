import classes from './Input.module.css';

const Input = props => {
  const { type = 'text', placeholder, name } = props;
  return (
    <input
      className={classes['ui-textfield']}
      type={type}
      placeholder={placeholder}
      name={name}
    />
  );
};

export default Input;
