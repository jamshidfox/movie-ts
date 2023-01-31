import * as ROUTES from "../../constants/routes"
import Layouts from "../../components/Layout/MovieBaseLayout"
import CartoonsContainer from "./containers/TrendingContainer"
export default () => [
  {
    path: ROUTES.CARTOONS,
    layout: Layouts,
    component: CartoonsContainer,
  },
]
