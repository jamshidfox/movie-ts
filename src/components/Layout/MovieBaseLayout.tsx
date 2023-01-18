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
  background-image: url("https://cdn.vox-cdn.com/thumbor/CAUv8Mbou_rQE5hhkmsK_veYAbU=/0x0:1920x1080/1200x800/filters:focal(516x102:822x408)/cdn.vox-cdn.com/uploads/chorus_image/image/58289837/black_widow.0.jpg");
  background-repeat: no-repeat;
  background-size: 100%;
  object-fit: contain;
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
