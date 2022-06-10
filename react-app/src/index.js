import { createRoot } from 'react-dom/client';
import App from './App';

const root = createRoot(document.querySelector('#root'));

root.render(<App />);

setTimeout(() => {
  root.render(<h1>Hello</h1>);
}, 1000);

setTimeout(() => {
  root.render(<App />);
}, 2000);
