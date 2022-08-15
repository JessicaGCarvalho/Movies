import "./styles.css";
import { colors } from "../../assets/colors";

const SEARCH_ICON_URL =
  "https://www.freeiconspng.com/thumbs/search-icon-png/search-icon-png-21.png";
const SETTINGS_ICON_URL =
  "https://icon-library.com/images/white-settings-icon/white-settings-icon-2.jpg";
const USER_ICON_URL =
  "https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg";

export function Searchbar({ setCurrentSearch }) {
  return (
    <div
      className="searchbar-container"
    >
      <img src={SEARCH_ICON_URL} />
      <input
        placeholder="Search..."
        onChange={(event) => setCurrentSearch(event.target.value)}
      />
      <img className="settings-icon" src={SETTINGS_ICON_URL} />
      <img className="user-icon" src={USER_ICON_URL} />
    </div>
  );
}
