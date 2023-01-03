import React from "react"
import styled from "styled-components"
import { Row, Col } from "reactstrap"
import { AlignJustify } from "react-feather"
const Container = styled(Row)`
  align-items: center;
  padding: 0rem 1rem;
  color: ${({ theme }) => theme.color.lightColor};
  background-color: ${({ theme }) => theme.background.theme};
`
const GenresContainer = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 580px) {
    flex-direction: column;
  }
`
const Genres = styled.div`
  padding: 0.5rem;
  margin: 0rem 0.5rem;
  color: white;
`
const SignContainer = styled(Col)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`
const Sign = styled.div`
  margin-left: 1rem;
`
const Logo = styled.div`
  font-family: "Lucida Console", Monaco, monospace;
  font-size: 2.5rem;
  margin: 0rem 1rem;
  color: red;
`

const DesktopNavbar: React.FC = () => {
  return (
    <Container>
      <Col sm="4">
        <AlignJustify />
      </Col>
      <GenresContainer sm="4">
        <Genres>About</Genres>
        <Genres>Movies</Genres>
        <Logo>M</Logo>
        <Genres>Series</Genres>
        <Genres>Upcoming</Genres>
      </GenresContainer>
      <SignContainer sm="4">
        <Sign>Sign In</Sign>
        <Sign>Sign Up</Sign>
      </SignContainer>
    </Container>
  )
}

export { DesktopNavbar }
