const EmailForm = ({ email, onEmailChange }) => {
  return (
    <form>
      <label htmlFor='email'>Email: </label>
      <input
        type='email'
        name='email'
        placeholder='Please write a E-Mail'
        id='email'
        value={email}
        onChange={onEmailChange}
      />
    </form>
  );
};

export default EmailForm;
