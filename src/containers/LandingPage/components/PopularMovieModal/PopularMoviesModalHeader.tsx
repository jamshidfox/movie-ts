import React from "react"
import styled from "styled-components"
import { Button } from "reactstrap"
import { X } from "react-feather"
interface Props {
  toggle: any
  data: {
    title: string
    backdropPath?: string
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
  background-size: 100% 100%;
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
`
const MovieControls = styled("div")`
  width: 100%;
  display: flex;
`

const WatchButton = styled(Button)`
  min-width: 180px;
  display: flex;
  height: 40px;
  align-items: center;
  justify-content: center;
  border: none;
  font-weight: 500;
  border-radius: 50px;
  background-color: white;
  color: black;
`
const PopularMoviesModalHeader: React.FC<Props> = ({ toggle, data }) => {
  const ImgUrl = "https://image.tmdb.org/t/p/w500"

  //   console.log(typeof data)
  // console.log(data)
  return (
    <Container>
      <MovieImageBox background={ImgUrl + data.backdropPath}>
        <CloseButton
          onClick={toggle}
          style={{ backgroundColor: "rgba(16,39,47,.14)" }}
        >
          <X size={20} />
        </CloseButton>
        <MovieControlsContainer>
          <h4>{data.title}</h4>
          <MovieControls>
            <WatchButton>Смотреть сейчас</WatchButton>
          </MovieControls>
        </MovieControlsContainer>
      </MovieImageBox>
    </Container>
  )
}
export default PopularMoviesModalHeader
