import { GET_ACTUAL_WEATHER, GET_WEATHER_INFOS } from "../actions";

const initialState = {
    actualCity: {},//singola città presa in esame
    cities: {},//oggetto con chiave-> città e valore->oggetto restituiuto dalla fetch
};

const weatherInfosReducer = (state = initialState, action) => {
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
        default:
            return state;
    }
};

export default weatherInfosReducer;