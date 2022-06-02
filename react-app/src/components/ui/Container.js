import { MakeClassNames } from '../../utils';
import classes from './Container.module.css';

const Container = props => {
  const { children, className, ...rest } = props;
  const classNames = MakeClassNames(classes, `container ${className}`);
  return (
    <div className={classNames} {...rest}>
      {children}
    </div>
  );
};

export default Container;
