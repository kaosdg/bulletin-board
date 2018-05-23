import axios from 'axios';
import urlConstants from '../constants/urlConstants';

export function get(url, params = {}, headers = {}) {
  let request = {
    method: 'get',
    url: url,
    params: params
  };
  if(Object.keys(headers).length) {
    request.headers = headers;
  }

  return axios(request);
}

export function post(url, data, headers = {}) {
  let request = {
    method: 'post',
    url: url,
    data: data
  };
  if(Object.keys(headers).length) {
    request.headers = headers;
  }

  return axios(request);
}

export function put(url, data, headers = {}) {
  let request = {
    method: 'put',
    url: url,
    data: data
  };
  if(Object.keys(headers).length) {
    request.headers = headers;
  }

  return axios(request);
}

export function remove(url, headers = {}) {
  let request = {
    method: 'delete',
    url: url
  };
  if(Object.keys(headers).length) {
    request.headers = headers;
  }
  
  return axios(request);
}

axios.interceptors.response.use(response => {
  return response;
}, (error) => {
  let originalRequest = error.config;

  if(error.response.status === 401) {
    const refreshToken = localStorage.getItem('refreshToken');
    let tokenRequest = {
      method: 'get',
      url: urlConstants.baseUrl + '/refresh',
      headers: {
        Authorization: 'Bearer ' + refreshToken
      }
    };

    return axios(tokenRequest).then(({data}) => {
      localStorage.setItem('accessToken', data.accessToken);
      originalRequest.headers.Authorization = 'Bearer ' + data.accessToken;
      return axios(originalRequest);
    });
  }
  return Promise.reject(error);  
}); 
