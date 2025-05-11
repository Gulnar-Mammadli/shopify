import "./Item.css";

type Props = {
  image: string;
  name: string;
  new_price: number;
  old_price: number;
};

const Item = (props: Props) => {
  return (
    <div className="item">
      <img src={props.image} alt="Item image " />
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-price-new">${props.new_price}</div>
        <div className="item-price-old">${props.old_price}</div>
      </div>
    </div>
  );
};

export default Item;
