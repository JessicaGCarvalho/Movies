import "./styles.css";

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
// Props deconstruction if you have curly braces
export function TabItem({ tabName, isActive, onTabClick }) {
    return (
        <div className={`tab-name ${isActive ? "active" : ""}`} onClick={onTabClick}>{tabName}</div>
    );
}