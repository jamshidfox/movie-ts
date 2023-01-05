import React from "react"
import styled from "styled-components"
import NewMovies from "../components/NewMovies"
import Trailers from "../components/Trailers"
import Genres from "../components/Genres"
import * as STATE from "../../../constants/stateNames"
import { getPopularMovies, getGenres } from "../actions/index"
import { useFetchList } from "../../../hooks/useFetchList"

const Container = styled("div")`
  padding: 1rem;
`
const LandingPage: React.FC = () => {
  const trendingMovies = () => ({
    action: getPopularMovies,
    stateName: STATE.POPULAR_MOVIES,
  })
  const genres = () => ({
    action: getGenres,
    stateName: STATE.GENRES,
  })

  const popularList: any = useFetchList(trendingMovies())
  const genresList: any = useFetchList(genres())
  return (
    <Container>
      {popularList.data && <NewMovies {...popularList.data} />}
      <Trailers />
      {genresList.data && <Genres {...genresList.data} />}
    </Container>
  )
}
export default LandingPage
