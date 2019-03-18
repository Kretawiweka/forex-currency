import superagent from "superagent";

import { BASE_API_URL } from "../constants";

const requestCurrency = param => {
  return new Promise((resolve, reject) => {
    superagent
      .get(`${BASE_API_URL}/latest?base=${param}`)
      .then(res => {
        resolve(res.body);
      })
      .catch(err => {
        reject(err);
      });
  });
};

export { requestCurrency };
