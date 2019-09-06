import React from 'react'
import { IEpisode } from "./interfaces";

export default function EpisodeList(props:any) {
    const {episodes, toggleFavAction, favorites} = props
    return (
        <section className="episode-layout">
        {episodes.map((episode: IEpisode) => {
          return (
            <section key={episode.id} className="episode-box">
              <img
                src={episode.image.medium}
                alt={`Fire and Ice ${episode.name}`}
              />
              <div>{episode.name}</div>
              <section style={{display:'flex', justifyContent:'space-between'}}>
                <div>
                  Season: {episode.season} Number: {episode.number}
                </div>
                <button
                  type="button"
                  onClick={() => {
                    toggleFavAction(episode);
                  }}
                >
                  {favorites.find(
                    (fav: IEpisode) => (fav.id === episode.id)
                  )
                    ? "UnFav"
                    : "fav"}
                </button>
              </section>
            </section>
          );
        })}
      </section>
    )
}
