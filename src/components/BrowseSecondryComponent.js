import { useSelector } from "react-redux";
import MovieList from './MovieList'

const SecondaryContainer = () => {
    const movies = useSelector((store) => store.movie);


    return (
        movies.nowPlayingMovies && (
            <div className="bg-black pt-9  min-[400px]:pt-20 min-[500px]:pt-28 md:pt-0 pb-96 md:pt-64 md:pb-96">
                <div className="top-[350px] sm:top-96 md:top-96  relative z-20">
                    <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
                    <MovieList title={"Trending"} movies={movies.TopRatedMovies} />
                    <MovieList title={"Popular"} movies={movies.PopularMovies} />
                    <MovieList
                        title={"Upcoming Movies"}
                        movies={movies.UpComingMovies}
                    />
                    <MovieList title={"Horror"} movies={movies.nowPlayingMovies} />
                </div>
            </div>
        )
    );
};
export default SecondaryContainer;