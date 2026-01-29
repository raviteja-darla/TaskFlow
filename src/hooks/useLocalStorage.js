import { useEffect, useState } from "react";

function useLocalStorage(key, defaultValue){

    const [value, setValue] = useState(() => {
        try {
            const storedValue = localStorage.getItem(key);
            if (storedValue !== null) {
                return JSON.parse(storedValue);
            } 
            return defaultValue;
        } catch (error) {
            return defaultValue;
        }
    });

    useEffect(() => {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.log("localStorage: ", error);
        }
    }, [key, value])
    return [value, setValue];
}
export default useLocalStorage;