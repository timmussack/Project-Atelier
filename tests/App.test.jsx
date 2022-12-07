import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  it('should have hello world message', () => {
    const { getByText } = render(<App />);
    expect(getByText('Product Details')).toMatchInlineSnapshot(`
      <h1>
        Product Details
      </h1>
    `);
  });
});
