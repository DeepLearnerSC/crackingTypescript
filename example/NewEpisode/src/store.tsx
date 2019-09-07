import React from "react";
import { IState, IAction } from "./interfaces";

const initalState: IState = {
  episodes: [],
  favorites: []
};

export const Store = React.createContext<IState | any>(initalState);

function reducer(state: IState, action: IAction): IState {
  switch (action.type) {
    case "FETCH_DATA":
      return { ...state, episodes: action.payload };
    case "ADD_FAV":
      return { ...state, favorites: [...state.favorites, action.payload] };
    case "REMOVE_FAV":
      return { ...state, favorites: action.payload };
    default:
      return state;
  }
}

export function StoreProvider({ children }: JSX.ElementChildrenAttribute): JSX.Element {
  const [state, dispatch] = React.useReducer(reducer, initalState);
  return (
    <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
  );
}
