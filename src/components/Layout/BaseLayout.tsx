import React from "react"
import { DesktopNavbar } from "../Navbar"
import { MovieInfo } from "../MovieHeadlineInfo"
import { Footer } from "../Footer"
import styled from "styled-components"

const Container = styled(`div`)`
  color: black;
  width: 100%;
  background-color: #10272f;
  margin: 0;
`
const HeaderSection = styled("div")`
  background-color: red;
  @media (max-width: ${({ theme }) => theme.mobile.mobileScreenWidth}) {
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
