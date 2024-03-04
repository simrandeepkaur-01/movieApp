import React from 'react'
import useApi from '../../utils/Api'
import { useParams } from 'react-router-dom';

export default function Details() {
  const { id } = useParams();
  const { movies } = useApi(`https://api.themoviedb.org/3/movie/${id}?language=en-US`);
  const { genres } = useApi('https://api.themoviedb.org/3/genre/movie/list?language=en');

  const movie = movies;
  return (
    <div className='min-h-screen'>
      {movie && (
        <div className=' md:pt-14 md:relative '>
          <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} className='hidden md:block md:w-full md:h-[500px] md:object-fill'></img>

          <section className='md:absolute pt-20 md:pt-0 px-4 md:px-16  md:space-x-8 md:mt-14 inset-0 flex flex-col md:flex-row items-center text-white md:z-10 bg-gradient-to-r from-gray-800/80 to-gray-800/80 '>
            <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} className='w-full md:w-96 h-96 flex items-center shadow-2xl rounded-xl'></img>

            <div className='space-y-3 flex justify-center flex-col'>
              <h2 className='text-5xl font-semibold'>{movie.title}</h2>

              {/* release date, genre */}
              <div className='flex flex-wrap md:space-x-3 items-center'>
                <time dateTime={movie.release_date}>{movie.release_date}</time>

                <span className='hidden md:block w-1 h-1 bg-white border border-white rounded-full'></span>

                <div className='space-x-2 italic'>
                  {genres.genres && (
                    movie.genres?.map((genre_id) => {
                      const genre = genres.genres.find((g) => g.id === genre_id.id);
                      return genre && <span>{genre.name}.</span>;
                    })
                  )}
                </div>

                {/* <span className='w-1 h-1 bg-white border border-white rounded-full'></span>
                <time dateTime={movie.runtime}>{(movie.runtime)}</time> */}
              </div>

              {/* overview, tagline */}
              <div>
                <p className='text-xl text-gray-300 italic mb-3'>{movie.tagline}</p>

                <h3 className=' font-semibold text-2xl'>Overview</h3>
                <p className='text-lg'> {movie.overview}</p>
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  )
}
