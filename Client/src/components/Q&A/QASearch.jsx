import styled, { css } from 'styled-components';
import React from 'react';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = styled.input`
  width: 100%;
  height: 40px;
  border: transparent;
`;

const Form = styled.form`
  display: flex;
  border: 1px solid;
  margin: 10px 0px 15px 0px;
`;

export default function Search( { handleSearch, product, getQAs } ) {

  const styleIcon = {
    "padding-top": "13px",
    "padding-right": "10px"
  };

  return (
    <Form>
        <SearchBar
          type="text"
          placeholder='HAVE A QUESTION? SEARCH FOR ANSWERS...'
          onChange={(e) => e.target.value.length > 2 ? handleSearch(e.target.value) : getQAs(product)}
        />
        <FaSearch style={styleIcon}/>
    </Form>
  );
};