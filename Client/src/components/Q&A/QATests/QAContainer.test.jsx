import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import QAContainer from '../QAContainer.jsx';

//Terminal command to only run tests in my QATests file path
// npm test /src/components/Q&A/QATests

describe('QA Parent Component', () => {
  const user = userEvent.setup();

  it('should render at title', () => {
    render(<QAContainer />)
    expect(screen.getByTestId('qaTitle')).toHaveTextContent('QUESTIONS & ANSWERS');

  })
})