import React from 'react'
import { useContext } from 'react';
import { useReducer } from 'react';
import { createContext } from 'react'
import { reducer } from './Reducer';

const AppContext = createContext();

const initialState = {
    user: null,
}

const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    
    const authorizeUser = (user) => {
        dispatch({type: "ADD USER", payload: user})
    }

    return <AppContext.Provider value={{...state, authorizeUser}}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppProvider };