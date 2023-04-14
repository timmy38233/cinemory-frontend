import React from 'react';
import { Movie } from '../../models/Movie';
import './MovieCarouselCard.scss';

type MovieCarouselCardProps = {
    movie: Movie
}

function MovieCarouselCard({ movie }: MovieCarouselCardProps) {
    return (
        <div className='MovieCarouselCard' key={movie.id}>
            <img src={`${process.env.REACT_APP_TMDB_IMAGE_BASE_URL}/w342${movie.posterPath}`} alt={movie.title} />
        </div>
    )
}

export default MovieCarouselCard