import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/js/bootstrap.min.js"
import { RouterProvider } from "react-router-dom";
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

import './index.css';
import router from "./router.js"

i18next
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ['uk', 'ru'],
    fallbackLng: 'uk',
    debug: false,
    detecion: {
      order: ['cookie', 'htmlTag'],
      caches: ['cookie']
    },
    backend: {
      loadPath: './assets/locales/{{lng}}/translation.json'
    },
    react: {useSuspence: false},
  });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);
