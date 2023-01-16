import landingPage from "./LandingPage"
import searchedMovie from "./SearchedMovie"
import cartoons from "./Cartoons"

const tester = () => [...landingPage(), ...searchedMovie(), ...cartoons()]
const Routes = () => [...tester()]

export default Routes
