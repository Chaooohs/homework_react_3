import "./Item.css";

const Item = (props) => {
  const classes = "item " + props.className;
  return <div className={classes}>{props.children}</div>;
};

export default Item;
