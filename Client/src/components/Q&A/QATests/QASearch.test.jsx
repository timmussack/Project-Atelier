import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import QASearch from '../QASearch.jsx';

describe('Input value in QASearch Component', () => {
  it('updates value on change', () => {
    const handleSearch = jest.fn((value) => {})

    const { queryByPlaceholderText } = render(<QASearch handleSearch={handleSearch} />)

    const searchInput = queryByPlaceholderText('HAVE A QUESTION? SEARCH FOR ANSWERS...')

    fireEvent.change(searchInput, { target: { value: 'shoe' } })

    expect(searchInput.value).toBe('shoe')
    expect(handleSearch).toHaveBeenCalledWith('shoe')
  })
})

