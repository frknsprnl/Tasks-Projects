import axios from "axios";
axios.defaults.baseURL = "http://api.openweathermap.org";

export const getData = async (cityName) => {
  const myResponse = axios
    .get(
      `/data/2.5/forecast?q=${cityName}&appid=${process.env.REACT_APP_API_KEY}`
    )
    .then((response) => {
      return response.data;
    })
    .then((data) => {
      return data;
    })
    .catch((error) => console.log(error));
  return myResponse;
};
