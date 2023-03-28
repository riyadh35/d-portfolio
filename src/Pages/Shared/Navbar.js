import React from 'react';

const Navbar = () => {
    return (
        <div
            className="navbar app px-12" >
            <div className="navbar-start">
                <div className="">
                    <ul className=" uppercase text-3xl font-bold w-52 ">
                        <li><a className=''>johnDoe</a></li>
                    </ul>
                </div>
            </div>
            <div className="navbar-center">
                <label tabIndex={0} className="btn btn-ghost sm lg:hidden btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                </label>
                <div tabIndex={0} className='lg:flex mr-3 sm:hidden '>
                    <ul className='lg:flex font-bold'>
                        <li className='mr-3'><a href="#"></a>About</li>
                        <li className='mr-3'><a href=""></a>Skills</li>
                        <li className='mr-3'><a href=""></a>Projects</li>
                    </ul>
                </div>
            </div>
            <div className="navbar-end">
                <label tabIndex={0} className="btn btn-ghost sm lg:hidden btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                </label>
                <div tabIndex={0} className='lg:flex mr-3 sm:hidden '>
                    <ul className='lg:flex font-bold'>
                        <li className='mr-3'><a href="#"></a>Github</li>
                        <li className='mr-3'><a href=""></a>Linkedin</li>
                        <li className='mr-3'><a href=""></a>Contact me </li>
                    </ul>
                </div>
            </div>

        </div >
    );
};

export default Navbar;