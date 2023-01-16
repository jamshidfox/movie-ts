import React from "react"
import ReactHlsPlayer from "react-hls-player"
import styled from "styled-components"

const Player: any = styled(ReactHlsPlayer)`
  width: 100vw;
  height: 100vh;
  border: none;
  outline: 0;
`
const Container = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: black;
`
interface Props {
  url: string
  autoPlay?: boolean
  controls?: boolean
}
const VideoPlayer: React.FC<Props> = ({
  url,
  autoPlay = false,
  controls = true,
}) => {
  https: return (
    <Container>
      <Player src={url} autoPlay={autoPlay} controls={controls} />
    </Container>
  )
}

export default VideoPlayer
