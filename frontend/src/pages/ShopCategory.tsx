import "./css/ShopCategory.css";
import dropdown_icon from "../assets/dropdown_icon.png";
import Item from "../components/Item/Item";
import type { Product } from "../context/ShopContext";
import { useShopContext } from "../context/ShopContext";

type Props = {
  banner: string;
  category: string;
};

const ShopCategory = ({ banner, category }: Props) => {
  const { all_product } = useShopContext();

  return (
    <div className="shop-category">
      <img className="shopcategory-banner" src={banner} alt={banner} />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="Dropdown Icon" />
        </div>
      </div>
      <div className="shopcategory-products">
        {all_product &&
          all_product.map((product: Product, i: number) => {
            if (category === product.category) {
              return (
                <Item
                  key={i}
                  id={product.id}
                  image={product.image}
                  name={product.name}
                  new_price={product.new_price}
                  old_price={product.old_price}
                />
              );
            } else {
              return null;
            }
          })}
      </div>
      <div className="shopcategory-loadmore">Explore More</div>
    </div>
  );
};

export default ShopCategory;
