import React from "react"
import styled from "styled-components"
import { Row, Col } from "reactstrap"
import { getCookie } from "../../utils/cookie"
import { Search } from "react-feather"
import { useNavigate } from "react-router-dom"
import * as ROUTES from "../../constants/routes"
import { MobileNavbar } from "./MobileNavbar"
interface Props {
  token: any
}
const Container = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: sticky;
  top: 0;
`
const Desktop = styled("div")`
  display: flex;
  align-items: center;
  padding: 0rem 1rem;
  margin: 0;
  justify-content: space-between;
  width: 100%;
  color: ${({ theme }) => theme.color.lightColor};
  background: linear-gradient(180deg, #10272f, rgba(26, 26, 28, 0.3));
  @media (max-width: ${({ theme }) => theme.mobile.mobileScreenWidth}) {
    display: none;
  }
`
const GenresContainer = styled("div")`
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
const SignContainer = styled("div")<Props>`
  display: ${(p: Props) => (p.token ? "flex" : "none")};
  justify-content: flex-end;
  align-items: center;
  /* width: 10px; */
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

const SearchIcon = styled(Search)``
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
        <GenresContainer>
          <Logo onClick={() => handleNavigateClick("/")}>M</Logo>
          <Genres>Films</Genres>
          <Genres>Series</Genres>
          <Genres onClick={() => handleNavigateClick(ROUTES.CARTOONS)}>
            Cartoons
          </Genres>
          <Genres>Action</Genres>
          <Genres onClick={() => handleNavigateClick(ROUTES.HORROR_MOVIES)}>
            Horror
          </Genres>
          <Genres>Romance</Genres>
          <Genres onClick={() => handleNavigateClick(ROUTES.WAR_MOVIES)}>
            War
          </Genres>
          <Genres>Trending</Genres>
        </GenresContainer>
        <SignContainer token={!token}>
          <Sign>Sign In</Sign>
          <Sign>Sign Up</Sign>
        </SignContainer>
        <SignContainer token={token}>
          <SearchIcon onClick={() => handleNavigateClick(ROUTES.SEARCH)} />
        </SignContainer>
      </Desktop>
      <Mobile>
        <MobileNavbar />
      </Mobile>
    </Container>
  )
}

export { DesktopNavbar }
