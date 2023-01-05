const movies = [
  "cars-2-trailer-2",
  "billions-2016-official-trailer-paul-giamatti-damian-lewis-showtime-series",
  "1917-official-trailer-hd",
  "Catch_Me_if_You_Can_2002_Trailer",
  "Despicable_Me",
  "garri-potter-i-tainaia-komnata-treiler-1-2002-kinoklipy-khranilishche/",
]
const photos: string[] = movies.map(
  (movie_id) =>
    `https://voxe-cdn.s3.eu-north-1.amazonaws.com/trailers/${movie_id}/master.m3u8`
)

export default photos
