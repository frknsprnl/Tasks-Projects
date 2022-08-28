import axios from "axios";
axios.defaults.baseURL = "https://foreca-weather.p.rapidapi.com";

export const getLocation = (cityName, unit) => {
  const options = {
    method: "GET",
    url: `/location/search/${cityName}`,
    params: { lang: "en" },
    headers: {
      "X-RapidAPI-Key": `${process.env.REACT_APP_API_KEY}`,
      "X-RapidAPI-Host": "foreca-weather.p.rapidapi.com",
    },
  };

  const myResponse = axios
    .request(options)
    .then(function (response) {
      const cityInfo = response.data.locations[0];
      return getWeatherData(response.data.locations[0].id, unit, cityInfo);
    })
    .catch(function (error) {
      console.error(error);
      return false;
    });
  return myResponse;
};

const getWeatherData = (location_id, unit, info) => {
  const options = {
    method: "GET",
    url: `/forecast/daily/${location_id}`,
    params: {
      alt: "0",
      tempunit: `${unit}`,
      windunit: "MS",
      periods: "7",
      dataset: "full",
    },
    headers: {
      "X-RapidAPI-Key": `${process.env.REACT_APP_API_KEY}`,
      "X-RapidAPI-Host": "foreca-weather.p.rapidapi.com",
    },
  };

  const myResponse = axios
    .request(options)
    .then(function (response) {
      const assignedData = Object.assign(response.data, info);
      return assignedData;
    })
    .catch(function (error) {
      console.error(error);
      return false;
    });
  return myResponse;
};

export const reverseGeocoding = (lat, lon) => {
  const options = {
    method: "GET",
    url: "https://forward-reverse-geocoding.p.rapidapi.com/v1/reverse",
    params: {
      lat: `${lat}`,
      lon: `${lon}`,
      "accept-language": "en",
      polygon_threshold: "0.0",
    },
    headers: {
      "X-RapidAPI-Key": `${process.env.REACT_APP_API_KEY}`,
      "X-RapidAPI-Host": "forward-reverse-geocoding.p.rapidapi.com",
    },
  };

  const myResponse = axios
    .request(options)
    .then(function (response) {
      return response.data.address.city;
    })
    .catch(function (error) {
      console.error(error);
    });
  return myResponse;
};
