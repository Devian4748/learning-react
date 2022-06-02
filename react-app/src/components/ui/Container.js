import classes from './Container.module.css';

const Container = props => {
  const { children } = props;
  return <div className={classes['ui-container']}>{children}</div>;
};

export default Container;
