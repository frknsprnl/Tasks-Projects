const API_KEY = "d51859d6";

// Fetch API
getData = (searchValue) => {
  fetch(`http://www.omdbapi.com/?s=${searchValue}&apikey=${API_KEY}`)
  .then(response => {
    return response.json();
  })
  .then(data => {
    swiperFunc(data.Search);
  })
}
// adds swiper and swiper contents
const swiperFunc = (info) => {
  resetSliders();
  
  for( let data of info) {
    if (data.Poster != "N/A") {
      const swiperWrapperDOM = document.querySelector('.swiper-wrapper');
      const swiperSliderDOM = document.createElement('div');
      swiperSliderDOM.classList.add("swiper-slide");
      swiperSliderDOM.innerHTML = `<img src="${data.Poster}" alt="">`; 
      swiperWrapperDOM.append(swiperSliderDOM);
    }
  }
  console.log("Hey! Movies without posters doesn't show on website.");
  console.log("You can check the api result here for more: ");
  console.log(info);
  
}

// error messages
const emptyErr = "Input field cannot be empty. <br> There must be at least 3 characters.";
const apiErr = "Wrong movie/series information.";

// search 
const inputDOM = document.querySelector("#search");

inputDOM.addEventListener('keydown', function(e) {
  
  if (e.key == "Enter") {

    if (inputDOM.value && /^([0-9]*[a-zA-Z]){3,}[0-9]*$/.test(inputDOM.value)) {
      getData(inputDOM.value);
      inputDOM.value = "";
    } else {
      showAlert(emptyErr);
    }
  }
})

// removes all sliders in the wrapper 
const resetSliders = () => {
  const SlideDOM = document.querySelector('.swiper-wrapper');
  SlideDOM.innerHTML = "";
}

const showAlert = (message) => {
  let modelWrap = null;

  if (modelWrap != null) {
      modelWrap.remove();
  }

  modelWrap = document.createElement('div');
  modelWrap.innerHTML = `
  <div class="modal" tabindex="-1">
      <div class="modal-dialog modal-dialog-centered modal-sm">
          <div class="modal-content">
              <div class="modal-header bg-danger text-white fw-bold">
                  <p>Error</p>
              </div>
              <div class="modal-body">
                  <p class="text-center py-2">${message}</p>
              </div>
          </div>
      </div>
  </div>`;
  document.body.append(modelWrap);

  let modal = new bootstrap.Modal(modelWrap.querySelector('.modal'));
  modal.show();
}