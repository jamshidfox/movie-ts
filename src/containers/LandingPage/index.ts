import * as ROUTES from "../../constants/routes"
import Layouts from "../../components/Layout/BaseLayout"
import LandingPageContainer from "./containers/LandingContainer"
export default () => [
  {
    path: ROUTES.LANDING_PAGE,
    layout: Layouts,
    component: LandingPageContainer,
  },
]
