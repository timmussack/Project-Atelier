import styled, { css } from 'styled-components';
import React from 'react';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = styled.input`
  width: 100%;
  border-radius: 10px;
  height: 40px;
  border: transparent;
`;

const Form = styled.form`
  display: flex;
  border: 2px solid black;
  border-radius: 10px;
  margin: 15px 0px 15px 5px;
  background: white;
`;

export default function Search( { handleSearch, product, getQAs, searchTerm, setSearchTerm } ) {

  const styleIcon = {
    "paddingTop": "13px",
    "paddingRight": "10px",
    "color": "black"
  };

  return (
    <Form onSubmit={(e) => {
      e.preventDefault();
    }}>
        <SearchBar
          data-testid='qaSearch'
          id='search'
          type='text'
          placeholder=' HAVE A QUESTION? SEARCH FOR ANSWERS...'
          onChange={(e) => {
            e.target.value.length > 2 ? handleSearch(e.target.value) : getQAs(product);
          }}
        />
        <FaSearch style={styleIcon}/>
    </Form>
  );
};