import { render, screen } from '@testing-library/react';
import App from './App';

test('renders home page', () => {
  render(<App />);
  const element = screen.getByText(/home/i);
  expect(element).toBeInTheDocument();
});

