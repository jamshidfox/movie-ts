import { DesktopNavbar } from "../Navbar"
import { MovieInfo } from "../MovieInfo"
import styled from "styled-components"

const Container = styled(`div`)`
  @media (max-width: 580px) {
    display: flex;
  }
  color: black;
`

function BaseLayout() {
  return (
    <Container>
      <DesktopNavbar />
      <MovieInfo />
    </Container>
  )
}

export default BaseLayout
