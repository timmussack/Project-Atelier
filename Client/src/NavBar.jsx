import {React, useState} from 'react';
import styled from 'styled-components';
import NightMode from './NightMode.jsx';

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
  display: flex;
  position: relative;
  width: 30%;
  justify-content: flex-end;
`

const SearchBar = styled.input`
  position: relative;
  margin-top: 10px;
  margin-right: 10px;
  width: 25%;
  height: 2.8rem;
  background: #f5f5f5;
  outline: none;
  border: none;
  border-radius: 1.625rem;
  padding: 0 3.5rem 0 1.5rem;
  font-size: 1rem;
`

const Logo = styled.img`
  font-size: 1em;
  margin-left: 10px;
`

const NavBar =  ({nightMode, setNightMode}) => {
  const [input, setInput] = useState('')

  const handleInput = (e) => {
    setInput(e.target.value)
  }

  return (
    <HeaderContainer>
        <Logo src="logo.png"/>

        <SearchBarContainer>

          <NightMode setNightMode={setNightMode} nightMode={nightMode}/>

          <SearchBar type="text" name="searchQueryInput" placeholder="Search" value={input} onChange={(e) => {handleInput(e)}}/>

        </SearchBarContainer>
    </HeaderContainer>

  )
}

export default NavBar;