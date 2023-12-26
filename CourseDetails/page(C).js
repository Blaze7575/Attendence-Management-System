import React from 'react';
// import mysql from 'mysql'

// const express = require('express');
// const mysql = require('mysql2');

// const app = express();
// const PORT = 3000;

// MySQL database connection configuration



function CDetails() {

    const data = [
        { id: 1, name: 'John', age: 25 },
        { id: 2, name: 'Jane', age: 30 },
        { id: 3, name: 'Doe', age: 22 },
    ];
    return (
        <div id='Dashboard_container' className='w-screen h-screen relative overflow-hidden'>
            <nav id='nav_header' className=' w-screen h-20 sticky top-0 flex justify-between content-center'>
                <h1 className='my-5 ml-5 font-bold font-serif text-4xl inline-block'>Course details</h1>
                <div className=' border-2 border-green-300 p-7' >login/sign out</div>
            </nav>
            <div id='Dashboard_otShell' className=' w-screen h-screen flex'>
                <ul id='Sidebar' className=' w-20 h-screen pt-3'>
                    <li id='it1' className='font-bold p-7'>IT1</li>
                    <li id='it2' className='font-bold p-7'>IT2</li>
                    <li id='it3' className='font-bold p-7'>IT3</li>
                    <li id='it4' className='font-bold p-7'>IT4</li>
                </ul>
                <div id='main' className=' p-3 mb-20 overflow-scroll'>
                    <div id='User_info' className='w-full h-[15vw] bg-[white]'></div>
                    <div id='Attendence' className='w-full bg-[white] my-8 flex justify-center content-center px-[2vw] py-[5vw]'>
                        <table id='Atable' className='text-black rounded'>
                            <thead className='rounded'>
                                <tr className='bg-[#4adb9c] text-[#ffffff] text-[2vw] font-bold border-b-[2px] border-[#bebebe2f]'>
                                    <td className='px-[3vw] py-[0.5vw]'>Date</td>
                                    <td className='px-[3vw] py-[0vw]'>Attendence</td>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((d) => {
                                    if (d.id % 2 == 0)
                                        return (
                                            <tr>
                                                <td className='text-center font-semibold bg-[#e8e8e8] '>{d.id}</td>
                                                <td className='text-center font-semibold bg-[#e8e8e8]'>{d.name}</td>
                                            </tr>)
                                    else
                                        return (
                                            <tr>
                                                <td className='text-center font-semibold bg-[#ffffff]'>{d.id}</td>
                                                <td className='text-center font-semibold bg-[#ffffff]'>{d.name}</td>
                                            </tr>)
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CDetails;