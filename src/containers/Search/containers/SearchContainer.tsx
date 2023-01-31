import React, { useState } from "react"
import styled from "styled-components"
import BreadCrump from "../components/BreadCrump"
import RecommendContainer from "../components/RecommendContainer"
import SearchInput from "../components/SearchInput"
const Container = styled.div`
  margin: 2rem;
`

const SearchContainer: React.FC = () => {
  const [searched, setSearched] = useState("")
  const [searchedResponse, setSearchedResponse] = useState(false)
  return (
    <Container>
      <BreadCrump />
      <SearchInput
        searchedValue={searched}
        setSearchedValue={setSearched}
        setSearchedResponse={setSearchedResponse}
      />

      {searchedResponse && <RecommendContainer data={searchedResponse} />}
    </Container>
  )
}

export default SearchContainer
