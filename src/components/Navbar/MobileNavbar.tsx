import React from "react"
import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import { Bell, Play } from "react-feather"
import * as ROUTES from "../../constants/routes"
const Container = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(180deg, #000, rgba(26, 26, 28, 0.1));
  width: 100%;
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
const Header = styled("div")`
  display: flex;
  justify-content: space-between;
  width: 100%;
`
const Body = styled("div")`
  width: 100%;
  display: flex;
  justify-content: space-around;
  > h3 {
    color: white;
    font-size: 0.99rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    width: 120px;
  }
  > h3:hover {
    color: red;
  }
`

const MobileNavbar: React.FC = () => {
  const navigate = useNavigate()
  const handleNavigateClick = (category: string) => {
    navigate(category)
  }

  return (
    <Container>
      <Header>
        <Logo onClick={() => handleNavigateClick("/")}>M</Logo>
        <Bell style={{ margin: "1rem" }} color="white" />
      </Header>
      <Body>
        <h3 onClick={() => handleNavigateClick("/")}>Films</h3>
        <h3 onClick={() => handleNavigateClick(ROUTES.CARTOONS)}>Cartoons</h3>
        <h3>
          Category
          <Play
            size={12}
            color="white"
            style={{ transform: "rotate(90deg)", marginLeft: "8px" }}
            fill="white"
          />
        </h3>
      </Body>
    </Container>
  )
}

export { MobileNavbar }
