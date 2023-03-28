import React from 'react';
import man from '../../image/Lukita.png'


const Home = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content ml-32 flex-col lg:flex-row-reverse">
                <img src={man} alt="" className="max-w-md pl-15  ml-32 mx-32 " />
                <div className='items-start'>
                    <h1 className="text-4xl font-bold  ">Hello, i am</h1>
                    <p style={{ color: '#70FF00' }} className="py-6 text-7xl font-bold">John <br />
                        Doe </p>
                    <h1 className='text-5xl font-bold '>Fullstack Developer</h1>
                    <div style={{ color: '#828282' }} className='flex  pt-4'>
                        <div className='flex mr-1'>
                            <h1 className='text-7xl font-bold'>5</h1>
                            <p className='text-3xl font-bold'>years of <br />
                                experience</p>
                        </div>
                        <div className='flex ml-1'>
                            <h1 className='text-7xl font-bold'>13</h1>
                            <p className='text-xl font-bold mt-3'>Projects Completed <br />
                                around the world</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;