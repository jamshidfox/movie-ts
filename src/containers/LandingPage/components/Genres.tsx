import React, { useState } from "react"
import styled from "styled-components"
import { ChevronRight } from "react-feather"
import { Collapse, Button, CardBody, Card } from "reactstrap"
interface Props {
  genres: []
}

const Container = styled("div")``
const Paragraph = styled("p")``
const GenresContainer = styled("div")`
  background-color: #252525;
  width: 100%;
  padding: 30px 90px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  font-size: 24px;
  font-family: "ABeeZee", sans-serif;
  font-weight: 400;
  border-radius: 30px;
  color: white;
  height: 290px;
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
        <GenresContainer>
          {genres.map((genre: any) => (
            <Paragraph>{genre.name.toUpperCase()}</Paragraph>
          ))}
        </GenresContainer>
      </CollapsedGenres>
    </Container>
  )
}
export default Genres
