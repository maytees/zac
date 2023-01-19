import React from 'react'
import {useRouter} from 'next/router'

const Navbar = () => {
    const router = useRouter();
    return (
        <div className='navbar bg-zinc-200 flex justify-center items-center w-screen pt-20'>
            <button className="btn-link font-bold text-zinc-800 text-6xl no-underline hover:no-underline
            transition-transform ease-in-out hover:scale-110" onClick={() => {
                router.push('/');
            }}>Zac</button>
        </div>
    )
}

export default Navbar