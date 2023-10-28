import { Link } from "react-router-dom";
import i18next from "i18next";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { useTranslation } from "react-i18next";
import '../../App.css';

export function Navbar(props) {
  const { t } = useTranslation();
  return (
    <nav className="Navbar navbar pt-0 pb-0">

      <div className="container-lg d-flex flex-wrap p-2 justify-content-around align-items-center">
        <a href="/"><img className="img-fluid" style={{maxHeight: '100px'}} src="/assets/images/LOGO-tp.png" alt="" /></a>
        <ul style={{listStyle: 'none'}} className="m-0 d-flex flex-wrap justify-content-around align-items-center">
          <li className="navbar-link-top"><Link to={"/"}>main</Link></li>
          <li className="navbar-link-top"><Link to={"/shop"}>all shop</Link></li>
        </ul>
        <div className="btn-group">
          <button style={{width: '75px', height: '31px', fontWeight: '500' }} className="btn btn-primary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            {t('language_settings')}
          </button>
          <ul style={{minWidth: '100px'}} className="dropdown-menu">
            <div className="d-flex justify-content-around">
              <li><button onClick={() => i18next.changeLanguage("uk")}><span className="fi fi-ua"></span></button></li>
              <li><button onClick={() => i18next.changeLanguage("ru")}><span className="fi fi-ru"></span></button></li>
            </div>
          </ul>
        </div>
      </div>
      <div className="container-fluid w-100 d-flex justify-content-center">
      <ul style={{listStyle: 'none', borderTop: '1px solid #1a22344d'}} className="w-100 p-2 px-md-5 px-0 m-0 d-flex flex-wrap justify-content-evenly align-items-center">
        {props.categories.map((category) => {
            return(
              <li key={category} className="navbar-link"><Link to={`/product-category/${category}`}>{category}</Link></li>
            )
          })}
      </ul>
        
      </div>
    </nav>
  );
}

