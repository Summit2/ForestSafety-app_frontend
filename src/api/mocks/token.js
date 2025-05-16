import { decodeToken } from "react-jwt";

const sign = require('jwt-encode');

export const keyName = 'Token';

export function createJWT (userObject) {
    const newToken = sign({ ...userObject }, keyName);
    let now = new Date();
    let endTime = new Date(now.getTime() + 24 * 3600 * 1000);
    document.cookie = ['access_token=' + encodeURIComponent(newToken),
                        'expires=' + endTime.toUTCString()].join('; ');
    return newToken;
}

export function decodeJWT (token) {
    return decodeToken(token);
}