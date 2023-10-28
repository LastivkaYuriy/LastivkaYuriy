import { Link } from "react-router-dom";

export function ProductCard(props) {
  return (
    <div className="ProductCard card mb-4 border-2">
      <div className="card-body p-0">
        <Link to={`/shop/${props.name}`} className="d-flex" style={{height: "100%"}}>
          <div className="zoom-overlay w-100 h-100 rounded-top">
            <div className="zoom" style={{background: `no-repeat url(/assets/images/${props.image})`, backgroundPosition: 'center', backgroundSize: 'cover', height: '100%', width: '100%'}}>
              
            </div>
          </div>
        </Link>
      </div>
      <Link to={`/shop/${props.name}`}>
        <div className="card-footer d-flex flex-column justify-content-between align-items-start" style={{minHeight: '100px'}}>
          <h5 className="card-title fw-bold" >{props.name}</h5>
          <h6 className="card-subtitle mb-2" >{props.price}</h6>
        </div>
      </Link>
    </div>
  );
}