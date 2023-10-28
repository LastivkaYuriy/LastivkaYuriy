import { useParams } from 'react-router-dom';
import productData from "../../Database/database.json"
import { ProductCard } from "../ProductCard/ProductCard.jsx"

export function Category() {
  let currentCategory = useParams().categoryName; 
  return (
    <div className="Category container-lg">
      <p style={{fontSize: 'min(7vw, 3rem)', fontWeight: '600'}} className="text-center">{currentCategory}</p>
      <div className="d-flex justify-content-around align-items-start flex-wrap">
        {productData.map((product) => {
          if(product.category === currentCategory){
            return(
              <ProductCard key={product.id} image={product.images[0]} name={product.name} price={product.price} description={product.description} />
            )
          }
          return null
        })}
      </div>
    </div>
  );
}