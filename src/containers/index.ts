import landingPage from "./LandingPage"
import searchedMovie from "./SearchedMovie"
import cartoons from "./Cartoons"
import search from "./Search"
import horrorMovies from "./HorrorMovies"
import warMovies from "./WarMovies"
import trendingMovies from "./TrendingMovies"

const tester = () => [
  ...landingPage(),
  ...searchedMovie(),
  ...cartoons(),
  ...horrorMovies(),
  ...warMovies(),
  ...trendingMovies(),
  ...search(),
]
const Routes = () => [...tester()]

export default Routes
