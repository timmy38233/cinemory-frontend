import React from 'react';
import { Movie } from '../../models/Movie';
import './WatchListItem.scss';
import CmButton from '../CmButton/CmButton';
// @ts-ignore
import {format} from "date-fns";

function WatchListItem({ movie, removeMovie }: { movie: Movie, removeMovie: (movie: Movie) => void }) {
    return (
        <div className='WatchListItem'>
            <div className='WatchListItem__contentWrapper'>
                <img src={`https://image.tmdb.org/t/p/w185${movie.posterPath}`} alt={movie.title} />
                <div className='WatchListItem__info'>
                    <div className='WatchListItem__title'>{movie.title}</div>
                    <div className='WatchListItem__releaseDate'>{movie.releaseDate ? format(Date.parse(movie.releaseDate), 'dd.MM.yyyy') : 'unknown'}</div>
                    <div className='WatchListItem__overview'>{movie.overview.substring(0, 300)}{movie.overview.length > 300 ? '…' : ''}</div>
                    <div className='WatchListItem__removeFromListButton'><CmButton text='Remove' clickHandler={(event) => removeMovie(movie)} /></div>
                </div>
            </div>
        </div>
    )
}

export default WatchListItem