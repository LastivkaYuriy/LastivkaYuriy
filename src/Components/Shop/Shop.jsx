import productData_ru from "../../Database/database_ru.json"
import productData_uk from "../../Database/database_uk.json"
import { ProductCard } from "../ProductCard/ProductCard.jsx"
import i18next from "i18next";
import { useTranslation } from "react-i18next";

let currentDatabaseUsed = function(){
  let currentDatabase;
  if(i18next.language === "ru"){
    currentDatabase = productData_ru
  }else if(i18next.language === "uk"){
    currentDatabase = productData_uk
  }
  return currentDatabase
}

export function Shop() {
  const { t } = useTranslation();
  return (
    <div className="Shop container-lg mt-3">
      <p style={{fontSize: 'min(10vw, 3rem)', fontWeight: '600'}} className="text-center">{t('catalogue')}</p>
      <div className="d-flex justify-content-around align-items-start flex-wrap">
        {currentDatabaseUsed().map((product) => <ProductCard key={product.id} id={product.id} image={product.images[0]} name={product.name} price={product.price} description={product.description} />)}
      </div>
    </div>
  );
}