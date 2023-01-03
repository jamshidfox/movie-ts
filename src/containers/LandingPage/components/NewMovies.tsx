import React from "react"
import styled from "styled-components"
import { Card, CardBody, CardImg, CardText } from "reactstrap"
const Container = styled("div")``

const ScrollHorizontal = styled("div")`
  display: flex;
  flex-direction: row;
  padding: 2rem 0rem 0rem 0rem;

  overflow-x: scroll;
  ::-webkit-scrollbar {
    width: 0px;
    height: 0px;
  }
`
const CardContainer = styled(Card)`
  min-width: auto;
  margin-right: 1rem;
  border: none;
  height: fit-content;
  &:hover {
    cursor: pointer;
    transform: scaleY(1.1);
    transition: all 0.5s ease-out;
  }
`
const Img = styled(CardImg)`
  height: 14rem;
  width: auto;
  max-width: 12rem;
`
const Body = styled(CardBody)`
  padding: 1rem 0rem;
  text-align: center;
  height: 100%;
`
const Text = styled(CardText)`
  font-weight: 600;
  width: 10rem;
`

const NewMovies: React.FC = ({ results }: any) => {
  return (
    <Container>
      <ScrollHorizontal style={{ height: "25rem" }}>
        {results.map((movie: any, index: number) => (
          <CardContainer id={index} key={index}>
            <Img
              src={`https://image.tmdb.org/t/p/w500/${movie.backdropPath}`}
            />
            <Body>
              <Text>{movie.title}</Text>
            </Body>
          </CardContainer>
        ))}
      </ScrollHorizontal>
    </Container>
  )
}

export default NewMovies
