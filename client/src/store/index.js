import React from "react";

export const initialState = {
    isMenuOpen: true,
};

export function reducer(store, action) {
    switch (action.type) {
        case "switchMenu": // this action doesn't require payload as its based on previous value of the state
            console.log("trigger");
            return { ...store, isMenuOpen: !store.isMenuOpen };
        default:
            return { ...store };
    }
}

export const Context = React.createContext();
