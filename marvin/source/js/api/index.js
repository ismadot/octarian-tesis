import promisePolyfill from 'es6-promise';
import 'isomorphic-fetch';

promisePolyfill.polyfill();

function testAsync() {
  return fetch('http://date.jsontest.com/')
    .then(response => response.json());
}
function backend(url, head) {
  return fetch('http://localhost:8000/api/'+url,head)
    .then(response => response.json());
}

export default {
  testAsync,
  backend,
};
