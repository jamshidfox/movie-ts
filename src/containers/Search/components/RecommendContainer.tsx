import React, { useState } from "react"
import styled from "styled-components"
import { ModalForm } from "../../../components/MovieModal"

interface watchCartoonContainerProp {
  backImg: string
}
interface Props {
  data: any
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
`
const Content = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 160px;
  background-size: cover;
  background-position: center;
  flex-shrink: 0;
  margin: 0;
  margin: 0rem 0.6rem 1.5rem 0rem;
  border-radius: 5px;
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
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const MovieContent = styled("div")`
  display: grid;
  padding: 20px 40px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 14px;
  flex-wrap: wrap;
`

const HeadLine = styled.h2`
  color: white;
  margin-left: 40px;
`
const RecommendContainer: React.FC<Props> = ({ data }) => {
  let [movieInfo, setMovieInfo]: [any, any] = useState(0)
  const [modal, setModal] = useState(false)
  // console.log(data.data)
  const handleMovieClick = (movie: any) => {
    setMovieInfo(movie)
    setModal(true)
    // navigate(`${ROUTES.SEARCHED_MOVIE}?id=${movie.id}`)
  }
  const toggle = () => setModal(!modal)

  return (
    <Container>
      <HeadLine>Cartoons</HeadLine>
      <MovieContent>
        {data.data.map((movie: any, index: any) => (
          <Content key={1} onClick={() => handleMovieClick(movie)}>
            <WatchCartoonContainer
              backImg={movie.backdropPath}
            ></WatchCartoonContainer>
          </Content>
        ))}
      </MovieContent>
      <ModalForm toggle={toggle} modal={modal} data={movieInfo} />
    </Container>
  )
}
export default RecommendContainer
