import React, { useRef } from "react"
import { ChevronRight, ChevronLeft } from "react-feather"
import styled from "styled-components"
import trailers from "./trailersData"
const Container = styled.div`
  display: flex;
  width: 100%;
  @media (max-width: ${({ theme }) => theme.mobile.mobileScreenWidth}) {
    padding-bottom: 20px;
  }
  overflow: hidden;
  align-items: center;
`

const Content = styled.div`
  width: 400px;
  height: 240px;
  background-size: cover;
  background-position: center;
  flex-shrink: 0;
  margin: 0;
  margin: 1.5rem 0.4rem;
  border-radius: 20px;
  transition: 0.3s ease-in-out;
  background-color: black;
  z-index: 1;
  :hover {
    transform: scale(103%, 105%);
  }
`
const WatchTrailerContainer = styled("div")`
  background-image: url("https://cdn.voxe.tv/s3/imgs/altered-carbon/altered-carbon_thumbnail_min.webp"); /* later will come from data*/
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const PrevButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 70px;
  animation: btn 1s;
  background-color: yellow;
  border-radius: 50%;
  left: 1.3rem;
  z-index: 99;
`
const NextButton = styled.button`
  width: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 1.3rem;
  background-color: yellow;
  border-radius: 50%;
  z-index: 99;
`
const ContentWrapper = styled.div`
  display: flex;
  overflow: hidden;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  height: 350px;
  border: 5px solid #ffffff;
  scroll-behavior: smooth;
  border-radius: 10px;
`
// const Video

const Trailers: React.FC = () => {
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
      if (scrollAmount === distance) {
        clearInterval(slideTimer)
      }
    }, speed)
  }
  const contentWrapper: any = useRef(null)
  return (
    <Container>
      <PrevButton
        onClick={() => {
          sideScroll(contentWrapper.current, 50, 1000, -1000)
        }}
      >
        <ChevronLeft style={{ position: "relative", left: "-2px" }} size={60} />
      </PrevButton>
      <ContentWrapper ref={contentWrapper}>
        {trailers.map((url, i) => {
          return (
            <Content key={i}>
              <WatchTrailerContainer></WatchTrailerContainer>
            </Content>
          )
        })}
      </ContentWrapper>
      <NextButton
        onClick={() => {
          sideScroll(contentWrapper.current, 50, 1000, 1000)
        }}
      >
        <ChevronRight style={{ position: "relative", left: "2px" }} size={60} />
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
