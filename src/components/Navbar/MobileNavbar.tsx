import React from "react"
import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import { Bell, Play } from "react-feather"
const Container = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
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
    font-weight: 600;
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
        <Logo>M</Logo>
        <Bell style={{ margin: "1rem" }} color="white" />
      </Header>
      <Body>
        <h3>Films</h3>
        <h3>Series</h3>
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
