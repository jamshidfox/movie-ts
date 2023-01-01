import { useState, useEffect } from "react"
import { DesktopNavbar, MobileNavbar } from "../Navbar"
import { MovieInfo } from "../MovieInfo"
import styled from "styled-components"
import { Col } from "reactstrap"

const DesktopContainer = styled(`div`)`
  color: black;
`
const MobileContainer = styled("div")`
  display: flex;
`
const GenresContainer = styled(Col)`
  justify-content: center;
  align-items: center;
`
const Genres = styled.div`
  padding: 0.5rem;
  margin: 0rem 0.5rem;
`
const Logo = styled.div`
  font-family: "Lucida Console", Monaco, monospace;
  font-size: 2.5rem;
  margin: 0rem 1rem;
  color: red;
`

function BaseLayout() {
  const [width, setWindowWidth] = useState(0)
  useEffect(() => {
    updateDimensions()

    window.addEventListener("resize", updateDimensions)
    return () => window.removeEventListener("resize", updateDimensions)
  }, [])
  const updateDimensions = () => {
    const width = window.innerWidth
    setWindowWidth(width)
  }
  const Desktop = (
    <DesktopContainer>
      <DesktopNavbar />
      <MovieInfo />
    </DesktopContainer>
  )
  const Mobile = (
    <MobileContainer>
      <MobileNavbar />
      <MovieInfo />
    </MobileContainer>
  )

  return <>{width > 570 ? Desktop : Mobile}</>
}

export default BaseLayout
