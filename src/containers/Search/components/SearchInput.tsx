import styled from "styled-components"
const Container = styled("div")``
const Input = styled("input")`
  width: 100%;
  background-color: transparent;
  border-bottom: 2px solid white;
  height: 4rem;
  color: white;
  &:focus {
    outline: none;
  }
`
const SearchInput = () => {
  return (
    <Container>
      <Input placeholder="Поиск фильм, сериал или мультфильм" />
    </Container>
  )
}
export default SearchInput
