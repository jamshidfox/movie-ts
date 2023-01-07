import * as ROUTES from "../../constants/routes"
import Layouts from "../../components/Layout/MovieSearchedLayout"
import SearchedMovieContainer from "./containers/SearchedMovie"
export default () => [
  {
    path: ROUTES.SEARCHED_MOVIE,
    layout: Layouts,
    component: SearchedMovieContainer,
  },
]
