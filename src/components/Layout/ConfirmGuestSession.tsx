import styled from "styled-components"
import { setCookie } from "../../utils/cookie"
import axios from "axios"
import * as API from "../../constants/api"
import { Routes, useNavigate } from "react-router-dom"
import * as ROUTES from "../../constants/routes"
const Container = styled.div`
  height: 100vh;
  background-image: url("https://wpengine-myanmore.s3.amazonaws.com/uploads/2019/05/netflix-background-9.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
`
const SignInCard = styled("div")`
  background: rgba(16, 39, 47, 0.9);
  padding: 24px;
  max-width: 330px;
  min-height: 310px;
  border-radius: 16px;
  > p {
    color: #aaa;
  }
  > input {
    padding: 10px 16px;
    width: 100%;
    margin: 16px 0 8px;
    background: #132d35;
    border-radius: 12px;
    height: auto;
    color: #fff;
    caret-color: #ff5722;
  }
`

const SignInText = styled("h3")`
  color: white;
`
const SendMessage = styled("div")`
  background-color: #fff;
  width: 100%;
  margin-top: 16px;
  padding: 10px 20px;
  border-radius: 12px;
  font-weight: 500;
`

const ConfirmWithGuestSession = () => {
  const navigate = useNavigate()
  const handleClick = (): void => {
    axios.get(API.CREATE_GUEST_SESSION).then((data) => {
      const token = data.data.guest_session_id
      const expire = data.data.expires_at
      setCookie("token", token, expire)
    })
    navigate(-1)
  }

  return (
    <Container>
      <SignInCard>
        <SignInText>Sign In</SignInText>
        <p>Мы отправим код подтверждение на номер которую тут укажите.</p>
        <input type="tel" placeholder="+998" />
        <SendMessage onClick={handleClick}>Send Message</SendMessage>
      </SignInCard>
    </Container>
  )
}

export default ConfirmWithGuestSession
