const Card = props => {
  if (props.onCardLoad) {
    props.onCardLoad();
  }
  return <div className='card'>Card Content here</div>;
};

export default Card;
