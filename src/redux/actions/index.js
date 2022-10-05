export const SET_QUERY = 'SET_QUERY';
export const PUSH_TO_HISTORY = 'PUSH_TO_HISTORY';
export const GET_ACTUAL_WEATHER = 'GET_ACTUAL_WEATHER';
export const GET_WEATHER_INFOS = 'GET_WEATHER_INFOS';
export const GET_RECENT_CITIES = 'GET_RECENT_CITIES';

const endpointApi = 'https://api.openweathermap.org/data/2.5/forecast?';
//api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
const apiKey = 'b4bf487457c59aad1bf353eadea50057';

export const setQueryAction = (query) => ({
    type: SET_QUERY,
    payload: query
});

export const setHistoryAction = (query) => ({
    type: PUSH_TO_HISTORY,
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
                    dispatch(setHistoryAction(data.city.name));//conservo la città nella history
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