import React from "react"
import styled from "styled-components"
import { HorizontalSection } from "../../../components/HorizontalSection"
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
      <HorizontalSection data={data} />
    </Container>
  )
}

export default PopularMoviesUpdated
