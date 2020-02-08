export const parseUrl = (string) => {
    switch (string) {
        case "Image":
            return '/images';
        case "Article":
            return '/articles';
        default:
            return '/articles';
    }
}

export const findMatch = (queryString, stringWeBeChecking) => {
    const queries = queryString.split(' ');
    for (let i=0; i < queries.length; i++) {
        if (stringWeBeChecking.match(queries[i])) {
            return true;
        }
    }
    return false;
}

export const isSequential = (string) => {
    for (let index = 0; index < string.length; index++) {
        if (string[index] > string[index + 1]) {
            return false
        }
    }
    return true
}

/**
 * Checks for any repetitious characters, returning true if it finds 3 or more of the same character in a row.
 */
export const hasTooManyRepeats = (string) => {
    let repeats = 0;
    for (let index = 0; index < string.length; index++) {
        if (string[index] === string[index + 1]) {
            repeats += 1;
            if (repeats === 3) {
                return true;
            }
        } else {
            repeats = 0;
        }

    }
    return false;
}

export const validateEntry =(field, value) => {
    switch (field) {
        case "email": {
            return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);
        }
        case "username": {
            return /^[a-zA-Z\d-_]+$/.test(value);
        }
        case "password": {
            return (!hasTooManyRepeats(value) && !isSequential(value))
        }
    }
}