"use client"
import React from 'react';


function Dashboard() {



    return (
        <>
            <div id='Dashboard_container' className='relative'>
                <div id='Dashboard_otShell' className='flex relative '>
                    <div id='main' className='h-fit w-full bg-[#185943]'>
                        {/* personal info */}
                        <div id='dash-info-dispaly' className='h-[25vw] w-full bg-[#185943] flex justify-between content-center'>
                            {/* this is the personal info. add the necessary backend here */}
                            <div className='w-[40vw] h-full ml-[5vw] flex'>
                                <div className='flex content-center flex-wrap'>
                                    <img
                                        className=' w-[13vw] h-[13vw] mb-[0.5vw] ml-[0vw] border-[white] border-[.25vw] rounded-[50%]
                                                     object-cover object-right-top'
                                        src={'https://i.pinimg.com/736x/f9/2b/42/f92b423a4acabc4307dbaa275ff5b845.jpg'}
                                    // /VS Code/react/src/app/st-1.jpg  
                                    />
                                </div>
                                <div className='w-[27vw] h-full pl-[2vw]'>
                                    <div id='filler' className='h-[7.5vw] w-full'></div>
                                    <div className=' w-full  font-bold text-[#dda62f] text-[2.5vw] underline '>Haider Musavi</div>
                                    <div className='inline-block text-[14px] '>CMS: 417101</div>
                                    <div className='text-[18px] font-bold '>Departmet</div>
                                    <div className='text-[14px]'>Course</div>
                                    <div className='inline-block text-[14px]'>0326-5242449</div>
                                </div>
                            </div>
                            <div className='w-[30vw] h-full bg-transparent mr-[5vw]'>
                            </div>
                        </div>

                        {/* Courses */}
                        <div id='courses_display_area' className='py-[2vw] px-[3vw] mx-10 rounded-tl-[10px] rounded-tr-[10px] bg-[#d4e1dd]'>
                            <h1 className='pl-[3vw] mb-[5px] font-bold text-[3vw] text-[#212221c1]'>Classes</h1>
                            <div id='courses_section' className='py-[1.5vw] ml-[2vw]'>
                                <div id='course-item' className='  h-[7vw] w-[60vw] mb-[1.5vw] border-b-[2px] border-[#000000] flex justify-between
                                                                   hover:bg-stone-700 transition-all ease-in-out duration-[335ms]'
                                    onClick={()=>
                                    {
                                        window.location.href="/CourseS";
                                    }}
                                >
                                    <div>
                                        <h1 className='pt-[1vw] mb-[.75vw] font-bold text-[40px]'>Name</h1>
                                        <div className='text-[12px]'>3rd-Semester</div>
                                    </div>
                                    <div className='flex justify-center content-center flex-wrap'>
                                        <div>A%</div>
                                    </div>
                                </div>
                                <div id='filler' className='h-[9vw] bg-transparent'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Dashboard;