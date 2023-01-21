import React from "react"
import styled from "styled-components"
import { setCookie } from "../../utils/cookie"
import axios from "axios"
import * as API from "../../constants/api"
import { DesktopNavbar } from "../Navbar"
import { Footer } from "../Footer"
const Container = styled.div`
  background-color: ${({ theme }) => theme.background.theme};
`

const ConfirmWithGuestSession = () => {
  const handleClick = (): void => {
    axios.get(API.CREATE_GUEST_SESSION).then((data) => {
      const token = data.data.guest_session_id
      const expire = data.data.expires_at
      setCookie("token", token, expire)
    })
  }

  return (
    <Container>
      <DesktopNavbar />
      <button onClick={handleClick}>Click me</button>
      <Footer />
    </Container>
  )
}

export default ConfirmWithGuestSession
