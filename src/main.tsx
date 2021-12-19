import { render } from 'react-dom';

const Root = () => <h1>Hello, world!</h1>;

const root = document.getElementById('root');

render(<Root />, root);
