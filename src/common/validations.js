import InvalidProvidedURL from "./errors/InvalidProvidedURL.js"

function validateURL(string) {
    let url

    try {
        url = new URL(string);
    } catch (_) {
        throw new InvalidProvidedURL(string)
    }

    return url.protocol === 'http:' || url.protocol === 'https:'
}

export { validateURL }