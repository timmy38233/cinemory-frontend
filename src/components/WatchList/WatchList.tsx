import React, { useContext, useEffect } from 'react';
import './WatchList.scss';
import { ActionType } from '../../state/actions/Actions';
import { AppStateContext } from '../../state/context/AppStateContext';
import WatchListItem from '../WatchListItem/WatchListItem';
import { Movie } from '../../models/Movie';

function WatchList() {
    const { state, dispatch } = useContext(AppStateContext);

    const removeMovie = (movie: Movie) => {
        fetch(`${process.env.REACT_APP_BACKEND_URL}/api/watchlist/${state.watchListId}/removeMovie`, {
            method: 'DELETE',
            headers: { 'Authorization': `Bearer ${state.token}` },
            body: JSON.stringify({ id: movie.id })
        })
            .then(response => response.json())
            .then(data => {
                if (data.result) {
                    dispatch({
                        type: ActionType.setWatchListItems,
                        payload: state.watchListItems.filter(item => item.id !== movie.id)
                    });
                }
            });
    }


    useEffect(() => {
        if (!state.token) return;

        fetch(`${process.env.REACT_APP_BACKEND_URL}/api/watchlist/list`, {
            headers: { 'Authorization': `Bearer ${state.token}` }
        })
            .then(response => response.json())
            .then(data => {
                if (data.result[0]?.id) {
                    dispatch({
                        type: ActionType.setWatchListId,
                        payload: data.result[0].id
                    });
                }
            });
    }, [state.token, dispatch]);

    useEffect(() => {
        if (!state.watchListId || !state.watchListUpdateQueued) return;

        fetch(`${process.env.REACT_APP_BACKEND_URL}/api/watchlist/${state.watchListId}/getMovies`, {
            headers: { 'Authorization': `Bearer ${state.token}` }
        })
            .then(response => response.json())
            .then(async data => {
                if (data.result?.movies) {
                    dispatch({
                        type: ActionType.setWatchListItems,
                        payload: data.result?.movies,
                    });
                    dispatch({
                        type: ActionType.setWatchListUpdateQueued,
                        payload: false,
                    });
                }
            });

    }, [state.watchListId, state.watchListUpdateQueued, dispatch, state.token]);

    return (
        <div className='WatchList'>
            {state.watchListItems?.length > 0 && state.watchListItems.map((movie: Movie) => {
                return (
                    <WatchListItem movie={movie} removeMovie={removeMovie} key={movie.id} />
                )
            })}
        </div>
    )
}

export default WatchList