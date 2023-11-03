import '../../App.css';
import { useTranslation } from "react-i18next";

export function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="Footer">

      <div className="Footer-top gx-0 w-100">
        <div className="container-lg">
          <div className="row w-100">
            <div className="col-12 col-xl-6 text-start pt-3 px-4">
              <div className="d-flex flex-column align-items-start justify-content-between h-100">
                <div>
                  <h3 className="fw-bold">{t('order')}</h3>
                  <ul style={{listStyle: 'none', padding: '0px'}}>
                    <li><h4>+380990722565</h4></li>
                    <li><h4>+380990722565</h4></li>
                    <li><h4>+380990722565</h4></li>
                  </ul>
                </div>
                <h5>{t('order_text')}</h5>
              </div>
              
            </div>
  
            <div className="col-12 col-xl-6 text-start pt-3 px-4">
              <h3 className="fw-bold">{t('availability')}</h3>
              <h6 className="lh-base">{t('availability_text')}</h6>
            </div>
          </div>
          <h6 className="lh-base fw-bold text-center p-2 py-3 mb-0">{t('footer_bottom_text')}</h6>
        </div>
      </div>
      <h6 className="text-center mb-0 p-3">{t('copy')}</h6>
    </footer>
  );
}