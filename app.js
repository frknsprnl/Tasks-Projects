const API_KEY = "d51859d6";

// Fetch API
getData = (searchValue) => {
  fetch(`http://www.omdbapi.com/?s=${searchValue}&apikey=${API_KEY}`)
  .then(response => {
    return response.json();
  })
  .then(data => {
    try {
      swiperFunc(data.Search);
    } catch (error) {
      showAlert(apiErr);
    }
  })
}

// adds swiper and swiper contents
const swiperFunc = (info) => {
  const swiperWrapperDOM = document.querySelector('.swiper-wrapper');
  resetSliders();
  
  for( let data of info) {
    if (data.Poster != "N/A") {
      const swiperSliderDOM = document.createElement('div');
      swiperSliderDOM.classList.add("swiper-slide");
      swiperSliderDOM.innerHTML = `<img class="slider-img" src="${data.Poster}" alt="">`;
      swiperSliderDOM.addEventListener('click', function(){
        showInfo(`${data.Title}`,`${data.Type}`,`${data.Year}`);
      })
      swiperWrapperDOM.append(swiperSliderDOM);
    }
  }
  if (swiperWrapperDOM.childNodes.length == 0) {
    showAlert(apiErr);
  }
  console.log("You can check the api result here for more: ");
  console.log(info);
  
}



// error messages
const emptyErr = "Input field cannot be empty. <br> There must be at least 3 characters.";
const apiErr = "Sorry, we didn't find this in our database.";

// search 
const inputDOM = document.querySelector("#search");

// for converting turkish characters to english characters like ş to s or ö to o || realtime
inputDOM.addEventListener('keyup', function() {
  var charMap = {
    Ç: 'C',
    Ö: 'O',
    Ş: 'S',
    İ: 'I',
    I: 'i',
    Ü: 'U',
    Ğ: 'G',
    ç: 'c',
    ö: 'o',
    ş: 's',
    ı: 'i',
    ü: 'u',
    ğ: 'g'
  };

  var str = inputDOM.value;

  str_array = str.split('');

  for (var i = 0, len = str_array.length; i < len; i++) {
    str_array[i] = charMap[str_array[i]] || str_array[i];
  }

  str = str_array.join('');

  var clearStr = str.replace(/[çöşüğı]/gi, "");

  inputDOM.value = clearStr;
});

inputDOM.addEventListener('keydown', function(e) {
  
  if (e.key == "Enter") {

    if (inputDOM.value && /\d*(?:[a-zA-Z]||[0,9]){3,}\d*/.test(inputDOM.value)) {
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
              <div class="modal-header bg-danger text-white fw-semibold">
                  <p>E r r o r !</p>
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

const showInfo = (title, type, year) => {
  let modelWrap = null;

  if (modelWrap != null) {
      modelWrap.remove();
  }

  modelWrap = document.createElement('div');
  modelWrap.innerHTML = `
  <div class="modal" tabindex="-1">
      <div class="modal-dialog modal-dialog-centered modal-md">
          <div class="modal-content">
              <div class="modal-header bg-success text-white fw-semibold">
                  <p>${title}</p>
              </div>
              <div class="modal-body">
                  <p class="text-center py-2">Type: ${type} <br> Year: ${year}</p>
              </div>
          </div>
      </div>
  </div>`;
  document.body.append(modelWrap);

  let modal = new bootstrap.Modal(modelWrap.querySelector('.modal'));
  modal.show();
}