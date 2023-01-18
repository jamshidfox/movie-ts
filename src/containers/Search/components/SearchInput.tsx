import styled from "styled-components"
const Container = styled("div")``
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
const SearchInput = () => {
  return (
    <Container>
      <Input placeholder="Поиск фильм, сериал или мультфильм" />
    </Container>
  )
}
export default SearchInput
