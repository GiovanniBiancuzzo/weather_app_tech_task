import { SET_QUERY, SET_ACTUAL_CITY, GET_WEATHER_INFOS, LOADING, LOADING_ERROR } from "../actions";

const initialState = {
    query: '',
    actualCity: {},//singola città presa in esame
    history: [],//oggetto con chiave-> città e valore->oggetto restituito dalla fetch
    loading: true,//variabile per il caricament dell'app
    error: false//variabile per errori dovuti al caricamento
};

const weatherInfosReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_QUERY:
            return {
                ...state,
                query: action.payload
            };
        case SET_ACTUAL_CITY:
            return {
                ...state,
                actualCity: action.payload
            };
        case GET_WEATHER_INFOS:
            return {
                ...state,
                history: {
                    ...state.history,
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
                error: true
            };
        default:
            return state;
    }
};

export default weatherInfosReducer;