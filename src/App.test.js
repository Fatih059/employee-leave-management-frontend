import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Add Employee button', () => {
  render(<App />);
  const buttonElement = screen.getByText(/Add Employee/i);
  expect(buttonElement).toBeInTheDocument();
});
