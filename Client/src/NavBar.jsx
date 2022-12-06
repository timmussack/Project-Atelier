import React from 'react';
import styled from 'styled-components'


const HeaderContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  background-color: #4f4f4f;
  margin-right: 200px;
  margin-left: 200px;
  height: 80px;

`


const SearchBarContainer = styled.div`
  position: relative;
  width: 20%;
  padding-right: 50px;
`

const SearchBar = styled.input`
  position: relative;
  width: 75%;
  height: 2.8rem;
  background: #f5f5f5;
  outline: none;
  border: none;
  border-radius: 1.625rem;
  padding: 0 3.5rem 0 1.5rem;
  font-size: 1rem;
`
const Logo = styled.h1`
  font-size: 2em;
  padding-top: 20px;
  margin: 0 0 15px 30px;
`

const NavBar =  () => {
  return (
    <HeaderContainer>
        <Logo>LogoHere</Logo>
        <SearchBarContainer>
          <SearchBar type="text" name="searchQueryInput" placeholder="Search" value=""/>
        </SearchBarContainer>
    </HeaderContainer>

  )
}


export default NavBar;