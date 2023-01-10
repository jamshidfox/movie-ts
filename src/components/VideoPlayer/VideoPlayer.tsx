import React from "react"
import ReactHlsPlayer from "react-hls-player"
import styled from "styled-components"

const Player: any = styled(ReactHlsPlayer)`
  width: 100vw;
  height: max-content;
`
const Container = styled("div")`
  width: 100%;
  height: 100vh;
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
