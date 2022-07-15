const API_KEY = "d51859d6";
const TITLE = "Marvel";
const API_URL = `http://www.omdbapi.com/?s=${TITLE}&apikey=${API_KEY}`;

fetch(API_URL)
.then(response => {
  return response.json();
})
.then(data => {
  swiperFunc(data.Search);
})

const swiperFunc = (info) => {
  const swiperDOM = document.querySelector(".swiper");
  const swiperHeaderDOM = document.createElement('h4');
  swiperHeaderDOM.classList.add("swiper-header");
  swiperHeaderDOM.innerHTML = `${TITLE}`;
  swiperDOM.append(swiperHeaderDOM);
  
  for( let data of info) {
    const swiperWrapperDOM = document.querySelector('.swiper-wrapper');
    const swiperSliderDOM = document.createElement('div');
    swiperSliderDOM.classList.add("swiper-slide");
    swiperSliderDOM.innerHTML = `<img src="${data.Poster}" alt="">`; 
    swiperWrapperDOM.append(swiperSliderDOM);
  }

  console.log(info);
}
