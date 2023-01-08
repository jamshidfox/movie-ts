import React, { useEffect, useState } from "react"
import { DesktopNavbar } from "../Navbar"
import { Footer } from "../Footer"
import styled from "styled-components"

import { getCookie } from "../../utils/cookie"
import ConfirmWithGuestSession from "./ConfirmGuestSession"
const Container = styled(`div`)`
  color: black;
  width: 100%;
  margin: 0;
`
const HeaderSection = styled("div")`
  @media (max-width: ${({ theme }) => theme.mobile.mobileScreenWidth}) {
    display: flex;
  }
`
interface Props {
  children: JSX.Element | JSX.Element[]
}

const BaseLayout: React.FC<Props> = ({ children }) => {
  const token = getCookie("token")
  if (!token) {
    return (
      <Container>
        <ConfirmWithGuestSession />
      </Container>
    )
  }
  return (
    <Container>
      <HeaderSection>
        <DesktopNavbar />
      </HeaderSection>
      {children}
      <Footer />
    </Container>
  )
}

export default BaseLayout
