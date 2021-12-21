import axios from "axios";

const request = async (method, url, body) => {
  let request;

  if (!axios.defaults.headers.common["Authorization"]) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${process.env.REACT_APP_TMDB_BEARER_TOKEN}`;
  }

  switch (method) {
    case "GET":
      request = await axios.get(`https://cors-anywhere.herokuapp.com/${url}`);
      break;
    case "POST":
      request = await axios.post(url, body);
      break;
    case "PUT":
      request = await axios.put(url, body);
      break;
    case "DELETE":
      request = await axios.delete(url, { data: body });
      break;

    default:
      break;
  }

  return request;
};

export default request;
