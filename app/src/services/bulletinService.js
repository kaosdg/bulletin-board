import * as httpUtil from '../utils/httpUtil';
import urlConstants from '../constants/urlConstants';

export function checkLogin(data) {
  let loginUrl = urlConstants.baseUrl + '/login';

  return httpUtil.post(loginUrl, data);
}

export async function addBulletin(data) {
  let addBulletinUrl = urlConstants.baseUrl + '/bulletins';
  data.owner = 'ayush';

  let accessToken = localStorage.getItem('accessToken');
  let headers = {
    Authorization: 'Bearer ' + accessToken 
  };

  return new Promise((resolve) => {
    let result = httpUtil.post(addBulletinUrl, data, headers);
    
    resolve(result);
  });
}

export async function listBulletin() {
  let listBulletinUrl = urlConstants.baseUrl + '/bulletins';
  let accessToken = localStorage.getItem('accessToken');
  let headers = {
    Authorization: 'Bearer ' + accessToken 
  };

  return new Promise((resolve) => {
    let result = httpUtil.get(listBulletinUrl, {}, headers);

    resolve(result);
  });
}

export async function deleteBulletin(bulletinId) {
  let deleteBulletinUrl = urlConstants.baseUrl + '/bulletins/' + bulletinId;
  let accessToken = localStorage.getItem('accessToken');
  let headers = {
    Authorization: 'Bearer ' + accessToken 
  };

  return new Promise((resolve) => {
    let result = httpUtil.remove(deleteBulletinUrl, headers);

    resolve(result);
  });
}

export async function editBulletin(bulletinId, data) {
  let editBulletinUrl = urlConstants.baseUrl + '/bulletins/' + bulletinId;
  let accessToken = localStorage.getItem('accessToken');
  let headers = {
    Authorization: 'Bearer ' + accessToken 
  };

  return new Promise((resolve) => {
    let result = httpUtil.put(editBulletinUrl, data, headers);

    resolve(result);
  });
}
