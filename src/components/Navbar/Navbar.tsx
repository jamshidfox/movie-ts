import React from "react"
import styled from "styled-components"
import { Row, Col } from "reactstrap"
import { AlignJustify } from "react-feather"
import { getCookie } from "../../utils/cookie"
import { Search } from "react-feather"
import { useNavigate } from "react-router-dom"
import * as ROUTES from "../../constants/routes"
import { MobileNavbar } from "./MobileNavbar"
const Container = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: sticky;
  top: 0;
`
const Desktop = styled(Row)`
  align-items: center;
  padding: 0rem 1rem;
  margin: 0;
  width: 100%;
  color: ${({ theme }) => theme.color.lightColor};
  background: linear-gradient(180deg, #10272f, rgba(26, 26, 28, 0.3));
  @media (max-width: ${({ theme }) => theme.mobile.mobileScreenWidth}) {
    display: none;
  }
`
const GenresContainer = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: center;
`
const Genres = styled.div`
  padding: 0.5rem;
  margin: 0rem 0.5rem;
  color: white;
  &:hover {
    cursor: pointer;
    color: red;
  }
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
  &:hover {
    cursor: pointer;
  }
`
const MenuIcon = styled(Col)``

const Mobile = styled("div")`
  display: none;
  @media (max-width: ${({ theme }) => theme.mobile.mobileScreenWidth}) {
    display: flex;
    width: 100%;
  }
`

const DesktopNavbar: React.FC = () => {
  const navigate = useNavigate()
  const token = getCookie("token")
  const handleNavigateClick = (category: string) => {
    navigate(category)
  }

  return (
    <Container>
      <Desktop>
        <MenuIcon sm="4">
          <AlignJustify />
        </MenuIcon>
        <GenresContainer sm="4">
          <Genres>About</Genres>
          <Genres>Movies</Genres>
          <Logo onClick={() => handleNavigateClick("/")}>M</Logo>
          <Genres>Series</Genres>
          <Genres onClick={() => handleNavigateClick(ROUTES.CARTOONS)}>
            Cartoons
          </Genres>
        </GenresContainer>
        {!token && (
          <SignContainer sm="4">
            <Sign>Sign In</Sign>
            <Sign>Sign Up</Sign>
          </SignContainer>
        )}
        {token && (
          <SignContainer sm="4">
            <Search onClick={() => handleNavigateClick(ROUTES.SEARCH)} />
          </SignContainer>
        )}
      </Desktop>
      <Mobile>
        <MobileNavbar />
      </Mobile>
    </Container>
  )
}

export { DesktopNavbar }
