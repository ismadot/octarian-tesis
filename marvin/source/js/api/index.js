import promisePolyfill from 'es6-promise';
import 'isomorphic-fetch';

promisePolyfill.polyfill();

const BASE_URL ="http://localhost:8000/api/";

function testAsync() {
  return fetch('http://date.jsontest.com/')
    .then(response => response.json());
}

function backend(url , data={}, params={}) {
  return fetch(BASE_URL+url, {
        ...params,
        headers: {
          'Accept': "application/json;ident=4",
          'Content-Type': 'application/json'
        },
        body:JSON.stringify(data),
      })
    .then((response) => {response.json()});
}

export default {
  testAsync,
  backend,
};
