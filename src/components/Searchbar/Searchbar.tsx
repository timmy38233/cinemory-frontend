import React, { useContext } from 'react';
import './Searchbar.scss';
import { Movie } from '../../models/Movie';
import SearchResult from '../SearchResult/SearchResult';
import { AppStateContext } from '../../state/context/AppStateContext';
import { ActionType } from '../../state/actions/Actions';


function Searchbar() {

    const { state, dispatch } = useContext(AppStateContext);

    const [searchTerm, setSearchTerm] = React.useState<string>('');
    const [searchResults, setSearchResults] = React.useState<Movie[]>([]);

    const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
        if (!event.currentTarget.value) {
            setSearchResults([]);
        }
        setSearchTerm(event.currentTarget.value);
    };

    // a useEffect hook that runs every time the searchTerm changes and calls an api to fetch the search results
    React.useEffect(() => {
        fetch(`${process.env.REACT_APP_BACKEND_URL}/api/movie/public/search?searchTerm=${searchTerm}`)
            .then(response => response.json())
            .then(data => {
                if (data.results) {
                    setSearchResults(data.results);
                }
            });
    }, [searchTerm]);


    const addToWatchList = (movie: Movie) => {
        fetch(`${process.env.REACT_APP_BACKEND_URL}/api/watchlist/${state.watchListId}/addMovie`, {
            method: 'POST',
            headers: { 'Authorization': `Bearer ${state.token}` },
            body: JSON.stringify({ id: movie.id })
        })
            .then(response => response.json())
            .then(data => {
                if (data.result) {
                    dispatch({
                        type: ActionType.setWatchListItems,
                        payload: [...state.watchListItems, movie]
                    });
                    dispatch({
                        type: ActionType.setWatchListUpdateQueued,
                        payload: true
                    });
                }
            });
    }

    return (
        <div className='Searchbar'>
            <input type='text' placeholder='Search for a movie' onChange={handleChange} />
            <div className='Searchbar__results'>
                {searchResults && searchResults.slice(0, 10).map((movie: Movie) => {
                    return (
                        <SearchResult movie={movie} key={movie.id} resultAction={addToWatchList} />
                    );
                })}
            </div>
        </div>
    );
}

export default Searchbar