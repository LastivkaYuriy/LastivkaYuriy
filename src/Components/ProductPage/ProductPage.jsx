import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import productData from "../../Database/database.json"
import '../../App.css';

export function ProductPage() {

  function getHeight(){
    let activeNext = document.getElementsByClassName('carousel-item-next')[0];
    let activePrev = document.getElementsByClassName('carousel-item-prev')[0];
    let carousel = document.getElementById('carouselIndicators');
    if(activePrev){
      carousel.style.transition = 'max-height 0.5s ease-in-out'
      carousel.style.maxHeight = activePrev.clientHeight + 'px'
    }else if(activeNext){
      carousel.style.transition = 'max-height 0.5s ease-in-out'
      carousel.style.maxHeight = activeNext.clientHeight + 'px'
    }
  }

  let currentProduct = useParams().productName; 
  function getCurrentProductData(){
    for(let product of productData){
      if(product.name === currentProduct){
        return product;
      }
    }
  }

  function keyCheck(key){
    if(key === 0){
      return 'active'
    }
  }
  let imageMap = getCurrentProductData().images.map((image, key) => {
    return(
      <div key={key} className={`carousel-item ${keyCheck(key)}`}>
        <img src={`/assets/images/${image}`} className="d-block w-100" alt="..." />
      </div>
    )
  })

  return (
    <div className="ProductPage container-lg pb-3 ">
      <div className="clearfix pt-3">
        <div className="float-start carousel-block-wrap">
          <div id="carouselIndicators" className="carousel-block carousel carousel-dark slide p-0 px-md-3 w-100" style={{overflow: 'hidden'}} data-bs-touch="false">
            <div className="carousel-inner">
              {imageMap}
            </div>
            <button onClick={() => getHeight()} className="carousel-control-prev" type="button" data-bs-target="#carouselIndicators" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            </button>
            <button onClick={() => getHeight()} className="carousel-control-next" type="button" data-bs-target="#carouselIndicators" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
            </button>
          </div>
        </div>
        <div className="mt-1 mb-4 mt-sm-0">
          <h1>{getCurrentProductData().name}</h1>
          <h5 className="price-text">{getCurrentProductData().price}</h5>
        </div>
        <h6 className="lh-base">{getCurrentProductData().description}</h6>
        <h6 className="smalest-text mt-5">Категория: <Link className="smalest-text navbar-link">{getCurrentProductData().category}</Link></h6>
      </div>
      <div className="p-3 mt-5">
        <h2 className="mb-3">{getCurrentProductData().addText[0].heading}</h2>
        <h5 className="lh-base">{getCurrentProductData().addText[0].text}</h5>
      </div>
    </div>
  );
}