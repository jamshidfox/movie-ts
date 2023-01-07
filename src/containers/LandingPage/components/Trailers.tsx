import React, { useRef, useState, useEffect } from "react"
import { ChevronRight, ChevronLeft } from "react-feather"
import styled from "styled-components"
import trailers from "./trailersData"
import ReactHlsPlayer from "react-hls-player"
import theme from "../../../constants/theme"
const Container = styled.div`
  display: flex;
  width: 100%;
  @media (max-width: ${theme.mobile.mobileScreenWidth}) {
    padding-bottom: 20px;
  }
  overflow: hidden;
  align-items: center;
`

const Content = styled.div`
  width: 35rem;
  height: auto;
  border-radius: 5px;
  background-size: cover;
  background-position: center;
  flex-shrink: 0;
`

const ContentWrapper = styled.div`
  display: flex;
  overflow: hidden;
  width: 100%;
  border: 5px solid #ffffff;
  border-radius: 10px;
  & > ${Content} {
    margin: 2rem;
  }
`

const PrevButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  background-color: yellow;
  border-radius: 50%;
  left: 1rem;
  z-index: 99;
`
const NextButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 1rem;
  background-color: yellow;
  border-radius: 50%;
  z-index: 99;
`

const Trailers: React.FC = () => {
  const [hlsUrl, setHlsUrl] = useState(
    "https://voxe-cdn.s3.eu-north-1.amazonaws.com/trailers/billions-2016-official-trailer-paul-giamatti-damian-lewis-showtime-series/master.m3u8"
  )

  const sideScroll = (
    element: HTMLDivElement,
    speed: number,
    distance: number,
    step: number
  ) => {
    let scrollAmount = 0
    const slideTimer = setInterval(() => {
      element.scrollLeft += step
      scrollAmount += Math.abs(step)
      if (scrollAmount >= distance) {
        clearInterval(slideTimer)
      }
    }, speed)
  }
  const contentWrapper: any = useRef(null)
  const playRef: any = useRef(null)
  return (
    <Container>
      <PrevButton
        onClick={() => {
          sideScroll(contentWrapper.current, 25, 100, -10)
        }}
      >
        <ChevronLeft size={60} />
      </PrevButton>
      <ContentWrapper ref={contentWrapper}>
        {trailers.map((url, i) => {
          return (
            <Content key={i}>
              <ReactHlsPlayer
                playerRef={playRef}
                key={i}
                src={url}
                autoPlay={false}
                controls={true}
                width="100%"
                height="100%"
              />
            </Content>
          )
        })}
      </ContentWrapper>
      <NextButton
        onClick={() => {
          sideScroll(contentWrapper.current, 25, 100, 10)
        }}
      >
        <ChevronRight size={60} />
      </NextButton>
      {/* <ReactHlsPlayer
        playerRef={contentWrapper}
        src={`https://voxe-cdn.s3.eu-north-1.amazonaws.com/trailers/billions-2016-official-trailer-paul-giamatti-damian-lewis-showtime-series/master.m3u8`}
        autoPlay={false}
        controls={true}
        width="100%"
        height="auto"
      /> */}
    </Container>
  )
}

export default Trailers
