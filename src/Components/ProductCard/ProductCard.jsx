import { Link } from "react-router-dom";

export function ProductCard(props) {
  return (
    <div className="ProductCard card p-1 mb-4">
      <Link to={`/shop/${props.name}`}>
        <div className="card-body">
          <div className="zoom-overlay mb-2">
            <img className="zoom card-img-top img-fluid" src="https://placehold.co/200x200" alt="" />
          </div>
          <h5 className="card-title" >{props.name}</h5>
          <h6 className="card-subtitle mb-2" >{props.price}</h6>
        </div>
        <div className="card-footer d-flex justify-content-center">
          <button className="btn btn-primary btn-sm">add to cart</button>
        </div>
      </Link>
    </div>
  );
}