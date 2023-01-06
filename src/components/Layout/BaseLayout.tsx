import React from "react"
import { DesktopNavbar } from "../Navbar"
import { MovieInfo } from "../MovieInfo"
import { Footer } from "../Footer"
import styled from "styled-components"
import theme from "../../constants/theme"
const Container = styled(`div`)`
  color: black;
  width: 100%;
  margin: 0;
`
const HeaderSection = styled("div")`
  @media (max-width: ${theme.mobile.mobileScreenWidth}) {
    display: flex;
  }
`
interface Props {
  children: JSX.Element | JSX.Element[]
}

const BaseLayout: React.FC<Props> = ({ children }) => {
  return (
    <Container>
      <HeaderSection>
        <DesktopNavbar />
        <MovieInfo />
      </HeaderSection>
      {children}
      <Footer />
    </Container>
  )
}

export default BaseLayout
