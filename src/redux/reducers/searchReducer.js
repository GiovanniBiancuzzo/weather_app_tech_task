import { PUSH_TO_HISTORY, SET_QUERY } from "../actions";

const initialState = {
    query: '',
    history: [],
};

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_QUERY:
            return {
                ...state,
                query: action.payload
            };
        case PUSH_TO_HISTORY:
            return {
                ...state,
                history: [...state.history, action.payload]
            };
        default:
            return state;
    }
};

export default searchReducer;