import Button from './components/ui/Button';
import Container from './components/ui/Container';
import Input from './components/ui/Input';
import Link from './components/ui/Link';

const App = () => {
  return (
    <Container className='main'>
      <Link className='landing' href='https://react-tutorial.app'>
        Shop Online
      </Link>
      <Button type='button' disabled={false} className='login-btn'>
        Enabled Button
      </Button>
      <Button type='button' disabled={true}>
        Disabled Button
      </Button>
      <Input placeholder='ID' name='id' />
      <Input type='email' placeholder='E-mail' name='email' />
    </Container>
  );
};

export default App;
