import axios from "axios";

function getAxios(fullUrl: string, payload: object, headers: object) {
    return axios({
      method: "get",
      url: fullUrl,
      params: { ...payload },
      headers: { ...headers },
    })
    .then(res => {
      return res.data;
    })
    .catch(err => {
      console.log(err);
      //something...
    })
}

function postAxios(fullUrl: string, payload: object, headers: object) {
  return axios({
    method: "post",
    url: fullUrl,
    params: { ...payload },
    headers: { ...headers },
  })
  .then(res => {
    return res.data;
  })
  .catch(err => {
    console.log(err);
    //something...
  })
}

function putAxios(fullUrl: string, payload: object, headers: object) {
  return axios({
    method: "put",
    url: fullUrl,
    params: { ...payload },
    headers: { ...headers },
  })
  .then(res => {
    return res.data;
  })
  .catch(err => {
    console.log(err);
    //something...
  })
}
function deleteAxios(fullUrl: string, payload: object, headers: object) {
  return axios({
    method: "delete",
    url: fullUrl,
    params: { ...payload },
    headers: { ...headers },
  })
  .then(res => {
    return res.data;
  })
  .catch(err => {
    console.log(err);
    //something...
  })
}

export const Axios = {
  get: (fullUrl: string, payload: object, headers: object) => getAxios(fullUrl, payload, headers),
  post: (fullUrl: string, payload: object, headers: object) => postAxios(fullUrl, payload, headers),
  put: (fullUrl: string, payload: object, headers: object) => putAxios(fullUrl, payload, headers),
  delete: (fullUrl: string, payload: object, headers: object) => deleteAxios(fullUrl, payload, headers),
};

export default Axios;
