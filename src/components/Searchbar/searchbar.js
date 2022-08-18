import "./styles.css";
import { FiSettings } from 'react-icons/fi';
import { HiOutlineSearch } from 'react-icons/hi';

const USER_ICON_URL =
  "https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg";

export function Searchbar({ setCurrentSearch }) {
  return (
    <div
      className="searchbar-container"
    >
      <HiOutlineSearch className="search-icon" size="1.25em" />
      <input
        placeholder="Search..."
        onChange={(event) => setCurrentSearch(event.target.value)}
      />
      <div className="settings-icon">
        <FiSettings size="1.2em" />
      </div>
      <img className="user-icon" src={USER_ICON_URL} />
    </div>
  );
}
