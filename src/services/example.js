import request from '../utils/request';

export function query() {
  return request('/api/users');
}


const pox = "/apis/";


export function testCnode() {
  return request(pox + '/api/v1/topics');
}
