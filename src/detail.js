import React from 'react';
import {render} from 'react-dom';

import Detail from './Detail.jsx';

render(
  <Detail />,
  document.getElementById('favs')
);

var mySwiper = new Swiper ('.swiper-container', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})