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
  title: string
}
const Container = styled("div")``
const HeadLine = styled("h3")`
  color: white;
`
const WarMovies: React.FC<Props> = ({ data, title }) => {
  return (
    <Container>
      <HeadLine>{title}</HeadLine>
      <MovieContainer data={data} />
    </Container>
  )
}

export default WarMovies
