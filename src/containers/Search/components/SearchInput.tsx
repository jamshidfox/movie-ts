import styled from "styled-components"
import axios from "axios"
import * as API from "../../../constants/api"
interface Props {
  searchedValue: string
  setSearchedValue: any
  setSearchedResponse: any
}
const Container = styled("form")``
const Input = styled("input")`
  width: 100%;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid white;
  height: 4rem;
  font-size: 2rem;
  color: white;
  &:focus {
    outline: none;
  }
`
const SearchInput: React.FC<Props> = ({
  searchedValue,
  setSearchedValue,
  setSearchedResponse,
}) => {
  const handleInputChange = (e: any) => {
    setSearchedValue(e.target.value)
  }
  const submit = (e: any) => {
    e.preventDefault()
    axios
      .get(API.SEARCH_MOVIE, {
        params: {
          value: searchedValue,
        },
      })
      .then((data) => setSearchedResponse(data))
  }
  return (
    <Container onSubmit={(e) => submit(e)}>
      <Input
        placeholder="Поиск фильм, сериал или мультфильм"
        value={searchedValue}
        onChange={(e) => handleInputChange(e)}
      />
    </Container>
  )
}
export default SearchInput
