import { MakeClassNames } from '../../utils';
import classes from './Link.module.css';

const Link = props => {
  const { children, className = '', ...rest } = props;
  const classNames = MakeClassNames(classes, `ui-link ${className}`);

  return (
    <a className={classNames} {...rest}>
      {children}
    </a>
  );
};

export default Link;
