import "./styles.css"
import { LogoBar } from "../Logobar";
import { colors } from "../../assets/colors"
import { TabItem } from "../TabItem";

export function Sidebar() {
  return <div
    className="sidebar-container"
    style={{ backgroundColor: colors.backgroundSecondary }}
  >
    <LogoBar />
    <TabItem tabName="Discover" isActive />
    <TabItem tabName="New Releases" isActive={false} />
    <TabItem tabName="Favorites" isActive={false} />
  </div>;
}