import React from "react"
import styled from "styled-components"
import { getCookie } from "../../utils/cookie"
import ConfirmWithGuestSession from "./ConfirmGuestSession"
const Container = styled(`div`)`
  color: black;
  width: 100%;
  margin: 0;
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

  return <Container>{children}</Container>
}

export default BaseLayout
