const API_KEY = "a06703a3a956c84f212f678361ef4431"
export const DOMAIN_URL = "https://api.themoviedb.org"
export const API_URL = `${DOMAIN_URL}`

export const TRENDING_MOVIES = `${API_URL}/3/trending/all/day?api_key=${API_KEY}&page=1`
export const POPULAR_MOVIES = `${API_URL}/3/movie/popular?api_key=${API_KEY}&page=1`
export const GENRES = `${API_URL}/3/genre/movie/list?api_key=${API_KEY}&language=en-US`

export const CREATE_GUEST_SESSION = `${API_URL}/3/authentication/guest_session/new?api_key=${API_KEY}`
