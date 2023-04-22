// const fetch = require("node-fetch");
import fetch from "node-fetch";

const getPeoplePromise = (fetch) => {
  return fetch("https://swapi.dev/api/people")
    .then((response) => response.json())
    .then((data) => {
      // console.log("getpeoplepromise", data);
      return {
        count: data.count,
        result: data.results,
      };
    });
};

const getPeople = async (fetch) => {
  const getRequest = await fetch("https://swapi.dev/api/people");
  const data = await getRequest.json();
  // console.log("getpeople", data);
  return {
    count: data.count,
    result: data.results,
  };
};

module.exports = {
  getPeople,
  getPeoplePromise,
};
