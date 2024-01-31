import React from 'react'
import useApi from '../../utils/Api';
import { Link } from 'react-router-dom';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css";

const Banner = () => {
  const { movies } = useApi('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1');

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
  };

  return (
    <Slider {...settings} className='mx-auto w-10/12'>

      {movies.results && movies.results.map((movie) => (
        <Link to={`/${movie.id}`}>
          <div key={movie.id} className='w-full h-96 flex items-center justify-center relative'>
            <div className=' absolute z-10 inset-0 bg-gradient-to-b from-transparent via-black-80 to-black/100'>
              <section className='absolute bottom-5 space-y-2 p-5'>
                <h2 className='text-white text-4xl'>
                  {movie.title}
                </h2>
                <p className='text-white text-lg font-thin'>{movie.overview}</p>
              </section>
            </div>
            <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              className='w-full h-full object-fill' alt="Trending Movie" />
          </div>
        </Link>
      ))
      }

    </Slider >
  )
}

export default Banner
