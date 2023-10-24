import { useParams } from 'react-router-dom';
import '../../App.css';

export function ProductPage() {

  function getHeight(){
    let activeNext = document.getElementsByClassName('carousel-item-next')[0];
    let activePrev = document.getElementsByClassName('carousel-item-prev')[0];
    let carousel = document.getElementById('carouselIndicators');
    if(!activeNext){
      carousel.style.transition = 'max-height 0.5s ease-in-out'
      carousel.style.maxHeight = activePrev.clientHeight + 'px'
    }else{
      carousel.style.transition = 'max-height 0.5s ease-in-out'
      carousel.style.maxHeight = activeNext.clientHeight + 'px'
    }
    
  }

  let currentProduct = useParams().productName; 
  return (
    <div className="ProductPage container-lg py-2">
      <div id="carouselIndicators" className="carousel slide float-left" style={{maxWidth:'500px', overflow: 'hidden'}}>
        <div className="carousel-indicators">
          <button onClick={() => getHeight()} type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button onClick={() => getHeight()} type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button onClick={() => getHeight()} type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://muxomor.top/wp-content/uploads/2021/01/photo_2021-01-08_00-18-02.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://muxomor.top/wp-content/uploads/2021/03/img_20210204_210453.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://muxomor.top/wp-content/uploads/2021/01/photo_2021-02-05_14-03-10.jpg" className="d-block w-100" alt="..." />
          </div>
        </div>
        <button onClick={() => getHeight()} className="carousel-control-prev" type="button" data-bs-target="#carouselIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>
        <button onClick={() => getHeight()} className="carousel-control-next" type="button" data-bs-target="#carouselIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
      </div>
      <div>
        <p>{currentProduct}</p>
      </div>
      
    </div>
  );
}