import landingPage from "./LandingPage"
import searchedMovie from "./SearchedMovie"
import cartoons from "./Cartoons"
import search from "./Search"

const tester = () => [
  ...landingPage(),
  ...searchedMovie(),
  ...cartoons(),
  ...search(),
]
const Routes = () => [...tester()]

export default Routes
