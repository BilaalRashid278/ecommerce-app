const BASE_URL = 'http://localhost:5000/api/v1';

const FetchDataFromApi = async (query, options) => {
    try {
        const res = await fetch(`${BASE_URL}${query}`, options);
        return res
    } catch (error) {
        console.log(`Api Error ${error.message}`);
    }
};

export { FetchDataFromApi }


