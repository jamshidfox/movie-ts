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
  width: 100%;
  padding: 30px 90px;
  padding-bottom: 10px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  font-size: 24px;
  font-family: "ABeeZee", sans-serif;
  font-weight: 400;
  border-radius: 30px;
  color: white;
  height: 280px;
`

const CollapsedGenres = styled(Collapse)`
  width: 100%;
  border-radius: 40px;
  display: flex;
  flex-direction: column;
  background-color: #252525;
`
const GenresButtonsContainer = styled("div")`
  display: flex;
  justify-content: space-around;
  padding: 5px 30%;
  padding-bottom: 40px;
`
const GenresButtons = styled("button")`
  width: 150px;
  border-radius: 20px;
  text-decoration: underline;
  color: black;
  height: 40px;
  background-color: #d9d9d9;
`
const CollapsedCountry = styled(Collapse)``
const CollapsedYear = styled(Collapse)``
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
        <GenresButtonsContainer>
          <GenresButtons>
            COUNTRY <ChevronRight style={{ transform: "rotate(90deg)" }} />
          </GenresButtons>
          <GenresButtons>
            YEAR <ChevronRight style={{ transform: "rotate(90deg)" }} />
          </GenresButtons>
        </GenresButtonsContainer>
      </CollapsedGenres>
    </Container>
  )
}
export default Genres
