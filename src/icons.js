import { HiOutlineHome, HiOutlineHeart, HiHeart, HiOutlineSearch } from 'react-icons/hi';
import { MdOutlineMovieFilter, MdOutlineUpcoming } from 'react-icons/md';
import { FiSettings } from 'react-icons/fi';

export const tabIcons = {
    DISCOVER: <HiOutlineHome style={{ padding: "0px 8px" }} size="2em" />,
    NEW_RELEASES: <MdOutlineMovieFilter style={{ padding: "0px 8px" }} size="2em" />,
    UPCOMING: <MdOutlineUpcoming style={{ padding: "0px 8px" }} size="2em" />,
    FAVORITES: <HiOutlineHeart style={{ padding: "0px 8px" }} size="2em" />,
}

export const searchbarIcons = {
    SEARCH: <HiOutlineSearch style={{ display: "flex" }} size="1.25em" />,
    SETTINGS: <FiSettings size="1.2em" />,
}

export const favoritesIcons = {
    LIKED: <HiHeart size="1.5em" />,
    UNLIKED: <HiOutlineHeart size="1.5em" />,
}