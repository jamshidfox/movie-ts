import React, { useRef, useState } from "react"
import styled from "styled-components"
import { ChevronRight, ChevronLeft } from "react-feather"
import { ModalForm } from "../ModalForm"
interface prop {
  backImg: string
}
interface Props {
  data: [
    movie: {
      backdropPath: string
    },
    index: number
  ]
}
const Container = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  :hover {
    .buttons {
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
  margin: 1.5rem 0.6rem 1.5rem 0rem;
  border-radius: 20px;
  transition: 0.3s ease-in-out;
  background-color: black;
  z-index: 1;
  :hover {
    transform: scale(102%, 103%);
  }
`
const WatchTrailerContainer = styled("div")<prop>`
  background-image: url(${(p: prop) => p.backImg});
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
  position: absolute;
  left: 1.3rem;
  opacity: 0;
  transition: all 0.3s linear;
  justify-content: center;
  align-items: center;
  width: 70px;
  border-radius: 50%;
  border: none;
  color: white;
  background-color: #10272f;
  z-index: 99;
`
const NextButton = styled.button`
  opacity: 0;
  position: absolute;
  right: 1.3rem;
  width: 70px;
  /* display: flex; */
  transition: all 0.3s linear;
  justify-content: center;
  align-items: center;
  transition: all 0.3s linear;
  background-color: #10272f;
  border: none;
  color: white;
  border-radius: 50%;
  z-index: 99;
`
const ContentWrapper = styled.div`
  display: flex;
  overflow: hidden;
  width: 100%;
  padding-left: 10px;
  align-items: center;
  height: 350px;
  border: 5px solid #10272f;
  scroll-behavior: smooth;
  border-radius: 10px;
`
const HorizontalSection: React.FC<Props> = ({ data }) => {
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

  const [modal, setModal] = useState(false)
  let [movieInfo, setMovieInfo]: [any, any] = useState(0)
  const toggle = () => setModal(!modal)
  // const navigate = useNavigate()
  const handleMovieClick = (movie: any) => {
    setMovieInfo(movie)
    setModal(true)
    // navigate(`${ROUTES.SEARCHED_MOVIE}?id=${movie.id}`)
  }

  return (
    <Container>
      <ContentWrapper ref={contentWrapper}>
        <PrevButton
          className="buttons"
          onClick={() => {
            sideScroll(contentWrapper.current, 50, 1000, -1000)
          }}
        >
          <ChevronLeft
            style={{ position: "relative", left: "-2px" }}
            size={60}
          />
        </PrevButton>
        {data.map((movie: any, index: any) => {
          return (
            <Content key={index} onClick={() => handleMovieClick(movie)}>
              <WatchTrailerContainer
                backImg={movie.backdropPath}
              ></WatchTrailerContainer>
            </Content>
          )
        })}
        <NextButton
          className="buttons"
          onClick={() => {
            sideScroll(contentWrapper.current, 50, 1000, 1000)
          }}
        >
          <ChevronRight
            style={{ position: "relative", left: "2px" }}
            size={60}
          />
        </NextButton>
      </ContentWrapper>

      <ModalForm toggle={toggle} modal={modal} data={movieInfo} />
    </Container>
  )
}
export { HorizontalSection }
