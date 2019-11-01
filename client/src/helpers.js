export const parseUrl = (string) => {
    switch (string) {
        case "Image":
            return '/images';
        case "Article":
            return '/articles';
    }
}