export const SET_QUERY = 'SET_QUERY';
export const PUSH_TO_HISTORY = 'PUSH_TO_HISTORY';
export const GET_ACTUAL_WEATHER = 'GET_ACTUAL_WEATHER';
export const GET_WEATHER_INFOS = 'GET_WEATHER_INFOS';
export const GET_RECENT_CITIES = 'GET_RECENT_CITIES';
export const ADD_TO_FAVOURITES = 'ADD_TO_FAVOURITES';
export const REMOVE_FROM_FAVOURITES = 'REMOVE_FROM_FAVOURITES';
export const ADD_ERROR = 'ADD_ERROR';

const endpointApi = process.env.REACT_APP_ENDPOINT_API;
//api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
const apiKey = process.env.REACT_APP_PERSONAL_API_KEY;

export const setQueryAction = (query) => ({
    type: SET_QUERY,
    payload: query
});

export const getActualWeatherAction = (data) => ({
    type: GET_ACTUAL_WEATHER,
    payload: data
});

export const getWeatherInfosAction = (query) => {
    return (dispatch, getState) => {
        const finalQuery = query.charAt(0).toUpperCase() + query.slice(1);//preparo la stringa per essere confrontata 
        const cities = getState().weatherInfos.cities;//recupero la lista delle città già conservate nello store
        dispatch(setQueryAction(finalQuery));//conservo la citta nella query di ricerca
        if (Object.keys(cities).includes(finalQuery)) {//controllo se è una citta già cercata
            dispatch(getActualWeatherAction(cities[finalQuery])); //se è già stata cercata, la estraggo dall'elenco delle città nello store e la setto come città attuale
        } else {
            fetch(`${endpointApi}q=${finalQuery}&appid=${apiKey}&units=metric`, { //se non è stata già cercata, effettuo una fetch
                method: "GET",
            })
                .then(res => res.json())
                .then(data => {
                    // dispatch(setHistoryAction(data.city.name));//conservo la città nella history
                    dispatch({//conservo la città nello store
                        type: GET_WEATHER_INFOS,
                        payload: data
                    });
                    dispatch(getActualWeatherAction(data));//setto la citta attuale
                }
                )
                .catch(error => {
                    console.log(error);
                });
        }
    };
};

export const addToFavouritesAction = (data) => {
    return (dispatch, getState) => {
        const citiesIds = (getState().favourites.list.map((cityElement) => cityElement.city.id));//lista delle città nei preferiti
        if (!citiesIds.includes(data.city.id)) {//la città non è ancora nei preferiti?
            dispatch({
                type: ADD_TO_FAVOURITES,//aggiungila ai preferiti
                payload: data
            });
        } else {
            dispatch({
                type: ADD_ERROR//è già nei preferiti? stampa un errore
            });
        }
    };
};

export const removeFromFavouritesAction = (cityId) => {
    return (dispatch, getState) => {
        const citiesIds = (getState().favourites.list.map((cityElement) => cityElement.city.id));//lista delle città nei preferiti
        if (citiesIds.includes(cityId)) {//la città è già nei preferiti?
            dispatch({
                type: REMOVE_FROM_FAVOURITES,//rimuovila dai preferiti
                payload: cityId
            });
        }
    };
};