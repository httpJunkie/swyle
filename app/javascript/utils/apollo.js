const getTokens = () => {
    const tokens = {
        "X-CSRF-Token": document
            .querySelector('meta[name="csrf-token"]')
            .getAttribute("content")
    };
    const authToken = localStorage.getItem("mlToken");
    return authToken ? { ...tokens, Authorization: authToken } : tokens;
};

const setTokenForOperation = async operation => {
    return operation.setContext({
        headers: {
            ...getTokens()
        }
    });
};