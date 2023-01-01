import { Navbar } from "../Navbar"
import { Footer } from "../Footer"
import styled from "styled-components"

const Container = styled(`div`)``
function App() {
  return (
    <Container>
      <Navbar />
      <Footer />
    </Container>
  )
}

export default App
