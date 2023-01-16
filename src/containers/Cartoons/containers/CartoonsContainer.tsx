import React from "react"
import styled from "styled-components"
import OtherCartoons from "../components/OtherCartoons"
import { useFetchList } from "../../../hooks/useFetchList"
import * as STATE from "../../../constants/stateNames"
import { getPopularMovies } from "../actions/index"
interface PopularList {
  data?: [
    movie: {
      backdropPath: string
    },
    index: number
  ]
}
const Container = styled.div`
  margin-top: 2rem;
`

const CartoonsContainer: React.FC = () => {
  const popularMovies = () => ({
    action: getPopularMovies,
    stateName: STATE.POPULAR_MOVIES,
  })
  const popularList: PopularList = useFetchList(popularMovies()) as {}
  return (
    <Container>
      {popularList.data && <OtherCartoons data={popularList.data} />}
    </Container>
  )
}

export default CartoonsContainer
