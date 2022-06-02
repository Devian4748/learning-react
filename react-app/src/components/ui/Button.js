import { MakeClassNames } from '../../utils';
import classes from './Button.module.css';

const Button = props => {
  const { children, className = '', ...rest } = props;
  const classNames = MakeClassNames(classes, `ui-button ${className}`);

  return (
    <button className={classNames} {...rest}>
      {children}
    </button>
  );
};

export default Button;
