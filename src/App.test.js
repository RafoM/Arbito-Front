import { render, screen } from '@testing-library/react';
import App from './App';

test('renders landing page', () => {
  render(<App />);
  const element = screen.getByText(/landing/i);
  expect(element).toBeInTheDocument();
});
