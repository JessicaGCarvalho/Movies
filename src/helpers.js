import axios from "axios";
import { API_KEY } from "./secrets";

export const tabs = {
    DISCOVER: 'Discover',
    NEW_RELEASES: 'New Releases',
    UPCOMING: 'Upcoming',
    FAVORITES: 'Favorites',
}

const WONDER_WOMAN_POSTER_URL =
    "https://i.ebayimg.com/images/g/k70AAOSwRYpZij1X/s-l500.jpg";
const AVENGERS_POSTER_URL =
    "https://static.displate.com/857x1200/displate/2021-01-28/50c288197a62a2386ee9ee41f315f352_982fad6a978f26b986ed8f3f733dd843.jpg";
const BATMAN_POSTER_URL =
    "https://i0.wp.com/batman-news.com/wp-content/uploads/2022/01/The-Batman-2022-Movie-Poster-01.jpeg?fit=2764%2C4096&quality=80&strip=info&ssl=1";

export const favoritesMockData = [
    {
        title: "Wonder Woman",
        rating: 4,
        posterUrl: BATMAN_POSTER_URL,
        movieLength: 92,
    },
    {
        title: "Dr. Strange",
        rating: 5,
        posterUrl: BATMAN_POSTER_URL,
        movieLength: 101,
    },
    {
        title: "The Avengers",
        rating: 1,
        posterUrl: BATMAN_POSTER_URL,
        movieLength: 120,
    },
    {
        title: "Batman",
        rating: 5,
        posterUrl: BATMAN_POSTER_URL,
        movieLength: 10,
    },
]


const formatDate = (dateObject) => {
    const mm = String(dateObject.getMonth() + 1).padStart(2, '0'); //January is 0
    const dd = String(dateObject.getDate()).padStart(2, '0');
    const yyyy = String(dateObject.getFullYear());
    return `${yyyy}-${mm}-${dd}`;
}

export const getNewReleasesDate = () => {
    const currDate = new Date()
    currDate.setMonth(currDate.getMonth() - 1);
    return formatDate(currDate);
}

export const today = formatDate(new Date());

export const getMovieData = async (releaseDate) => {
    let baseUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`
    if (releaseDate) baseUrl += `&primary_release_date.gte=${releaseDate}`
    try {
        const response = await axios.get(baseUrl)
        return response.data;
    } catch {
        return [];
    }
}
