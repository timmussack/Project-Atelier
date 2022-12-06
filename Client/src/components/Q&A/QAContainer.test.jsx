import React from 'react';
import { render } from '@testing-library/react';
import QAContainer from './QAContainer';

describe('QA Container Component', () => {
  it('renders correctly', () => {
    const { getByText } = render(<QAContainer />);
    expect(getByText('QUESTIONS & ANSWERS')).toMatchSnapshot();
  });
});