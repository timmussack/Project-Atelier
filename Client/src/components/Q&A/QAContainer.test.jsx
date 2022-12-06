import React from 'react';
import { render } from '@testing-library/react';
import QAContainer from './QAContainer';

describe('QA Container Component', () => {
  it('should have QUESTIONS & ANSWERS message', () => {
    const { getByText } = render(<QAContainer />);
    expect(getByText('QUESTIONS & ANSWERS')).toMatchInlineSnapshot(`
      <h4>
        QUESTIONS & ANSWERS
      </h4>
    `);
  });
});