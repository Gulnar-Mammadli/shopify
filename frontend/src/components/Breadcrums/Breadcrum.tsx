import "./Breadcrum.css";
import arrow_icon from "../../assets/breadcrum_arrow.png";
import type { Product } from "../../context/ShopContext";

type Props = {
  product: Product;
};
function Breadcrum({ product }: Props) {
  return (
    <div className="breadcrum">
      HOME
      <img src={arrow_icon} alt="home" />
      SHOP
      <img src={arrow_icon} alt="shop" />
      {product.category}
      <img src={arrow_icon} alt="name" />
      {product.name}
    </div>
  );
}

export default Breadcrum;
