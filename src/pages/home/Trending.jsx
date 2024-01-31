import React from 'react'
import useApi from '../../utils/Api';
import { Link } from 'react-router-dom';

export default function PopularMovies({ className }) {
  const { movies } = useApi('https://api.themoviedb.org/3/trending/movie/day?language=en-US');
  const { genres } = useApi('https://api.themoviedb.org/3/genre/movie/list?language=en');

  return (
    <section className='text-white w-10/12 mx-auto space-y-4'>
      <h2 className='font-semibold text-2xl text-rose-600'>Trending</h2>

      <ul className={`${className}`}>

        {movies.results && movies.results.map((movie) => (

          <li key={movie.id} className='bg-white/10 rounded-xl'>
            <Link to={`/${movie.id}`}>
              <div className='w-52 h-72'>
                <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                  className='w-full h-full object-fill  rounded-t-xl' alt="Movie Poster" />
              </div>

              <div className='p-2 text-white'>
                <h3 className=' text-lg'>{movie.title}</h3>
                <div className='flex justify-between'>
                  <time dateTime={movie.release_date} className='text-gray-400'>{movie.release_date}</time>

                  <div className='flex items-center bg-green-400 rounded-md px-1 text-white w-11'>
                    <span>{movie.vote_average.toFixed(1)}</span>

                    <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                </div>

              </div>
            </Link>
          </li>

        ))
        }
      </ul >
    </section>
  )
}
