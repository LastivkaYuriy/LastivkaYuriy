import { createBrowserRouter } from "react-router-dom";

import App from './App.js';
import { Shop } from './Components/Shop/Shop.jsx'
import { Content } from './Components/Content/Content.jsx'
import { Category } from './Components/Category/Category.jsx'
import { ProductPage } from './Components/ProductPage/ProductPage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Content />
      },
      {
        path: "shop",
        element: <Shop />
      },
      {
        path: "product-category/:categoryName",
        element: <Category />
      },
      {
        path: "shop/:productName",
        element: <ProductPage />
      }
    ]
  }
]);

export default router;