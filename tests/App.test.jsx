import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  it('should have hello world message', () => {
    const { getByText } = render(<App />);
    expect(getByText('test')).toMatchInlineSnapshot(`
      <h1>
        test
      </h1>
    `);
  });
});
