export const parseUrl = (string) => {
    switch (string) {
        case "Image":
            return '/images';
        case "Article":
            return '/articles';
    }
}

export const findMatch = (queryString, stringWeBeChecking) => {
    const queries = queryString.split(' ');
    console.log("The queries are:", queries)
    for (let i=0; i < queries.length; i++) {
        if (stringWeBeChecking.match(queries[i])) {
            return true;
        }
    }
    return false;
}