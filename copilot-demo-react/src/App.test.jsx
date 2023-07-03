// generate test case for App component
import React from 'react';

import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  // screen.debug();
  const linkElement = screen.getByText(/Hello Vite/i);
  expect(linkElement).toBeInTheDocument();
})


// design or develop each function and component with Dry principle in mind
// Dry principle - Don't repeat yourself
// write test cases for each function and component
// Each function should accept specific input and return specific output
// keep the function small and testable and pure
//