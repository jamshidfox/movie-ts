import React, { useState } from "react"
import styled from "styled-components"
import { Collapse, Button, CardBody, Card } from "reactstrap"
interface Props {
  genres: []
}

const Container = styled("div")``
const GenresContainer = styled("div")`
  background-color: #252525;
  width: 95%;
  margin-left: 2%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  font-size: 24px;
  flex-wrap: wrap;
  font-family: "ABeeZee", sans-serif;
  font-weight: 400;
  border-radius: 30px;
  color: white;
  height: 15vw;
`

const CollapsedGenres = styled(Collapse)``
const Genres: React.FC<Props> = ({ genres }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)
  return (
    <Container>
      <Button
        color="primary"
        onClick={toggle}
        style={{ marginBottom: "1rem", backgroundColor: "#171616" }}
      >
        Genres <ChevronRight style={{ transform: "rotate(90deg)" }} />
      </Button>

      <CollapsedGenres isOpen={isOpen}>
        <Card>
          <CardBody>
            {genres.map((genre: any) => (
              <h1>{genre.name}</h1>
            ))}
          </CardBody>
        </Card>
      </CollapsedGenres>
    </Container>
  )
}
export default Genres
