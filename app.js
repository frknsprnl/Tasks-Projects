const URL = "https://api.openweathermap.org/data/2.5/";
const KEY = "d205490112f73b175082ffa7b053cc07";

const getLocation = () => {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError)
    }
}

getLocation();

function showPosition(position) {
    const geoURL = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${KEY}`
    fetch(geoURL)
    .then(weather => {
        return weather.json();
    })
    .then(info => {
        getResult(info.name)
    })
}
  
function showError(error) {
    switch(error.code) {
      case error.PERMISSION_DENIED:
        x.innerHTML = "User denied the request for Geolocation."
        break;
      case error.POSITION_UNAVAILABLE:
        x.innerHTML = "Location information is unavailable."
        break;
      case error.TIMEOUT:
        x.innerHTML = "The request to get user location timed out."
        break;
      case error.UNKNOWN_ERROR:
        x.innerHTML = "An unknown error occurred."
        break;
    }
}

const setQuery = (e) => {
    if( e.key == "Enter") {
        getResult(searchBarDOM.value);
        searchBarDOM.value = "";
    }
}
    
const getResult = (cityName) => {
    console.log(cityName);
    let query = `${URL}weather?q=${cityName}&appid=${KEY}&units=metric`;
    fetch(query)
    .then(weather => {
        return weather.json();
    })
    .then(displayResult)
    .catch(showAlert);
}

const showAlert = () => {
    let modelWrap = null;

    if (modelWrap != null) {
        modelWrap.remove();
    }

    modelWrap = document.createElement('div');
    modelWrap.innerHTML = `
    <div class="modal" tabindex="-1">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-body">
                    <p class="text-center py-3">Wrong city information.</p>
                </div>
            </div>
        </div>
    </div>`;
    document.body.append(modelWrap);

    let modal = new bootstrap.Modal(modelWrap.querySelector('.modal'));
    modal.show();
}

const displayResult = (result) => {
    console.log(result);
    
    const bodyDOM = document.querySelector("body");
    try {
        bodyDOM.style.backgroundImage = `url(./assets/${result.weather[0].main}.jpg)`;
    } catch (error) {
        if (!bodyDOM.style.backgroundImage)
        bodyDOM.style.backgroundImage = `url(./assets/default.jpg)`;
    }   

    const cityNameDOM = document.querySelector(".city");
    const tempDOM = document.querySelector(".temp");
    const descDOM = document.querySelector(".desc");
    const minMaxDOM = document.querySelector(".minMax");

    const imgURL = `http://openweathermap.org/img/wn/${result.weather[0].icon}@2x.png`
    const imgDescDOM = document.querySelector(".desc-img");

    cityNameDOM.innerHTML = `${result.name}, ${result.sys.country}`;
    tempDOM.innerHTML = `${Math.round(result.main.temp)}°C`;

    imgDescDOM.src = `${imgURL}`;
    
    let desc = `${result.weather[0].description}`;
    descDOM.innerHTML = `${desc.charAt(0).toUpperCase() + desc.slice(1)}`;

    minMaxDOM.innerHTML = `Min: ${Math.round(result.main.temp_min)} / Max: ${Math.round(result.main.temp_max)}`;
}
const searchBarDOM = document.querySelector("#cityInput");
searchBarDOM.addEventListener('keypress', setQuery);

