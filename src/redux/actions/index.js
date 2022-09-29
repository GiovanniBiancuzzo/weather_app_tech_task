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
        fetch(`${endpointApi}q=${query}&appid=${apiKey}&units=metric&lang=it`, {
            method: "GET",
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);

                // const cities = getState().weatherInfos.cities.keys();
                // if (cities.includes(data.city.name)) {
                //     getActualWeatherAction(data);
                // }
                // else {
                //     dispatch({
                //         type: GET_WEATHER_INFOS,
                //         payload: data
                //     });
                //     getActualWeatherAction(data);
                // }
                dispatch({
                    type: GET_WEATHER_INFOS,
                    payload: data
                });
                dispatch(getActualWeatherAction(data));
            })
            .catch(error => {
                console.log(error);
            });
    };
};