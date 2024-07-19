import request from './request';

const basePath = '/game'

export const apiGameStart = () => request.post(`${basePath}/start`);

export const apiGameEnd = () => request.post(`${basePath}/end`);