import React from 'react'
import Banner from './Banner'
import Trending from './Trending'
import Popular from './Popular'

const Home = () => {
  return (
    <main className=' bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 space-y-8 pt-20 pb-6'>
      <Banner />
      <Trending  className='flex w-full overflow-x-auto gap-4 scrollbar-thumb-white/10 scrollbar-track-transparent scrollbar-thin scrollbar-corner-transparent scrollbar-thumb-rounded-full'/>
      <Popular />
    </main>
  )
}

export default Home