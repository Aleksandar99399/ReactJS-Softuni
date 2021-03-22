import "./MenuItem.css";

const MenuItem = ({ id, onClick, children, isSelected }) => {
  let classes = ["menu-item"];

  if (isSelected) {
    classes.push("menu-item-selected");
  }
  console.log(classes);
  return (
    <li className={classes.join(" ")}>
      <a href="#" onClick={() => onClick(id)}>
        {children}
      </a>
    </li>
  );
};

export default MenuItem;
