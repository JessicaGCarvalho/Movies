import "./styles.css";
import { tabs } from "../../helpers";

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
// Props deconstruction if you have curly braces
export function TabItem({ tabIcon, tabName, isActive, onTabClick }) {
    return (
        <div className={`tab-container ${isActive ? "active" : ""}`} onClick={onTabClick}>
            {tabIcon}{tabName}
        </div >
    );
}