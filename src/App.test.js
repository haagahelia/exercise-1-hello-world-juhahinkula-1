import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders hello world', () => {
  const { queryByText } = render(<App />);
  expect(queryByText('Hello world')).not.toBeNull();
});
