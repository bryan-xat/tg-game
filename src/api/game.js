import request from './request';

const basePath = '/games'

export const apiGameStart = (data) => request.post(`${basePath}/start`, data);
