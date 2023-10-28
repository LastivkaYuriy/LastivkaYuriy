import { Outlet } from "react-router-dom";
import {Navbar} from './Components/Navbar/Navbar.jsx'
import {Footer} from './Components/Footer/Footer.jsx'

import './App.css';
import productData from "./Database/database.json"

let createCategories = (allProducts) => {
  let categories = [];
  for (const product of allProducts) {
    if (!categories.includes(product.category)) {
      categories.push(product.category);
    }
  }
  return categories
}

function App() {
  let categories = createCategories(productData);
  return (
    <div className="App">
      <div>
        <Navbar categories={categories} />
        <div className="container-lg p-3" style={{borderBottom: '1px solid var(--second-color)'}}>
          <p style={{fontSize: 'min(4vw, 1.5rem)', fontWeight: '600'}} className="text-center pb-2 mb-0">Отправка заказов каждый день в порядке очереди. Время отправки заказа Новая Почта 1-3 дня. Укрпочта до 5 дней. Спасибо за понимание.</p>
        </div>
      </div>
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
