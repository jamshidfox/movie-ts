import React from "react"
import styled from "styled-components"
import Placeholder from "../components/Placeholder"
import Genres from "../components/Genres"
import PopularMovies from "../components/PopularMovies"
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
      {genresList.data && <Genres {...genresList.data} />}
      {popularList.data && <PopularMovies data={popularList.data} />}
    </Container>
  )
}
export default LandingPage
