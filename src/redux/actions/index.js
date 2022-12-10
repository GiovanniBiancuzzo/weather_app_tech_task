export const SET_QUERY = 'SET_QUERY';
export const SET_ACTUAL_CITY = 'SET_ACTUAL_CITY';
export const GET_WEATHER_INFOS = 'GET_WEATHER_INFOS';
export const LOADING = 'LOADING';
export const LOADING_ERROR = 'LOADING_ERROR';
export const ADD_TO_FAVOURITES = 'ADD_TO_FAVOURITES';
export const REMOVE_FROM_FAVOURITES = 'REMOVE_FROM_FAVOURITES';
export const ACCEPTED_COOKIES = 'ACCEPTED_COOKIES';
export const ADD_ERROR = 'ADD_ERROR';

const weatherInfosApi = process.env.REACT_APP_OPENWEATHER_API;
const reverseGeolocationApi = process.env.REACT_APP_OPENWEATHER_REVERSE_API;
const apiKey = process.env.REACT_APP_OPENWEATHER_API_KEY;

const dispatchActionWithoutPayload = (type) => {
    return (dispatch) => dispatch({
        type: type,
    });
};

const dispatchActionWithPayload = (type, payload) => {
    return (dispatch) => dispatch({
        type: type,
        payload: payload,
    });
};

export const setQueryAction = (query) => ({
    type: SET_QUERY,
    payload: query
});

export const setActualCityAction = (data) => ({
    type: SET_ACTUAL_CITY,//setta città come attuale
    payload: data
});

export const getGeolocationAction = (lat, lon) => {
    return (dispatch, getState) => {
        fetch(
            `${reverseGeolocationApi}lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`
        ) //attraverso il reverse coding dell'api, otteniamo il nome della città come query di ricerca
            .then((result) => result.json())
            .then((data) =>
                dispatch(getWeatherInfosAction(data[0].name))
            )
            .catch((error) => console.log(error));
    };
};

export const getCityWeatherAction = (data) => ({
    type: GET_WEATHER_INFOS,
    payload: data
});

export const getWeatherInfosAction = (query) => {
    return (dispatch, getState) => {
        const finalQuery = query.charAt(0).toUpperCase() + query.slice(1);//preparo la stringa per essere confrontata 
        const cities = getState().weatherInfos.history;//recupero la lista delle città già conservate nello store
        dispatch(setQueryAction(finalQuery));//conservo la citta nella query di ricerca
        if (Object.keys(cities).includes(finalQuery)) {//controllo se è una citta già cercata
            dispatch(setActualCityAction(cities[finalQuery])); //se è già stata cercata, la estraggo dall'elenco delle città nello store e la setto come città attuale
        } else {
            fetchAll(finalQuery).then(data => {
                dispatch(getCityWeatherAction(data)); //conservo la città nello store, non persistente, la history
                dispatch(setActualCityAction(data)); //setto la citta attuale
            }).then(() => {
                setTimeout(() => {
                    dispatch({
                        type: LOADING,
                    });
                }, 1000);
            });
        }
    };
};


const fetchAll = async (cityName) => {
    try {
        let [data1, data2] = await Promise.all([
            fetchWeather(cityName),
            fetchImage(cityName),
        ]);
        data2 = data2.results.length === 0 ? 'http://architizer-prod.imgix.net/mediadata/projects/072013/b77aa4f3.jpg?q=60&auto=format,compress&w=1680&cs=strip' : data2.results[0].urls.regular;
        data1.image = data2;
        return data1;
    } catch (error) {
        console.log(error);
    }

};

const fetchWeather = (cityName) => {
    const weatherData = fetch(`${weatherInfosApi}q=${cityName}&appid=${apiKey}&units=metric`, { //se non è stata già cercata, effettuo una fetch
        method: "GET",
    })
        .then(res => res.json())
        .catch(() => dispatchActionWithoutPayload(LOADING_ERROR));
    return weatherData;
};



const fetchImage = (cityName) => {
    const imageUrl = fetch(
        `https://api.unsplash.com/search/photos?query=${cityName}&client_id=UzF58mZxjYRKuAQVQcixdSy4BVlF0XuQlHRCObFMf_k`
    )
        .then((result) => result.json())
        .catch((error) => dispatchActionWithoutPayload(LOADING_ERROR));
    return imageUrl;
};

export const addToFavouritesAction = (data) => {
    return (dispatch, getState) => {
        const citiesIds = (getState().favourites.cities.map((cityElement) => cityElement.city.id));//lista delle città nei preferiti
        if (!citiesIds.includes(data.city.id)) {//la città non è ancora nei preferiti?            
            dispatch({
                type: ADD_TO_FAVOURITES,//aggiungi città ai preferiti
                payload: data
            });
        } else dispatchActionWithoutPayload(ADD_ERROR);
    };
};

export const removeFromFavouritesAction = (cityId) => {//funzione mai implementata
    return (dispatch, getState) => {
        const citiesIds = (getState().favourites.cities.map((cityElement) => cityElement.values().city.id));//lista delle città nei preferiti
        if (citiesIds.includes(cityId)) {//la città è già nei preferiti?
            dispatch({
                type: REMOVE_FROM_FAVOURITES,//rimuovila dai preferiti
                payload: cityId
            });
        }
    };
};

export const acceptedCookiesAction = () => ({
    type: ACCEPTED_COOKIES
});