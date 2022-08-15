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
    <TabItem tabName={tabs.DISCOVER} isActive={activeTab == tabs.DISCOVER} onTabClick={() => changeTab(tabs.DISCOVER)} />
    <TabItem tabName={tabs.NEW_RELEASES} isActive={activeTab == tabs.NEW_RELEASES} onTabClick={() => changeTab(tabs.NEW_RELEASES)} />
    <TabItem tabName={tabs.UPCOMING} isActive={activeTab == tabs.UPCOMING} onTabClick={() => changeTab(tabs.UPCOMING)} />
    <TabItem tabName={tabs.FAVORITES} isActive={activeTab == tabs.FAVORITES} onTabClick={() => changeTab(tabs.FAVORITES)} />
  </div>;
}