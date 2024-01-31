import React from 'react'
import Logo from './Logo'
import Search from './Search'
import Login from './Login'

const Header = () => {
    return (
        <div className='w-full fixed bg-slate-900 py-4 flex items-center justify-around z-20'>
            <Logo />
            <Search />
            <div className='flex gap-24'>
                <Login />
            </div>
        </div>
    )
}

export default Header