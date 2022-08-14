import "./styles.css";
import { useState } from "react";
import { Sidebar } from "./components/Sidebar";
import { Movies } from "./components/Movies";
import { tabs } from "./helpers";

export default function App() {
  const [activeTab, setActiveTab] = useState(tabs.DISCOVER)

  const changeTab = (tab) => {
    setActiveTab(tab)
  }
  
  return (
    <div className="container">
      <Sidebar activeTab={activeTab} changeTab={changeTab} />
      <Movies activeTab={activeTab} />
    </div>
  );
}
