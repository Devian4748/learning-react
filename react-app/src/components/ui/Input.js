import { MakeClassNames } from '../../utils';
import classes from './Input.module.css';

const Input = props => {
  const { type = 'text', className = '', ...rest } = props;
  const classNames = MakeClassNames(classes, `ui-textfield ${className}`);

  return <input className={classNames} type={type} {...rest} />;
};

export default Input;
