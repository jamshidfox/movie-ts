import styled from "styled-components"
import { Card, CardBody, CardImg, CardText } from "reactstrap"

const Conatainer = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const ScrollHorizontal = styled("div")`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.4rem;
  justify-items: center;
`
// const ScrollHorizontal = styled(HorizontalScroll)`
//   margin-top: 1rem;
// `
const CardContainer = styled(Card)`
  display: flex;
  justify-content: center;
  width: 15rem;
  margin-right: 1rem;
  border: none;
  height: fit-content;
  &:hover {
    cursor: pointer;
  }
`

const Img = styled(CardImg)`
  width: 210px;
  height: 300px;
  border-radius: 20px;
  height: auto;
`
const Body = styled(CardBody)`
  display: flex;
  justify-content: flex-start;
  text-align: center;
  padding: 1rem 0rem;
  height: 100%;
`
const Text = styled(CardText)`
  font-weight: 600;
  width: 10rem;
`
const HeadLine = styled("h1")`
  font-size: 1.5rem;
  font-weight: 610;
  display: flex;
`
const RatingOfMoviContainer = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
`
const RatingOfMovie = styled("div")`
  display: flex;
  justify-content: center;
  position: relative;
  top: 13px;
  height: 26px;
  width: 40px;
  border-radius: 20px;
  font-size: 18px;
  background-color: gray; /* later will be come from theme */
  color: white; /* later will be come from theme */
`

const PopularMovies = (props) => {
  const ImgUrl = "https://image.tmdb.org/t/p/w500"
  return (
    <Conatainer>
      <HeadLine>Popular Movies</HeadLine>
      <ScrollHorizontal>
        {props.results.map((movie, index) => (
          <CardContainer id={movie.id} key={index}>
            <RatingOfMoviContainer>
              <RatingOfMovie>{movie.voteAverage}</RatingOfMovie>
            </RatingOfMoviContainer>
            <Img src={ImgUrl + movie.posterPath} />
            <Body>
              <Text>{movie.title}</Text>
            </Body>
          </CardContainer>
        ))}
      </ScrollHorizontal>
    </Conatainer>
  )
}

export default PopularMovies
