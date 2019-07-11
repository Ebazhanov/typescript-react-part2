import React from 'react'
import {Store} from './Store'

export default function App(): JSX.Element {
    const {state, dispatch} = React.useContext(Store);

    

    const fetchDataAction = async () => {
        const URL = 'https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episode';
        const data = await fetch(URL);
        const dataJSON = await data.json();
        return dispatch({
            type: 'FETCH_DATA',
            payload: dataJSON._embed.episodes
        })
    };
    return (
        <React.Fragment>
            <h1>Evgeny let's</h1>
            <p>Pick your favourite episode!!!</p>
        </React.Fragment>
    )
}


