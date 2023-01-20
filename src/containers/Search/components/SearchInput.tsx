import styled from "styled-components"
import axios from "axios"
import * as API from "../../../constants/api"
interface Props {
  searchedValue: string
  setSearchedValue: any
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
const SearchInput: React.FC<Props> = ({ searchedValue, setSearchedValue }) => {
  const handleInputChange = (e: any) => {
    setSearchedValue(e.target.value)
  }
  const submit = (e: any) => {
    e.preventDefault()
    const json = { value: "Avatar" }
    // axios({
    //   method: "post",
    //   url: `${API.SEARCH_MOVIE}`,
    //   data: json,
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // }).then((d) => console.log(d))
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
