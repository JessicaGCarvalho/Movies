import "./styles.css";
import { Sidebar } from "./components/Sidebar";
import { Movies } from "./components/Movies";

export default function App() {
  return (
    <div className="container">
      <Sidebar />
      <Movies />
    </div>
  );
}
