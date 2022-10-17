import { ADD_TO_FAVOURITES, REMOVE_FROM_FAVOURITES, ACCEPTED_COOKIES, ADD_ERROR } from "../actions";

const initialState = {
    cities: [],//array con le città preferite
    cookies: true,//variabile per l'accettazione dei cooki
    error: false,//variabile per un errore nell'aggiunta dei preferiti
};

const favouritesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_FAVOURITES:
            return {
                ...state,
                cities: [...state.cities, action.payload]
            };
        case REMOVE_FROM_FAVOURITES:
            return {
                ...state,
                cities: [...state.cities.slice(0, action.payload), ...state.cities.slice(action.payload + 1, ...state.cities.length)]
            };
        case ACCEPTED_COOKIES:
            return {
                ...state,
                cookies: false
            };
        case ADD_ERROR: return {
            ...state,
            error: true
        };
        default:
            return state;
    }
};

export default favouritesReducer;