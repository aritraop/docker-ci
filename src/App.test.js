import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/welcome to docker volumes/i);
  expect(linkElement).toBeInTheDocument();
});
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/courses with docker/i);
  expect(linkElement).toBeInTheDocument();
});
