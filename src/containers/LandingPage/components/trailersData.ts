const movies = [
  "cars-2-trailer-2",
  "billions-2016-official-trailer-paul-giamatti-damian-lewis-showtime-series",
  "1917-official-trailer-hd",
  "Catch_Me_if_You_Can_2002_Trailer",
  "Despicable_Me",
  "disney-s-frozen-official-trailer",
  "dnevnik-bridzhet-dzhons-2001-treiler-1-kinoklipy-khranilishche-en",
  "dunkirk-trailer-1-hd",
  "game-night-official-trailer",
  "garri-potter-i-tainaia-komnata-treiler-1-2002-kinoklipy-khranilishche",
  "how-to-train-your-dragon-2-official-trailer-1-2014-animation-sequel-hd",
  "ice-age-dawn-of-the-dinosaurs-2009-trailer-1-movieclips-classic-trailers",
]
const photos: string[] = movies.map(
  (movie_id) =>
    `https://voxe-cdn.s3.eu-north-1.amazonaws.com/trailers/${movie_id}/master.m3u8`
)

export default photos
