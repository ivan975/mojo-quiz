import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <div className="navbar  bg-base-100 shadow-md">
                <div className="flex-1">
                    {/* <img src="../../public/test.png" alt="" /> */}
                    <Link to='' className="btn btn-ghost normal-case text-3xl font-bold">Mojo Quiz</Link>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal p-0">
                        <li className='font-bold'><Link to=''>Home</Link></li>
                        <li className='font-bold'><Link to=''>Statistics</Link></li >
                        <li className='font-bold'><Link to=''>About Us</Link></li >
                    </ul >
                </div >
            </div >
        </div>
    );
};

export default Navbar;