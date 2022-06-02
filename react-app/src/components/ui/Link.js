import classes from './Link.module.css';

const Link = props => {
  const { children, href } = props;

  return (
    <a className={classes['ui-link']} href={href}>
      {children}
    </a>
  );
};

export default Link;
