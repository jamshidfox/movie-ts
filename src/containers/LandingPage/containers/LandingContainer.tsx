import React from "react"
import styled from "styled-components"
import NewMovies from "../components/NewMovies"
import * as STATE from "../../../constants/stateNames"
import { getPopularMovies } from "../actions/index"
import { useFetchList } from "../../../hooks/useFetchList"

const Container = styled("div")`
  padding: 1rem;
`
const LandingPage: React.FC = () => {
  const trendingMovies = () => ({
    action: getPopularMovies,
    stateName: STATE.POPULAR_MOVIES,
  })
  const popularList: any = useFetchList(trendingMovies())
  return (
    <Container>
      {popularList.data && <NewMovies {...popularList.data} />}
    </Container>
  )
}
export default LandingPage
