import { useState } from 'react';
import StoreFront from './components/StoreFront/StoreFront';
import Button from './components/ui/Button';

const App = () => {
  const [loggedin, setLoggedin] = useState(false);

  const handleLoginClick = () => {
    setLoggedin(!loggedin);
  };

  if (!loggedin) {
    return (
      <>
        <h2>Please Login</h2>
        <Button
          type='button'
          className='btn-primary'
          onClick={handleLoginClick}
        >
          Login
        </Button>
      </>
    );
  }

  return (
    <>
      <StoreFront />
      <Button className='btn-outline' onClick={handleLoginClick}>
        Logout
      </Button>
    </>
  );
};

export default App;
