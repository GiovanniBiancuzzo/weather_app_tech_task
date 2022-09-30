export const SET_QUERY = 'SET_QUERY';
export const PUSH_TO_HISTORY = 'PUSH_TO_HISTORY';
export const GET_ACTUAL_WEATHER = 'GET_ACTUAL_WEATHER';
export const GET_WEATHER_INFOS = 'GET_WEATHER_INFOS';

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
        let finalQuery = '';
        if (typeof (query) === 'string') {
            finalQuery = `q=${query}`;
        } else finalQuery = `lat=${query.latitude}&lon=${query.longitude}`;
        fetch(`${endpointApi}${finalQuery}&appid=${apiKey}&units=metric&lang=it`, {
            // fetch(`${endpointApi}q=${query}&appid=${apiKey}&units=metric&lang=it`, {
            //api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
            method: "GET",
        })
            .then(res => res.json())
            .then(data => {
                const cities = getState().weatherInfos.cities;
                dispatch(setQueryAction(data.city.name));//conservo la citta nella query di ricerca
                if (Object.keys(cities).includes(data.city.name)) {//controllo se è una citta già cercata
                    dispatch(getActualWeatherAction(cities[data.city.name])); //se è già stata cercata, la estraggo dall'elenco delle città nello store
                } else {//se non è stata già cercata
                    dispatch(setHistoryAction(data.city.name));//conservo la citta nella history
                    dispatch({//conservo la citta nello store
                        type: GET_WEATHER_INFOS,
                        payload: data
                    });
                    dispatch(getActualWeatherAction(data));//setto la citta attuale
                }
            })
            .catch(error => {
                console.log(error);
            });
    };
};