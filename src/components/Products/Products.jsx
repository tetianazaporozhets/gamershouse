import "./Products.css";
import Product from "../Product/Product";
import ButtonLoad from "../ButtonLoad/ButtonLoad";

const Products = ({ products = [] }) => {
  return (
    <div>
      <h2 className="subtitle">Hot new items</h2>
      <div className="products">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
      <ButtonLoad />
    </div>
  );
};

export default Products;
