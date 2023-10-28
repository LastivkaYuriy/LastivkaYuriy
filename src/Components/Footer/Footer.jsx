import '../../App.css';

export function Footer() {
  return (
    <footer className="Footer">

      <div className="Footer-top gx-0 w-100">
        <div className="container-lg">
          <div className="row w-100">
            <div className="col-12 col-xl-6 text-start pt-3 px-4">
              <div className="d-flex flex-column align-items-start justify-content-between h-100">
                <div>
                  <h3 className="fw-bold">Заказ грибов</h3>
                  <ul style={{listStyle: 'none', padding: '0px'}}>
                    <li><h4>+380990722565</h4></li>
                    <li><h4>+380990722565</h4></li>
                    <li><h4>+380990722565</h4></li>
                  </ul>
                </div>
                <h5>Также вы можете оставить комментарий к заказу для каждого из товаров.</h5>
              </div>
              
            </div>
  
            <div className="col-12 col-xl-6 text-start pt-3 px-4">
              <h3 className="fw-bold">Наличие мухоморов</h3>
              <h6 className="lh-base">В сентябре начался сбор мухоморов, идеальные погодные условия способствуют активному росту, все желающие могут заказать сушеные мухоморы, сок мухомора (мухомориха), мухоморную мазь, настойку из мухоморов и капсулы для микродозинга. Грибы собраны в самой малонаселённой и экологически чистой части Украинского Полесья — северо-восточной. Заказ оформляется и отправляется Новой или УкрПочтой по указанному вами адресу. Оплата наложенным платежом или на карту. Упаковка бесплатно</h6>
            </div>
          </div>
          <h6 className="lh-base fw-bold text-center p-2 py-3 mb-0">Для обратной связи желательно прямо писать (звонить) по поводу заказа на Вайбер, Телеграм, Ватсап, если имеется или СМС, куда будет скидываться и номер накладной с почты.</h6>
        </div>
      </div>
      <h6 className="text-center mb-0 p-3">Copyright © 2023 — Купить мухоморы сушеные Украина | Мухоморный микродозинг</h6>
    </footer>
  );
}