import { Shop } from '../Shop/Shop.jsx'
import { useTranslation } from "react-i18next";

export function Content() {
  const { t } = useTranslation();
  return (
    <div className="Content">
      <section className="content-header px-4 py-5" style={{backgroundImage: 'url(/assets/images/e4805e57-794c-4d88-b893-c7ac42f604ac.jpeg)'}}>
        <div className="header-text p-3 container-lg" >
          <h2 className="text-center fw-bold">{t('content_header')}</h2>
          <div>
            <p>{t('content_header_text_one')}</p>
            <p>{t('content_header_text_two')}</p>
          </div>
        </div>
      </section>
      <section className="container-fluid px-4 py-5">
        <div className="container-lg p-4" style={{backgroundColor: 'var(--fourth-color)', color: 'var(--main-color)'}}>
          <div className="w-100 d-flex flex-column justify-content-center">
            <h3 className="py-3 fw-bold">{t('content_why_header')}</h3>
            <div className="w-100">
              <h5 className="mb-4">{t('content_why_text_one')}</h5>
              <h5>{t('content_why_text_two')}</h5>
            </div>
          </div>
        </div>
      </section>
      <Shop />
    </div>
  );
}