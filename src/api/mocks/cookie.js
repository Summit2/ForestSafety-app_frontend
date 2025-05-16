export function cookieParser(cookieString) {
    if (!cookieString.length) {
        return null;
    }

    const cookieValues = cookieString.split(';')
        .map((value) => value.split('='));

    const cookieObject = cookieValues.reduce((user, valueElement) => {
        const [ key, value ] = valueElement;
        const decodedKey = decodeURIComponent(key.trim());
        const decodedValue = decodeURIComponent(value.trim());
        user[decodedKey] = decodedValue;

        return user;
    }, {});

    return cookieObject;
}

export function deleteCookie(key) {
    if (!key.length) {
        return false;
    }
    document.cookie = [key, '=', ';expires=Thu, 01 Jan 1970 00:00:01 GMT'].join('');

    return true;
}