import React from "react"
import styled from "styled-components"
import { setCookie } from "../../utils/cookie"
import axios from "axios"
import * as API from "../../constants/api"

const Container = styled.div``

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
      <button onClick={handleClick}>Click mE</button>
    </Container>
  )
}

export default ConfirmWithGuestSession
