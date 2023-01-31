import landingPage from "./LandingPage"
import searchedMovie from "./SearchedMovie"
import cartoons from "./Cartoons"
import search from "./Search"
import horrorMovies from "./HorrorMovies"
import warMovies from "./WarMovies"

const tester = () => [
  ...landingPage(),
  ...searchedMovie(),
  ...cartoons(),
  ...horrorMovies(),
  ...warMovies(),
  ...search(),
]
const Routes = () => [...tester()]

export default Routes
