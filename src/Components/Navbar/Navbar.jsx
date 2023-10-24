import { Link } from "react-router-dom";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import '../../App.css';

export function Navbar(props) {
  const { t } = useTranslation();
  return (
    <nav className="Navbar navbar pt-0 pb-0 ">

      <div className="top-row container-lg d-flex flex-wrap p-2 justify-content-around align-items-center">
        <a href="/"><img className="img-fluid" src="https://placehold.co/200x200" alt="" /></a>
          <div className="contacts d-flex p-2 justify-content-around" style={{minWidth: '50%'}}>
            <div style={{marginRight: '10px'}}>
              <p>{t('contact_us')}</p>
              <ul style={{listStyle: 'none'}} className="m-0 p-0">
                <li>+380995556611</li>
                <li>+380995556611</li>
                <li>+380995556611</li>
              </ul>
            </div>
            <div>
              <p>{t('write_us')}</p>
              <ul style={{listStyle: 'none'}} className="m-0 p-0">
                <li>test@test.tg</li>
                <li>test@test.tg</li>
                <li>test@test.tg</li>
              </ul>
            </div>
          </div>
          <div className="btn-group">
            <button style={{width: '75px', height: '31px', fontWeight: '500' }} className="btn btn-primary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              {t('language_settings')}
            </button>
            <ul style={{minWidth: '100px'}} className="dropdown-menu">
              <div className="d-flex justify-content-around">
                <li><button className="btn btn-dark btn-sm" onClick={() => i18next.changeLanguage("uk")}>uk</button></li>
                <li><button className="btn btn-dark btn-sm" onClick={() => i18next.changeLanguage("ru")}>ru</button></li>
              </div>
            </ul>
          </div>
      </div>
    
      <div className="bot-row container-lg">
        <ul style={{listStyle: 'none'}} className="w-100 p-2 m-0 d-flex flex-wrap justify-content-around align-items-center">
          <li className="navbar-link"><Link to={"/"}>main</Link></li>
          <li className="navbar-link"><Link to={"/shop"}>all shop</Link></li>
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

