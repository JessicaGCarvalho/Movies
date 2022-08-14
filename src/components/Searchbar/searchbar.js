import "./styles.css";
import { colors } from "../../assets/colors";

const SEARCH_ICON_URL =
  "https://www.freeiconspng.com/thumbs/search-icon-png/search-icon-png-21.png";
const SETTINGS_ICON_URL =
  "https://icon-library.com/images/white-settings-icon/white-settings-icon-2.jpg";
const USER_ICON_URL =
  "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F13%2F2015%2F04%2F05%2Ffeatured.jpg&q=60";

export function Searchbar({ setCurrentSearch }) {
  return (
    <div
      style={{ backgroundColor: colors.secondary }}
      className="searchbar-container"
    >
      <img src={SEARCH_ICON_URL} />
      <input
        style={{ color: colors.textColor }}
        placeholder="Search..."
        onChange={(event) => setCurrentSearch(event.target.value)}
      />
      <img className="settings-icon" src={SETTINGS_ICON_URL} />
      <img className="user-icon" src={USER_ICON_URL} />
    </div>
  );
}
