import React from 'react';
import { Movie } from '../../models/Movie';
import CmButton from '../CmButton/CmButton';
import './SearchResult.scss';
// @ts-ignore
import {format} from "date-fns";

function SearchResult({ movie, resultAction }: { movie: Movie, resultAction: (movie: Movie) => any }) {
    return (
        <div className='SearchResult'>
            <div className='SearchResult__contentWrapper'>
                <img src={`https://image.tmdb.org/t/p/w92${movie.posterPath}`} alt={movie.title} />
                <div className='SearchResult__info'>
                    <div className='SearchResult__title'>{movie.title}</div>
                    <div className='SearchResult__releaseDate'>{movie.releaseDate ? format(Date.parse(movie.releaseDate), 'dd.MM.yyyy') : 'unknown'}</div>
                    <div className='SearchResult__overview'>{movie.overview.substring(0, 300)}{movie.overview.length > 300 ? '…' : ''}</div>
                    <div className='SearchResult__addToListButton'><CmButton text='Add' clickHandler={(event) => resultAction(movie)} /></div>
                </div>
            </div>
        </div>
    )
}

export default SearchResult