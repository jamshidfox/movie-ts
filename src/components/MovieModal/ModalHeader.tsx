import React from "react"
import styled from "styled-components"
import { Button } from "reactstrap"
import { X, Play, Bookmark, Share2, VolumeX } from "react-feather"
import { useNavigate } from "react-router-dom"

interface Props {
  toggle: any
  data: {
    Id: string
    backdropPath: string
    movieId: string | null | number
    overview: string
    releaseDate: string
    title: string
    voteAverage: number
  }
}

const Container = styled("div")``

const CloseButton = styled(Button)`
  position: absolute;
  top: 20px;
  right: 25px;
  width: 40px;
  height: 40px;
  padding: 1px 6px;
  backdrop-filter: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid white;
`
interface ImageProps {
  background: string
}

const MovieImageBox = styled("div")<ImageProps>`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-image: ${(props: ImageProps) => {
    return `url(${props.background})`
  }};
  /* box-shadow: inset 0px -20px 15px 1px #10272f; */
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 6px;
  width: 100%;
  height: 400px;
`
const MovieControlsContainer = styled("div")`
  width: 100%;
  padding: 24px 60px 8px;
  background: -webkit-gradient(
    linear,
    left bottom,
    left top,
    from(#10272f),
    color-stop(100%, transparent)
  );
  > h4 {
    color: #fff;
    margin-bottom: 16px;
  }
  @media (max-width: ${({ theme }) => theme.mobile.mobileScreenWidth}) {
    padding: 10px 20px;
  }
`
const MovieControls = styled("div")`
  width: 100%;
  display: flex;
`

const WatchButton = styled(Button)`
  min-width: 180px;
  display: flex;
  height: 45px;
  align-items: center;
  justify-content: center;
  border: none;
  font-weight: 500;
  border-radius: 10px;
  background-color: white;
  color: black;
  margin-right: 12px;
  :hover {
    background-color: white;
    color: black;
  }
  @media (max-width: ${({ theme }) => theme.mobile.mobileScreenWidth}) {
    min-width: 100px;
    padding: 0px 8px;
  }
`
const BookAndShareButtons = styled("a")`
  padding: 8px 10px;
  border: 1px solid #fff;
  border-radius: 8px;
  margin-right: 12px;
`
const MuteOrVolumeButton = styled("a")`
  padding: 8px 10px;
  border: 1px solid #fff;
  border-radius: 8px;
  margin-right: 12px;
  margin-left: auto;
  @media (max-width: ${({ theme }) => theme.mobile.mobileScreenWidth}) {
    display: none;
  }
`

const ModalHeader: React.FC<Props> = ({ toggle, data }) => {
  console.log(data)
  const navigate = useNavigate()
  const handleMovieClick = (id: string | null | number) => {
    navigate(`/searched_movie?id=${id}`)
  }
  return (
    <Container>
      <MovieImageBox background={data.backdropPath}>
        <CloseButton
          onClick={toggle}
          style={{ backgroundColor: "rgba(16,39,47,.14)" }}
        >
          <X size={20} />
        </CloseButton>
        <MovieControlsContainer>
          <h4>{data.title}</h4>
          <MovieControls>
            <WatchButton onClick={() => handleMovieClick(data.movieId)}>
              <Play color="black" style={{ fill: "black" }} />
              Смотреть сейчас
            </WatchButton>
            <BookAndShareButtons>
              <Bookmark height={20} style={{ height: "25px", width: "20px" }} />
            </BookAndShareButtons>
            <BookAndShareButtons>
              <Share2 />
            </BookAndShareButtons>
            <MuteOrVolumeButton>
              <VolumeX />
            </MuteOrVolumeButton>
          </MovieControls>
        </MovieControlsContainer>
      </MovieImageBox>
    </Container>
  )
}
export default ModalHeader
