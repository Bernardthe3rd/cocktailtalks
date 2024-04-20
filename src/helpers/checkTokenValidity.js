import { jwtDecode } from "jwt-decode";

export function checkTokenValidity(token) {
    const decodedToken = jwtDecode(token);
    const tokenTime = decodedToken.exp * 1000;
    // const humanTime = new Date(tokenTime).toLocaleDateString("nl-NL") in case you want to see the local date.
    const isExpired = Date.now() > tokenTime;
    return !isExpired;
}