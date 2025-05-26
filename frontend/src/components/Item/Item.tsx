import { Link } from "react-router-dom";
import "./Item.css";

type Props = {
  id: number;
  image: string;
  name: string;
  new_price: number;
  old_price: number;
};

const Item = (props: Props) => {
  return (
    <div className="item">
      <Link to={`/products/${props.id}`}>
        <img src={props.image} alt="Item image " />
      </Link>
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-price-new">${props.new_price}</div>
        <div className="item-price-old">${props.old_price}</div>
      </div>
    </div>
  );
};

export default Item;
