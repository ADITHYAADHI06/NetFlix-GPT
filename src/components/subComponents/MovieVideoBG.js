import { useSelector } from "react-redux";
import useTrailer from "../../hooks/useTrailer";

const MovieVideoBG = ({ MovieId }) => {

    useTrailer(MovieId);

    let MainTrailer = useSelector((state) => state.movie.MainTrailer)

    if (!MainTrailer) {
        return
    }
    const { key } = MainTrailer;

    return (
        <div className="absolute min-[400px]:mt-10 min-[500px]:mt-8 mt-6 sm:mt-0 md:mt-8 z-0 aspect-video w-full sm:w-full h-96  md:h-screen">
            <iframe className="w-full h-[90%] sm:h-full sm:w-screen md:h-full " src={`https://www.youtube.com/embed/${key}?&autoplay=1&mute=1&controls=0&rel=0&loop=1&&showinfo=0`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; " title="trailer" ></iframe>
        </div>
    )
}

export default MovieVideoBG
