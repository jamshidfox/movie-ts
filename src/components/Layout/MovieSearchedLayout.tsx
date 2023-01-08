import React from "react"
import { MoviePlayer } from "../VideoPlayer"
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

  return (
    <Container>
      <MoviePlayer url="https://voxe-cdn.s3.eu-north-1.amazonaws.com/cartoons/gorod-geroev-big-hero-6-2014-bdrip-720p-x264-rus-eng/master.m3u8" />
    </Container>
  )
}

export default BaseLayout
