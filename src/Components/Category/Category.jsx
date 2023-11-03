import { useParams } from 'react-router-dom';
import i18next from "i18next";
import productData_ru from "../../Database/database_ru.json"
import productData_uk from "../../Database/database_uk.json"
import { ProductCard } from "../ProductCard/ProductCard.jsx"

let currentDatabaseUsed = function(){
  let currentDatabase;
  if(i18next.language === "ru"){
    currentDatabase = productData_ru
  }else if(i18next.language === "uk"){
    currentDatabase = productData_uk
  }
  return currentDatabase
}

export function Category() {
  let currentCategory = useParams().categoryName; 
  return (
    <div className="Category container-lg mt-3">
      <p style={{fontSize: 'min(7vw, 3rem)', fontWeight: '600'}} className="text-center pb-5">{currentCategory}</p>
      <div className="d-flex justify-content-around align-items-start flex-wrap">
        {currentDatabaseUsed().map((product) => {
          if(product.category === currentCategory){
            return(
              <ProductCard key={product.id} id={product.id} image={product.images[0]} name={product.name} price={product.price} description={product.description} />
            )
          }
          return null
        })}
      </div>
    </div>
  );
}