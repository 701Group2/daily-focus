export const authEndpoint = "https://accounts.spotify.com/authorize";
// Replace with your app's client ID, redirect URI and desired scopes
const clientId = "0d4fc9fafa1949a7a9e3e810e12076f0";
const clientSecret = "7579323d4eab49d9a922d500a5f65c47";
// encode client ID and secret with Base 64
const encodedCredentials = window.btoa(clientId + ":" + clientSecret);

const redirectUri = "http://localhost:3000/home";

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

/**
 * Gets the authorization code from the URL
 * @returns code as a string
 */
const getAuthCodeFromResponse = () => {
    return window.location.search
        .substring(1)
        .split("&")
        .reduce((initial, item) => {
            var parts = item.split("=");
            initial[parts[0]] = decodeURIComponent(parts[1]);
            return initial;
        }, {});
};

/**
 * Gets the access token from the spotify API
 * @returns object containing the access_code, expires_in, and refresh_token
 */
export const getAuthToken = () => {
    const code = getAuthCodeFromResponse().code;

    var body = new URLSearchParams();
    body.append("grant_type", "authorization_code");
    body.append("code", code);
    body.append("redirect_uri", redirectUri);

    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": `Basic ${encodedCredentials}`,
        },
        body: body,
    };
    return fetch("https://accounts.spotify.com/api/token", requestOptions)
        .then((response) => {
            if (!response.ok) {
                return false;
            }
            return response.json();
        })
        .then((data) => {
            return data;
        });
};

/**
 * Refreshes the access token using the refresh token
 * @returns object containing access_token and expires_in
 */
export const getRefreshedToken = () => {
    const refreshToken = localStorage.getItem("spotify-refresh-token");

    var body = new URLSearchParams();
    body.append("grant_type", "refresh_token");
    body.append("refresh_token", refreshToken);

    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": `Basic ${encodedCredentials}`,
        },
        body: body,
    };
    return fetch("https://accounts.spotify.com/api/token", requestOptions)
        .then((response) => {
            if (!response.ok) {
                return false;
            }
            return response.json();
        })
        .then((data) => {
            return data;
        });
};

/**
 * sets the expiry time of the accessToken in local storage to five minutes before the token actually expires
 * @param {*} expiresIn how many seconds the token lasts before expiring
 * @returns time that the token expires, in milliseconds from epoch
 */
export const setExpiryTime = (expiresIn) => {
    const tenMinutes = 10 * 60 * 1000;
    const expiryTime = expiresIn * 1000 + Date.now() - tenMinutes;
    localStorage.setItem("spotify-token-expiration", expiryTime);
    return expiryTime;
};

export const accessUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
    "%20"
)}&response_type=code&show_dialog=true`;
