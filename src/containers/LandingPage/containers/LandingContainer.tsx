import React from "react"
import styled from "styled-components"
import NewMovies from "../components/NewMovies"
import Trailers from "../components/Trailers"
import * as STATE from "../../../constants/stateNames"
import { getPopularMovies } from "../actions/index"
import { useFetchList } from "../../../hooks/useFetchList"
import theme from "../../../constants/theme"

const Container = styled("div")`
  @media (max-width: ${theme.mobile.mobileScreenWidth}) {
    padding-top: 2rem;
  }
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
      <Trailers />
    </Container>
  )
}
export default LandingPage
