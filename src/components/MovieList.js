import MovieCard from "./subComponents/MovieCard";

const MovieList = ({ title, movies }) => {

    return (
        <div className="px-6 pb-6 ">
            <h1 className="text-lg md:text-3xl py-4 pt-2 md:pt-4 mb-0 md:mb-2 text-white">{title}</h1>
            <div className="flex overflow-x-scroll no-scrollbar ">
                <div className="flex">
                    {movies?.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} posterPath={movie.poster_path} />
                    ))}
                </div>
            </div>
        </div>
    );
};
export default MovieList;