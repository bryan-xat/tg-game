import request from './request';

const basePath = '/users'

export const apiRegisterUser = (data) => request.post(`${basePath}/register`, data);

export const apiGetUser = (userId) => request.get(`${basePath}/${userId}`);

export const apiWithdraw = (data) => request.post(`${basePath}/withdraw`, data);
