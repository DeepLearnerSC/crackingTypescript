import React from 'react'

interface IState{
    episodes:[],
    favorites:[]
}

interface IAction{
    type:string,
    payload: any
}

const initalState:IState ={
    episodes:[],
    favorites:[]
}
export const Store = React.createContext<IState>(initalState)

// https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes
function reducer(state:IState, action:IAction):IState{
    switch(action.type) {
        case 'FETCH_DATA':
            return {...state, episodes: action.payload}
        default:
            return state
    }
}

export function StoreProvider(props: any): JSX.Element{
    return <Store.Provider value={initalState}>
        {props.children}
    </Store.Provider>
}

