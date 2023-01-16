import React from "react"
import styled from "styled-components"
import BreadCrump from "../components/BreadCrump"
import SearchInput from "../components/SearchInput"
const Container = styled.div`
  margin: 2rem;
`

const SearchContainer: React.FC = () => {
  return (
    <Container>
      <BreadCrump />
      <SearchInput />
    </Container>
  )
}

export default SearchContainer
