import "./styles.css"
import { LogoBar } from "../Logobar";
import { TabItem } from "../TabItem";
import { tabs } from "../../helpers";
import { tabIcons } from "../../icons";

export function Sidebar({ activeTab, changeTab }) {
  return (
    <div
      className="sidebar-container"
    >
      <LogoBar />
      <TabItem tabIcon={tabIcons.DISCOVER} tabName={tabs.DISCOVER} isActive={activeTab === tabs.DISCOVER} onTabClick={() => changeTab(tabs.DISCOVER)} />
      <TabItem tabIcon={tabIcons.NEW_RELEASES} tabName={tabs.NEW_RELEASES} isActive={activeTab === tabs.NEW_RELEASES} onTabClick={() => changeTab(tabs.NEW_RELEASES)} />
      <TabItem tabIcon={tabIcons.UPCOMING} tabName={tabs.UPCOMING} isActive={activeTab === tabs.UPCOMING} onTabClick={() => changeTab(tabs.UPCOMING)} />
      <TabItem tabIcon={tabIcons.FAVORITES} tabName={tabs.FAVORITES} isActive={activeTab === tabs.FAVORITES} onTabClick={() => changeTab(tabs.FAVORITES)} />
    </div>
  );
}
