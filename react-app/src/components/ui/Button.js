import classes from './Button.module.css';

const Button = props => {
  const { children, type, disabled } = props;

  return (
    <button className={classes['ui-button']} type={type} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
