import React from 'react'
import {useRouter} from 'next/router'

const Navbar = () => {
    const router = useRouter();
    return (
        <div className='navbar bg-gray-800 w-screen'>
            <button className="btn" onClick={() => {
                router.push('/');
            }}>Zac</button>
        </div>
    )
}

export default Navbar