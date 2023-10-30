const BASE_URL = 'http://localhost:5000/api/v1/';
const options = {
    method : 'GET'
}
const FetchDataFromApi = async () => {
    const res = await fetch(BASE_URL,options);
    const data = await res.json();
    return data
};

export {FetchDataFromApi,BASE_URL}


