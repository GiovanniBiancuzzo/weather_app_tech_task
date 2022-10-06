import { SET_QUERY, GET_ACTUAL_WEATHER, GET_WEATHER_INFOS, GET_RECENT_CITIES } from "../actions";

const initialState = {
    query: '',
    actualCity: {},//singola città presa in esame
    cities: {},//oggetto con chiave-> città e valore->oggetto restituiuto dalla fetch
    //recents: []//array con gli oggetti città/meteo
};

const weatherInfosReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_QUERY:
            return {
                ...state,
                query: action.payload
            };
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
        // case GET_RECENT_CITIES:
        //     return {
        //         ...state,
        //         recents: {
        //             ...state.cities,
        //             [action.payload.city.name]: action.payload
        //         }
        //     };
        default:
            return state;
    }
};

export default weatherInfosReducer;