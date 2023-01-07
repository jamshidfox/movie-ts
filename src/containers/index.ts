import landingPage from "./LandingPage"
import searchedMovie from "./SearchedMovie"

const tester = () => [...landingPage(), ...searchedMovie()]
const Routes = () => [...tester()]

export default Routes
