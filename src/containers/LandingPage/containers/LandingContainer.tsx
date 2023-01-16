import React from "react"
import styled from "styled-components"
import Genres from "../components/Genres"
import PopularMovies from "../components/PopularMovies"
import TrendingMovies from "../components/TrendingMovies"
import WarMovies from "../components/WarMovies"
import ActionMovies from "../components/ActionMovies"
import FantasyMovies from "../components/FantasyMovies"
import ScienceFiction from "../components/ScienceFiction"
import * as STATE from "../../../constants/stateNames"
import {
  getPopularMovies,
  getGenres,
  getTrendingMovies,
  getWarMovies,
  getActionMovies,
  getFantasyMovies,
  getScienceFictionMovies,
} from "../actions/index"
import { useFetchList } from "../../../hooks/useFetchList"

interface PopularList {
  data?: [
    movie: {
      backdropPath: string
    },
    index: number
  ]
}
interface TrendingList {
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
  const popularMovies = () => ({
    action: getPopularMovies,
    stateName: STATE.POPULAR_MOVIES,
  })
  const trendingMovies = () => ({
    action: getTrendingMovies,
    stateName: STATE.TRENDING_MOVIES,
  })
  const warMovies = () => ({
    action: getWarMovies,
    stateName: STATE.WAR_MOVIES,
  })
  const actionMovies = () => ({
    action: getActionMovies,
    stateName: STATE.ACTION_MOVIES,
  })
  const fantasyMovies = () => ({
    action: getFantasyMovies,
    stateName: STATE.FANTASY_MOVIES,
  })
  const scienceFictionMovies = () => ({
    action: getScienceFictionMovies,
    stateName: STATE.SCIENCE_FICTION_MOVIES,
  })
  const genres = () => ({
    action: getGenres,
    stateName: STATE.GENRES,
  })

  const genresList: GenresList = useFetchList(genres()) as {}
  const popularList: PopularList = useFetchList(popularMovies()) as {}
  const trendingList: PopularList = useFetchList(trendingMovies()) as {}
  const warList: PopularList = useFetchList(warMovies()) as {}
  const actionList: PopularList = useFetchList(actionMovies()) as {}
  const fantasyList: PopularList = useFetchList(fantasyMovies()) as {}
  const scienceFictionList: PopularList = useFetchList(
    scienceFictionMovies()
  ) as {}
  return (
    <Container>
      {genresList.data && <Genres {...genresList.data} />}
      {popularList.data && (
        <PopularMovies data={popularList.data} title="Popular Movies" />
      )}
      {trendingList.data && (
        <TrendingMovies data={trendingList.data} title="Trending Movies" />
      )}
      {warList.data && <WarMovies data={warList.data} title="War Movies" />}
      {actionList.data && (
        <ActionMovies data={actionList.data} title="Action Movies" />
      )}
      {fantasyList.data && (
        <FantasyMovies data={fantasyList.data} title="Fantasy Movies" />
      )}
      {scienceFictionList.data && (
        <ScienceFiction
          data={scienceFictionList.data}
          title="Science Fiction Movies"
        />
      )}
    </Container>
  )
}
export default LandingPage
