import axios from "axios";

export const getIP = async () => {
  const myResponse = await axios
    .get("https://ipapi.co/json/")
    .then((response) => {
      return response.data.city;
    });
  return myResponse;
};
