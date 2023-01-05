import React from "react"
import styled from "styled-components"
import { Card, CardBody, CardImg, CardText } from "reactstrap"
import theme from "../../../constants/theme"
const Container = styled("div")``

const ScrollHorizontal = styled("div")`
  display: flex;
  flex-direction: row;
  height: 20rem;
  padding: 2rem 0rem 0rem 0rem;
  @media (max-width: ${theme.mobile.mobileScreenWidth}) {
    padding: 0;
  }
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
  @media (max-width: ${theme.mobile.mobileScreenWidth}) {
    margin-top: 2rem;
    margin-left: 1rem;
  }
  height: fit-content;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    transition: all 0.5s ease-out;
  }
`
const Img = styled(CardImg)`
  height: 10rem;
  width: auto;
  max-width: 12rem;
`
const Body = styled(CardBody)`
  padding: 1rem 0rem;
  @media (max-width: ${theme.mobile.mobileScreenWidth}) {
    padding-bottom: 0;
  }
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
      <ScrollHorizontal>
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
