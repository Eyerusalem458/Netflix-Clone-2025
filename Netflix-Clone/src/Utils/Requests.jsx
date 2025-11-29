const APIKey = import.meta.env.VITE_API_KEY;
const requests = {
  fetchTrending: `/trending/all/week?api_key=${APIKey}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${APIKey}&with_networks=213`,
  fetchTopRatedMovies: `/movie/top_rated?api_key=${APIKey}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${APIKey}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${APIKey}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${APIKey}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${APIKey}&with_genres=10749`,
  fetchTvShow: `/tv/popular?api_key=${APIKey}&language=en-US&page=1`,
  fetchDocumentaries: `/discover/movie?api_key=${APIKey}&with_genres=99`,
};
export default requests;
/* we create an object that stores different API endpoints(URLs) fro the TMDB API/ it help us to keep al API in 1 place so it amke it easier to use.*/
