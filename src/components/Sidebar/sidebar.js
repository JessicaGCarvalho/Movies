import "./styles.css"
import { LogoBar } from "../Logobar";
import { colors } from "../../assets/colors"
import { TabItem } from "../TabItem";
import { tabs } from "../../helpers"

export function Sidebar({ activeTab, changeTab }) {
  return <div
    className="sidebar-container"
  >
    <LogoBar />
    <TabItem tabName={tabs.DISCOVER} isActive={activeTab == tabs.DISCOVER} onClick={() => changeTab(tabs.DISCOVER)} />
    <TabItem tabName={tabs.NEW_RELEASES} isActive={activeTab == tabs.NEW_RELEASES} onClick={() => changeTab(tabs.NEW_RELEASES)} />
    <TabItem tabName={tabs.FAVORITES} isActive={activeTab == tabs.FAVORITES} onClick={() => changeTab(tabs.FAVORITES)} />
  </div>;
}