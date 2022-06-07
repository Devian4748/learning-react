const NameForm = ({ name, onNameChange }) => {
  return (
    <>
      <form>
        <label htmlFor='name'>Name: </label>
        <input
          type='text'
          name='name'
          id='name'
          placeholder='Please write a name'
          value={name}
          onChange={onNameChange}
        />
      </form>
    </>
  );
};
export default NameForm;
