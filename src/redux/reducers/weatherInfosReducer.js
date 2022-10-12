import { SET_QUERY, GET_ACTUAL_WEATHER, GET_WEATHER_INFOS, GET_RECENT_CITIES, LOADING, LOADING_ERROR } from "../actions";

const initialState = {
    query: '',
    actualCity: {},//singola città presa in esame
    cities: {},//oggetto con chiave-> città e valore->oggetto restituiuto dalla fetch
    //recents: []//array con gli oggetti città/meteo
    loading: true,
    error: false
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
        case LOADING:
            return {
                ...state,
                loading: false
            };
        case LOADING_ERROR:
            return {
                ...state,
                loading: true
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