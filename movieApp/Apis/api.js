
const POPULAR_MOVIE_API = 'https://api.themoviedb.org/3/movie/popular?api_key=c6147850d9b8058b02bf62b0a4304c87';
const SEARCH_API = "https://api.themoviedb.org/3/search/movie?api_key=c6147850d9b8058b02bf62b0a4304c87";

export const fetchMovieDetails = async () => {
    try {
      const res = await fetch(POPULAR_MOVIE_API);
      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error.response);
    }
  };

export const getMovies = async (searchText) => {
  try {
    const api_url = `${SEARCH_API}=${searchText}`;
    const res = await fetch(api_url);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error.response);
  }
};