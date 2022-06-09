import { STATIC_LINKS } from "./API_LINKS";

async function refreshToken(communicationFunction, link) {
    const response = fetch(STATIC_LINKS.REFRESH_TOKEN, {
        headers: {
            'Authorization': localStorage.getItem('refresh_token')
        }
    })

    const data = await response.json();
    localStorage.setItem('access_token', data.access_token);
    localStorage.setItem('refresh_token', data.refresh_token);

    if (!!link)
        return communicationFunction(link);
    return communicationFunction();
}

export default refreshToken;