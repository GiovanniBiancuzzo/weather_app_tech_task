import { GET_ACTUAL_WEATHER, GET_WEATHER_INFOS, GET_RECENT_CITIES } from "../actions";

const initialState = {
    actualCity: {},//singola città presa in esame
    cities: {},//oggetto con chiave-> città e valore->oggetto restituiuto dalla fetch
    recents: []//array con gli oggetti città/meteo
};

const favouritesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ACTUAL_WEATHER:
            return {
                ...state,
                actualCity: action.payload
            };
        case GET_WEATHER_INFOS:
            return {
                ...state,
                cities: {
                    ...state.cities,
                    [action.payload.city.name]: action.payload
                }
            };
        case GET_RECENT_CITIES:
            return {
                ...state,
                recents: {
                    ...state.cities,
                    [action.payload.city.name]: action.payload
                }
            };
        default:
            return state;
    }
};

export default favouritesReducer;