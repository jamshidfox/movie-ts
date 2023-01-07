import React from "react"
import styled from "styled-components"
import { Row, Col } from "reactstrap"
import { AlignJustify } from "react-feather"
import theme from "../../constants/theme"
import { getCookie } from "../../utils/cookie"
import { Search } from "react-feather"

const Container = styled(Row)`
  align-items: center;
  padding: 0rem 1rem;
  margin: 0;
  color: ${({ theme }) => theme.color.lightColor};
  background-color: ${({ theme }) => theme.background.theme};
  @media (max-width: ${theme.mobile.mobileScreenWidth}) {
    width: 15%;
    display: flex;
    margin: 0;
    flex-direction: column;
    padding-left: 0.8rem;
  }
`
const GenresContainer = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: ${theme.mobile.mobileScreenWidth}) {
    flex-direction: column;
    align-items: flex-start;
    margin-top: 25px;
    padding: 0;
    height: 60%;
    justify-content: space-around;
  }
`
const Genres = styled.div`
  padding: 0.5rem;
  margin: 0rem 0.5rem;
  color: white;
  @media (max-width: ${theme.mobile.mobileScreenWidth}) {
    font-family: BenchNine, sans-serif;
    margin: 0;
    padding: 0;
  }
`
const SignContainer = styled(Col)`
  display: flex;
  justify-content: flex-end;
  @media (max-width: ${theme.mobile.mobileScreenWidth}) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
    padding: 0;
    height: 25%;
    font-family: BenchNine, sans-serif;
  }
  align-items: center;
`
const Sign = styled.div`
  margin-left: 1rem;
  @media (max-width: ${theme.mobile.mobileScreenWidth}) {
    margin: 0;
  }
`
const Logo = styled.div`
  font-family: "Lucida Console", Monaco, monospace;
  font-size: 2.5rem;
  margin: 0rem 1rem;
  color: red;
  @media (max-width: ${theme.mobile.mobileScreenWidth}) {
    display: none;
  }
`
const MenuIcon = styled(Col)`
  @media (max-width: ${theme.mobile.mobileScreenWidth}) {
    display: flex;
    justify-content: flex-start;
    margin-top: 25px;
    padding: 0;
  }
`

const DesktopNavbar: React.FC = () => {
  const token = getCookie("token")

  return (
    <Container>
      <MenuIcon sm="4">
        <AlignJustify />
      </MenuIcon>
      <GenresContainer sm="4">
        <Genres>About</Genres>
        <Genres>Movies</Genres>
        <Logo>M</Logo>
        <Genres>Series</Genres>
        <Genres>Upcoming</Genres>
      </GenresContainer>
      {!token && (
        <SignContainer sm="4">
          <Sign>Sign In</Sign>
          <Sign>Sign Up</Sign>
        </SignContainer>
      )}
      {token && (
        <SignContainer sm="4">
          <Search />
        </SignContainer>
      )}
    </Container>
  )
}

export { DesktopNavbar }
