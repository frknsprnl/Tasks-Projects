import axios from "axios";

const getToday = () => {
  const date = new Date();
  let dd = String(date.getDate()).padStart(2, "0");
  let mm = String(date.getMonth() + 1).padStart(2, "0");
  let yy = date.getFullYear();

  return `${yy}-${mm}-${dd}`;
};

const getSevenDaysLater = () => {
  console.log(getToday());
};

getSevenDaysLater();

export const getLatLon = (cityName) => {
  axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.REACT_APP_API_KEY}`
    )
    .then((data) => getWeatherData(data.data.coord.lat, data.data.coord.lon));
};

const getWeatherData = (lat, lon) => {
  axios
    .get(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m&start_date=${getToday()}&end_date=2022-08-25`
    )
    .then((data) => console.log(data.data));
};
