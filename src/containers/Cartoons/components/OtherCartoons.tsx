import React, { useState } from "react"
import styled from "styled-components"
import { ModalForm } from "../../../components/MovieModal"

interface watchCartoonContainerProp {
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

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.4rem;
  justify-items: center;
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

const WatchCartoonContainer = styled("div")<watchCartoonContainerProp>`
  background-image: url(${(p: watchCartoonContainerProp) => p.backImg});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const HeadLine = styled.h2``
const OtherCartoons: React.FC<Props> = ({ data }) => {
  console.log(data)
  let [movieInfo, setMovieInfo]: [any, any] = useState(0)
  const [modal, setModal] = useState(false)

  const handleMovieClick = (movie: any) => {
    setMovieInfo(movie)
    setModal(true)
    // navigate(`${ROUTES.SEARCHED_MOVIE}?id=${movie.id}`)
  }
  const toggle = () => setModal(!modal)

  return (
    <Container>
      <HeadLine>Cartoons</HeadLine>
      {data.map((movie: any, index: any) => (
        <Content key={1} onClick={() => handleMovieClick(movie)}>
          <WatchCartoonContainer
            backImg={movie.backdropPath}
          ></WatchCartoonContainer>
        </Content>
      ))}

      <ModalForm toggle={toggle} modal={modal} data={movieInfo} />
    </Container>
  )
}
export default OtherCartoons
