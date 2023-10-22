
const GREENAWARD_API_BASE_URL = "http://127.0.0.1/service";


export const fetchGreenData = (servicePath, method, jwt, payload) => {
    const methodUpper = method?.toUpperCase();
    const options = { }

    if(methodUpper && methodUpper!== 'GET') {
        options.method = methodUpper;
        if(payload) options.body = JSON.stringify(payload);
    }

    if(jwt){
        options.headers = {
            Authorization: `Bearer ${jwt}`
        }
    }
   
    return fetch(`${GREENAWARD_API_BASE_URL}${servicePath}`, options)
        .then((response) => response.json())
        .then((data) => setUser(data));
}