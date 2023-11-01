export const BG_URL = "https://assets.nflxext.com/ffe/siteui/vlv3/00103100-5b45-4d4f-af32-342649f1bda5/64774cd8-5c3a-4823-a0bb-1610d6971bd4/IN-en-20230821-popsignuptwoweeks-perspective_alpha_website_large.jpg"

export const USER_AVATAR = "https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e"

export const Now_Playing_URL = "https://api.themoviedb.org/3/discover/movie?include_adult=false&page=1&sort_by=popularity.desc"
export const Popular_URL = "https://api.themoviedb.org/3/movie/popular?&page=1"
export const Top_Rated_URL = "https://api.themoviedb.org/3/movie/top_rated?&page=1"
export const UpComing_URL = "https://api.themoviedb.org/3/movie/upcoming?&page=1"
export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500/"

export const options = {
    method: "GET",
    headers: {
        accept: "application/json",
        Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY,
    },
};



export const languageOptions = [{ name: "English", code: "en-US" }, { name: "ಕನ್ನಡ", code: "ka" }, { name: "हिंदी", code: "hi" }];
