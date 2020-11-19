import React, { useEffect, useReducer } from 'react';

import { ActionTypes } from './actionTypes';
import appReducer from './appReducer';
import { DeviceTypes } from './contextTypes';
import { AppContext, initialState } from "./appContext";

export const AppContextProvider: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(appReducer, initialState);

    function checkDeviceSize() {
        const width = window.innerWidth;
        if (width > 1024) {
            return DeviceTypes.desktop;
        } else if (width > 768 && width <= 1024) {
            return DeviceTypes.tablet;
        } else {
            return DeviceTypes.mobile;
        }
    };

    useEffect(() => {
        const handleResize = () => {
            dispatch({ type: ActionTypes.SET_DEVICE_TYPE, payload: checkDeviceSize() })
        }
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    return (
        <AppContext.Provider value={{ state, dispatch }} >
            {children}
        </AppContext.Provider>
    )
}