import {React, useState} from 'react';
import styled from 'styled-components'


const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #253954;
  height: 80px;
  margin: 0 auto;
  position: sticky;
  top: 0;
  z-index:1000;

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
const Logo = styled.img`
  font-size: 2em;
`

const NavBar =  () => {
  const [input, setInput] = useState('')

  const handleInput = (e) => {
    setInput(e.target.value)

  }
  return (
    <HeaderContainer>
        <Logo src="logo.png"/>
        <SearchBarContainer>
          <SearchBar type="text" name="searchQueryInput" placeholder="Search" value={input} onChange={(e) => {handleInput(e)}}/>
        </SearchBarContainer>
    </HeaderContainer>

  )
}


export default NavBar;