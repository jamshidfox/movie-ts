import React from "react"
import styled from "styled-components"

const Container = styled("div")`
  height: 100px;
  background-color: ${({ theme }) => theme.background.footer};
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Navigation = styled("div")`
  display: flex;
  justify-content: center;
`
const NavigatinText = styled("p")`
  color: white;
`
const Footer: React.FC = () => {
  return (
    <Container>
      <Navigation>
        <NavigatinText>M CINEMA &#169; 2021-2022</NavigatinText>
      </Navigation>
    </Container>
  )
}
export { Footer }
