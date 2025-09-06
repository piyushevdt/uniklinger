import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';
import "./assets/css/style.css";
import 'react-fancy-circular-carousel/FancyCarousel.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
