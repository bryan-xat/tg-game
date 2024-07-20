import request from './request';

const basePath = '/users'

export const apiRegisterUser = (data) => request.post(`${basePath}/register`, data);

export const apiGetUser = (userId) => request.get(`${basePath}/${userId}`);

export const apiWithdraw = (data) => request.post(`${basePath}/withdrawal`, data);
export const apiGetWithdrawTimes = (id) => request.get(`${basePath}/${id}/withdrawal/times`);
export const apiGetWithdrawRecords = (params) => request.get(`${basePath}/${params.tg_id}/withdrawal/record`, {
  params,
});