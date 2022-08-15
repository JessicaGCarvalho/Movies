import "./styles.css";
import { colors } from "../../assets/colors";

const LOGO_URL = "https://cdn-icons-png.flaticon.com/512/31/31087.png";

export function LogoBar() {
  return (
    <div
      className="logobar-container"
    >
      <img src={LOGO_URL} className="logo"></img>
      <div>MEDIA HD</div>
    </div>
  );
}
