import React from "react"
import styled from "styled-components"
import { MovieContainer } from "../../../components/MovieContainer"
interface Props {
  data: [
    movie: {
      backdropPath: string
    },
    index: number
  ]
}
const Container = styled("div")``
const PopularMoviesUpdated: React.FC<Props> = ({ data }) => {
  return (
    <Container>
      <MovieContainer data={data} />
    </Container>
  )
}

export default PopularMoviesUpdated
