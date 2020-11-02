import React, { useReducer, createContext } from 'react';

export const AppContext = createContext();

const initialState = {
    realtors: [],
    realtor: {},
    messages: [],
    message: {},
    location: '',
    counter: null,
};

function reducer(state, action) {
    switch (action.type) {
        case 'GET_REALTORS': {
            return {
                ...state,
                realtors: action.payload,
            };
        }
        case 'GET_REALTOR': {
            return {
                ...state,
                realtor: action.payload,
            };
        }
        case 'GET_MESSAGES': {
            return {
                ...state,
                messages: action.payload,
            };
        }
        case 'GET_MESSAGE': {
            return {
                ...state,
                message: action.payload,
            };
        }
        case 'UPDATE_MESSAGE': {
            debugger
            return {
                ...state,
                updateMessage: {...action.payload, read: true},
            };
        }
        case 'LOCATION_CHANGE': {
            return {
                ...state,
                location: action.location,
            };
        }
        case 'UPDATE_COUNTER': {
            return {
                ...state,
                counter: action.counter,
            };
        }
        default:
            return state
    }
}

export const AppContextProvider = props => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { children } = props;

    return (
        <AppContext.Provider value={[state, dispatch]}>
            {children}
        </AppContext.Provider>
    );
};
