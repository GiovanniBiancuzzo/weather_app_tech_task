import { ADD_TO_FAVOURITES, REMOVE_FROM_FAVOURITES, ADD_ERROR } from "../actions";

const initialState = {
    list: [],//array con le città preferite
    error: false,
};

const favouritesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_FAVOURITES:
            return {
                ...state,
                list: [...state.list, action.payload]
            };
        case REMOVE_FROM_FAVOURITES:
            return {
                ...state,
                list: [...state.list.slice(0, action.payload), ...state.list.slice(action.payload + 1, ...state.list.length)]
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