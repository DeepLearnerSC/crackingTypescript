import React from "react";
import { Store } from "./store";
import {IAction, IEpisode} from './interfaces'


export default function App(): JSX.Element {
  const { state, dispatch } = React.useContext(Store);

  React.useEffect(() => {
    state.episodes.length === 0 && fetchDataAction();
  });

  const fetchDataAction = async () => {
    const URL =
      "https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes";
    const data = await fetch(URL);
    const dataJSON = await data.json();
    return dispatch({
      type: "FETCH_DATA",
      payload: dataJSON._embedded.episodes
    });
  };
  const toggleFavAction = (episode: IEpisode): IAction =>  dispatch({
    type: "ADD_FAV",
    payload: episode
  });
  console.log(state);
  return (
    <React.Fragment>
      <header className="header">
        <h1>Fire and Ice</h1>
        <p>Pick your favorite Episode!!</p>
      </header>
      <section className="episode-layout">
        {state.episodes.map((episode: IEpisode) => {
          return (
            <section key={episode.id} className="episode-box">
              <img
                src={episode.image.medium}
                alt={`Fire and Ice ${episode.name}`}
              />
              <div>{episode.name}</div>
              <section>
                <div>
                  Season: {episode.season} Number: {episode.number}
                </div>
                <button
                  type="button"
                  onClick={() => {
                    toggleFavAction();
                  }}
                >
                  Favorite
                </button>
              </section>
            </section>
          );
        })}
      </section>
    </React.Fragment>
  );
}
