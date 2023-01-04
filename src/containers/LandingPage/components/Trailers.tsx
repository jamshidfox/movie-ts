import React, { useRef } from "react"
import { ChevronRight, ChevronLeft } from "react-feather"
import styled from "styled-components"
import photos from "./photos"

const Container = styled.div`
  display: flex;
  width: 100%;
  overflow: hidden;
  align-items: center;
`

interface ContentProps {
  url: string
}

const Content = styled.div<ContentProps>`
  background-image: url(${(props) => props.url});
  height: 10rem;
  width: 10rem;
  background-size: cover;
  background-position: center;
  border-radius: 20px;
  flex-shrink: 0;
`

const ContentWrapper = styled.div`
  display: flex;
  overflow: hidden;
  width: 100%;
  border: 5px solid #ffffff;
  border-radius: 10px;
  & > ${Content} {
    margin: 10px 10px;
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
`
const NextButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 1rem;
  background-color: yellow;
  border-radius: 50%;
`

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

const Trailers: React.FC = () => {
  const contentWrapper: any = useRef(null)

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
        {photos.map((url, i) => (
          <Content url={url} key={`img-${i}`} />
        ))}
      </ContentWrapper>
      <NextButton
        onClick={() => {
          sideScroll(contentWrapper.current, 25, 100, 10)
        }}
      >
        <ChevronRight size={60} />
      </NextButton>
    </Container>
  )
}

export default Trailers
