import request from './request';

const basePath = '/game'

export const apiGameStart = (data) => request.post(`${basePath}/start`, data);

export const apiGameEnd = (data) => request.post(`${basePath}/end`, data);