import React from 'react'
import PopularMovies from '../../components/header/movies/PopularMovies'

const Popular = () => {
    return (
        <section className='text-white w-10/12 mx-auto space-y-4'>
            <h2 className='font-semibold text-2xl text-rose-600'>What's Popular</h2>

            <PopularMovies className='flex w-full overflow-x-auto gap-4 scrollbar-thumb-white/10 scrollbar-track-transparent scrollbar-thin scrollbar-corner-transparent scrollbar-thumb-rounded-full' />
        </section>
    )
}

export default Popular
