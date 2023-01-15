import React from "react"
import styled from "styled-components"
import NewMovies from "../components/NewMovies"
import Placeholder from "../components/Placeholder"
import Trailers from "../components/Trailers"
import Genres from "../components/Genres"
import PopularMovies from "../components/PopularMovies"
import PopularMoviesUpdated from "../components/PopularMoviesUpdated"
import * as STATE from "../../../constants/stateNames"
import { getPopularMovies, getGenres } from "../actions/index"
import { useFetchList } from "../../../hooks/useFetchList"

interface PopularList {
  data?: [
    movie: {
      backdropPath: string
    },
    index: number
  ]
}
interface GenresList {
  data?: {
    genres: []
  }
}
interface ActionsList {
  data?: {
    genres: []
  }
}

const Container = styled("div")`
  @media (max-width: ${({ theme }) => theme.mobile.mobileScreenWidth}) {
    padding-top: 2rem;
  }
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

  const popularList: PopularList = useFetchList(trendingMovies()) as {}
  const genresList: GenresList = useFetchList(genres()) as {}
  return (
    <Container>
      {!popularList.data && <Placeholder />}
      {popularList.data && <NewMovies data={popularList.data} />}
      <Trailers />
      {genresList.data && <Genres {...genresList.data} />}
      {/* {popularList.data && <PopularMovies data={popularList.data} />} */}
      {popularList.data && <PopularMoviesUpdated data={popularList.data} />}
    </Container>
  )
}
export default LandingPage
