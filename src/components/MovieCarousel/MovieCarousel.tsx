import React, { useEffect } from 'react'
import MovieCarouselCard from '../MovieCarouselCard/MovieCarouselCard';
import { Movie } from '../../models/Movie';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import './MovieCarousel.scss';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
    },
    tablet: {
        breakpoint: { max: 1024, min: 800 },
        items: 3,
    },
    mobile: {
        breakpoint: { max: 800, min: 0 },
        items: 1,
    }
};

function MovieCarousel() {

    const [movies, setMovies] = React.useState([]);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_BACKEND_URL}/api/movie/public/discover`)
            .then(response => response.json())
            .then(data => { setMovies(data.results) });
    }, []);

    useEffect(() => {
        console.log(movies);
    }, [movies]);



    return (
        <div className='MovieCarousel'>
            <Carousel
                draggable={false}
                centerMode={true}
                arrows={false}
                autoPlay={true}
                infinite={true}
                showDots={false}
                keyBoardControl={false}
                responsive={responsive}
                containerClass="MovieCarousel__container"
                sliderClass="MovieCarousel__slider"
                itemClass='MovieCarousel__item'
            >
                {movies.map((movie: Movie) => {
                    return (
                        <MovieCarouselCard movie={movie} key={movie.id} />
                    )
                })
                }
            </Carousel>
        </div>
    )
}

export default MovieCarousel