import { useParams } from 'react-router-dom';
import productData from "../../Database/database.json"
import { ProductCard } from "../ProductCard/ProductCard.jsx"

export function Category() {
  let currentCategory = useParams().categoryName; 
  return (
    <div className="Category container-lg">
      <div className="d-flex justify-content-around align-items-start flex-wrap">
        {productData.map((product) => {
          if(product.category === currentCategory){
            return(
              <ProductCard key={product.id} name={product.name} image={product.image} price={product.price} description={product.description} />
            )
          }
        })}
      </div>
    </div>
  );
}