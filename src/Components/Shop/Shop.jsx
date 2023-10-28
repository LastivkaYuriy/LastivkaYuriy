import productData from "../../Database/database.json"
import { ProductCard } from "../ProductCard/ProductCard.jsx"

export function Shop() {
  return (
    <div className="Shop container-lg">
      <p style={{fontSize: 'min(7vw, 3rem)', fontWeight: '600'}} className="text-center">Каталог товаров</p>
      <div className="d-flex justify-content-around align-items-start flex-wrap">
        {productData.map((product) => <ProductCard key={product.id} image={product.images[0]} name={product.name} price={product.price} description={product.description} />)}
      </div>
    </div>
  );
}