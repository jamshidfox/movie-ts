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
  :hover {
    .shit {
      opacity: 1;
    }
  }
`

const Content = styled.div`
  display: flex;
  justify-content: center;
  width: 430px;
  height: 240px;
  background-size: cover;
  background-position: center;
  flex-shrink: 0;
  margin: 0;
  margin: 1.5rem 0.4rem 1.5rem 0rem;
  border-radius: 20px;
  transition: 0.3s ease-in-out;
  background-color: black;
  z-index: 1;
  :hover {
    transform: scale(102%, 103%);
  }
`
const WatchTrailerContainer = styled("div")`
  background-image: url("https://cdn.voxe.tv/s3/imgs/altered-carbon/altered-carbon_thumbnail_min.webp"); /* later will come from data*/
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 95%;
  height: 100%;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const PrevButton = styled.button`
  display: flex;
  opacity: 0;
  transition: all 0.3s linear;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 70px;
  background-color: #10272f;
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
  background-color: #10272f;
  border-radius: 50%;
  z-index: 99;
`
const ContentWrapper = styled.div`
  display: flex;
  overflow: hidden;
  width: 100%;
  padding-left: 10px;
  align-items: center;
  justify-content: flex-start;
  height: 350px;
  border: 5px solid #10272f;
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
        className="shit"
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
    </Container>
  )
}

export default Trailers
