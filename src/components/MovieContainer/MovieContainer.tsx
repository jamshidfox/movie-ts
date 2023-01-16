import React, { useRef, useState } from "react"
import styled from "styled-components"
import { ChevronRight, ChevronLeft } from "react-feather"
import { ModalForm } from "../MovieModal"
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
interface BtnProps {
  isLeft: boolean
  isActive: boolean
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
  width: 370px;
  height: 220px;
  background-size: cover;
  background-position: center;
  flex-shrink: 0;
  margin: 0;
  margin: 1.5rem 0.6rem 1.5rem 0rem;
  border-radius: 10px;
  transition: 0.3s ease-in-out;
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

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  color: white;
  background-color: #10272f;
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
const ButtonContainer = styled("div")<BtnProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 250px;
  visibility: ${(p: BtnProps) => (p.isActive ? "visible" : "hidden")};
  left: ${(p: BtnProps) => (p.isLeft ? "0rem" : "auto")};
  right: ${(p: BtnProps) => (!p.isLeft ? "0rem" : "auto")};
  position: absolute;
  transition: all 0.3s linear;
  width: 96px;
  background: ${(p: BtnProps) => {
    return `linear-gradient(${
      p.isLeft ? "-" : ""
    }90deg,rgba(16, 39, 47, 0),rgba(16, 39, 47, 0.9))`
  }};
  opacity: 0;
  z-index: 1;
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
  const [leftActive, setleftActive] = useState(false)
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
        <ButtonContainer
          className="buttons"
          isLeft={true}
          isActive={leftActive}
        >
          <Button
            onClick={() => {
              sideScroll(contentWrapper.current, 50, 1000, -1000)
            }}
          >
            <ChevronLeft
              style={{ position: "relative", left: "-2px" }}
              size={40}
            />
          </Button>
        </ButtonContainer>
        {data.map((movie: any, index: any) => {
          return (
            <Content key={index} onClick={() => handleMovieClick(movie)}>
              <WatchTrailerContainer
                backImg={movie.backdropPath}
              ></WatchTrailerContainer>
            </Content>
          )
        })}
        <ButtonContainer className="buttons" isLeft={false} isActive={true}>
          <Button
            onClick={() => {
              sideScroll(contentWrapper.current, 50, 1000, 1000)
              setleftActive(true)
            }}
          >
            <ChevronRight
              style={{ position: "relative", left: "2px" }}
              size={60}
            />
          </Button>
        </ButtonContainer>
      </ContentWrapper>
      <ModalForm toggle={toggle} modal={modal} data={movieInfo} />
    </Container>
  )
}
export { HorizontalSection }
