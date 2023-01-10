import React from "react"
import styled from "styled-components"
import { Card, CardBody, CardImg, CardText } from "reactstrap"

interface MovieData {
  data: []
}
const Container = styled("div")`
  display: flex;
`

const ScrollHorizontal = styled("div")`
  display: flex;
  flex-direction: row;
  height: 20rem;
  padding: 2rem 0rem 2rem 2rem;
  @media (max-width: ${({ theme }) => theme.mobile.mobileScreenWidth}) {
    padding: 0;
  }
  overflow-x: scroll;
  overflow-y: hidden;
  ::-webkit-scrollbar {
    width: 0px;
    height: 0px;
  }
`
const CardContainer = styled(Card)`
  min-width: auto;
  margin-right: 1.1rem;
  border: none;
  @media (max-width: ${({ theme }) => theme.mobile.mobileScreenWidth}) {
    margin-top: 2rem;
    margin-left: 1rem;
  }
  transition: all 0.3s ease-out;
  height: fit-content;
  &:hover {
    cursor: pointer;
    transform: scale(103%);
  }
`
const Img = styled(CardImg)`
  height: 12rem;
  width: auto;
  max-width: 20rem;
`
const Body = styled(CardBody)`
  padding: 1rem 0rem;
  @media (max-width: ${({ theme }) => theme.mobile.mobileScreenWidth}) {
    padding-bottom: 0;
  }
  text-align: center;
  height: 100%;
`
const Text = styled(CardText)`
  font-weight: 600;
  width: 100%;
`

const NewMovies = ({ data }: any) => {
  return (
    <Container>
      <ScrollHorizontal>
        {data.map((movie: any, index: number) => (
          <CardContainer id={index} key={index}>
            <Img src={`${movie.backdropPath}`} />
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
