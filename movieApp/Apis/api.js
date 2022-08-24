
const POPULAR_MOVIE_API = 'https://api.themoviedb.org/3/movie/popular?api_key=<API_KEY>';

export const fetchMovieDetails = async () => {
    try {
      const res = await fetch(POPULAR_MOVIE_API);
      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error.response);
    }
  };