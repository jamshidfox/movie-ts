import { DesktopNavbar } from "../Navbar"
import { MovieInfo } from "../MovieInfo"
import { Footer } from "../Footer"
import styled from "styled-components"

const Container = styled(`div`)`
  @media (max-width: 580px) {
    display: flex;
  }
  color: black;
`

function BaseLayout({ children }: any) {
  return (
    <Container>
      <DesktopNavbar />
      <MovieInfo />
      {children}
      <Footer />
    </Container>
  )
}

export default BaseLayout
