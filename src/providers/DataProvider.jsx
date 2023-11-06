import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';


export const DataContext = createContext();

const DataProvider = ({ children }) => {

    const initialDarkMode = JSON.parse(localStorage.getItem('darkMode')) || false;
    const [darkMode, setDarkMode] = useState(initialDarkMode);

    useEffect(() => {
        localStorage.setItem('darkMode', JSON.stringify(darkMode));
        document.documentElement.classList.toggle('dark', darkMode);
        document.documentElement.classList.toggle('light', !darkMode);
    }, [darkMode]);


    const data = {
        darkMode,
        setDarkMode,
    };

    return (
        <DataContext.Provider value={data}>
            {children}
        </DataContext.Provider>
    );
};

DataProvider.propTypes = {
    children: PropTypes.node.isRequired
}

export default DataProvider;