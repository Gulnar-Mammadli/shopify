import { useShopContext } from "../context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrum from "../components/Breadcrums/Breadcrum";
import ProductDisplay from "../components/ProductDisplay/ProductDisplay";

const Product = () => {
  const { all_product } = useShopContext();
  const { productId } = useParams();

  const product = all_product.find(
    (product) => product.id === Number(productId)
  );

  return (
    <div>
      {product ? (
        <>
          <Breadcrum product={product} />
          <ProductDisplay product={product} />
        </>
      ) : (
        <div> Product not found</div>
      )}
    </div>
  );
};

export default Product;
