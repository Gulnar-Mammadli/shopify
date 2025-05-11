import data_product from "../../assets/data";
import Item from "../Item/Item";
import "./Popular.css";

const Popular = () => {
  return (
    <div className="popular">
      <h1>Popular in Women</h1>
      <hr />
      <div className="popular-item">
        {data_product.map((product, i) => (
          <Item
            key={i}
            id={product.id}
            image={product.image}
            name={product.name}
            new_price={product.new_price}
            old_price={product.old_price}
          />
        ))}
      </div>
    </div>
  );
};

export default Popular;
