import React, { useState } from "react"
import styled from "styled-components"
import BreadCrump from "../components/BreadCrump"
import SearchInput from "../components/SearchInput"
const Container = styled.div`
  margin: 2rem;
`

const SearchContainer: React.FC = () => {
  const [searched, setSearched] = useState("")
  return (
    <Container>
      <BreadCrump />
      <SearchInput searchedValue={searched} setSearchedValue={setSearched} />
    </Container>
  )
}

export default SearchContainer
