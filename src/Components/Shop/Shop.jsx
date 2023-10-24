import productData from "../../Database/database.json"
import { ProductCard } from "../ProductCard/ProductCard.jsx"

export function Shop() {
  return (
    <div className="Shop container-lg">
      <p>Shop</p>
      <div className="d-flex justify-content-around align-items-start flex-wrap">
        {productData.map((product) => <ProductCard key={product.id} id={product.id} name={product.name} image={product.image} price={product.price} description={product.description} />)}
      </div>
    </div>
  );
}