import React from 'react';

function Dashboard() {

    return (
        <>
            <div id='Dashboard_container' className='w-screen h-screen relative overflow-hidden'>
                <nav id='nav_header' className=' w-screen h-20 sticky top-0 flex justify-between content-center'>
                    <h1 className='my-5 ml-5 font-bold font-serif text-4xl inline-block'>This is the Dashboard (Student)</h1>
                    <div className=' border-2 border-green-300 p-7' >login/sign out</div>
                </nav>
                <div id='Dashboard_otShell' className=' w-screen h-screen flex '>
                    <ul id='Sidebar' className=' w-20 h-screen pt-3'>
                        <li id='it1' className='font-bold p-7'>IT1</li>
                        <li id='it2' className='font-bold p-7'>IT2</li>
                        <li id='it3' className='font-bold p-7'>IT3</li>
                        <li id='it4' className='font-bold p-7'>IT4</li>
                    </ul>
                    <div id='main' className=' p-3 mb-20 overflow-scroll'>

                    {/* how about adding the info of the institution and the student himself  */}

                        <div id='courses_display_area' className=' my-5 mx-10 pt-20 relative'>
                            <div id='courses_section' className=' h-72 py-2 mx-20 overflow-x-scroll overflow-y-hidden whitespace-nowrap'>
                                <div id='course1' className='cousrseIT '>
                                    <img src=' https://images.pexels.com/photos/671662/pexels-photo-671662.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' />
                                </div>
                                <div id='course2' className='cousrseIT '>
                                    <img src='https://images.pexels.com/photos/1476880/pexels-photo-1476880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
                                </div>
                                <div id='course3' className='cousrseIT '>
                                    <img src='https://images.pexels.com/photos/1146133/pexels-photo-1146133.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' />
                                </div>
                                <div id='course4' className='cousrseIT '>
                                    <img src='https://images.pexels.com/photos/464334/pexels-photo-464334.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load' />
                                </div>
                                <div id='course5' className='cousrseIT '>
                                    <img src='https://images.pexels.com/photos/2414454/pexels-photo-2414454.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default Dashboard;