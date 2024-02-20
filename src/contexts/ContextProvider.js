import React, { createContext, useContext, useState } from 'react';

// creating context
const StateContext = createContext();

const initialState = {
    cart: false,
    chat: false,
    useProfile: false,
    notification: false
}

export const ContextProvider = ({children}) => {
    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked, setIsClicked] = useState(initialState);
    const [screenSize, setScreenSize] = useState(undefined);
    const [currentColor, setCurrentColor] = useState('#03C9D7');
    const [currentMode, setCurrentMode] = useState('Light');
    const [themeSettings, setThemeSettings] = useState(false);

    const setMode = (e) => {
        // console.log(e.target.value);
        setCurrentMode(e.target.value);
        localStorage.setItem('themeMode', e.target.value);
        setThemeSettings(false);
    }

    const setColor = (color) => {
        setCurrentColor(color);
        localStorage.setItem('colorMode', color);
        setThemeSettings(false);
    }
    
    const handleClick = (clicked) => {
        console.log(initialState);
        setIsClicked(prevState => ({
            ...prevState,
            [clicked]: !prevState[clicked]
        }));
    }
    return(
        <StateContext.Provider
            value={{
                activeMenu, // 'activeMenu: activeMenu' or just 'activeMenu' is fine too as key and value are same
                setActiveMenu,
                isClicked, setIsClicked, 
                handleClick,
                screenSize, setScreenSize,
                currentColor,
                currentMode,
                themeSettings, setThemeSettings,
                setMode, setColor,
                isClicked
            }}
        >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);