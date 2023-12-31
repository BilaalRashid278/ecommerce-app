
const FetchDataFromApi = async (query, options) => {
    const BASE_URL = 'http://192.168.1.192:5000/api/v1';
    try {
        const res = await fetch(`${BASE_URL}${query}`, options);
        return res
    } catch (error) {
        console.log(`Api Error ${error.message}`);
    }
};

export { FetchDataFromApi }


