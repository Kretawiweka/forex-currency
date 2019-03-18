import superagent from "superagent";

import { BASE_API_URL } from "../constants";

const request = param => {
  superagent
    .get(`${BASE_API_URL}/latest?base=${param}`)
    .then(res => {
      console.log(res.body);
    })
    .catch(err => {
      console.log(err.message);
    });
};

export { request };
