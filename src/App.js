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
      <Navbar categories={categories} />
      <div className="container-lg p-2">
        <p style={{fontSize: 'min(4vw, 1.5rem)', fontWeight: '600'}} className="text-center">Отправка заказов каждый день в порядке очереди. Время отправки заказа Новая Почта 1-3 дня. Укрпочта до 5 дней. Спасибо за понимание.</p>
      </div>
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
