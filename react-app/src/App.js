import Button from './components/ui/Button';
import Container from './components/ui/Container';
import Input from './components/ui/Input';
import Link from './components/ui/Link';

const App = () => {
  return (
    <>
      <Link href='https://react-tutorial.app'>Shop Online</Link>
      <Button type='button' disabled={false}>
        Enabled Button
      </Button>
      <Button type='button' disabled={true}>
        Disabled Button
      </Button>
      <Container>
        <p>Content</p>
      </Container>
      <Input placeholder='ID' name='id' />
      <Input type='email' placeholder='E-mail' name='email' />
    </>
  );
};

export default App;
