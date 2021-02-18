import { useGobalMovieContext } from "../context/MovieContext";
import Movie from "./Movie";
import Footer from "./Footer";
import Pager from "./Pager";
const Home = () => {
  const { movies, setMovies } = useGobalMovieContext();

  return (
    <>
      <Pager />
      <div className="container">
        {movies.map((movie) => {
          return <Movie movie={movie} key={movie.id} />;
        })}
      </div>
      <Footer />
    </>
  );
};

export default Home;
