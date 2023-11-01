import { useDispatch } from "react-redux";
import { IMG_CDN_URL } from "../../utils/constants";
import { setMainTrailerMovie } from "../../store/movieSlice";

const MovieCard = ({ posterPath, movie }) => {
    const dispatch = useDispatch();
    if (!posterPath) return null;
    const handleMainTrailerMovie = (movie) => {
        dispatch(setMainTrailerMovie(movie));
    }
    return (
        <div onClick={() => { handleMainTrailerMovie(movie) }} className="w-36 md:w-48 pr-4">
            <img alt="Movie Card" src={IMG_CDN_URL + posterPath} />
        </div>
    );
};
export default MovieCard;