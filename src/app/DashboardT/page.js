"use client"
import React from 'react';


function Dashboard() {

    const changeSection = (obj)=> 
    {
        const op1 = document.getElementById("op-1")
        const op2 = document.getElementById("op-2")
        const cs1 = document.getElementById("courses_section_TodaysClasses")
        const cs2 = document.getElementById("courses_section_Classes")

        // bg-[#d4e1dd] text-[#212221c1]
        // bg-[#4a4e4d] text-[#949994c1]

        if(obj.target == op1)
        {
            op1.style.background = "#d4e1dd"
            op1.style.color = "#212221c1"
            op2.style.background = "#4a4e4d"
            op2.style.color = "#bec4be"
            cs1.classList.add("flex")
            cs1.classList.remove("hidden")
            cs2.classList.remove("flex")
            cs2.classList.add("hidden")
        }
        else if(obj.target == op2)
        {
            op1.style.background = "#4a4e4d"
            op2.style.background = "#d4e1dd"
            op2.style.color = "#212221c1"
            op1.style.color = "#bec4be"
            cs2.classList.add("flex")
            cs2.classList.remove("hidden")
            cs1.classList.remove("flex")
            cs1.classList.add("hidden")
        }
    }

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
                                        src={'https://i.pinimg.com/736x/ef/6c/b5/ef6cb5f999116c56bb05598e8b6a38b2.jpg'}
                                    // /VS Code/react/src/app/st-1.jpg  
                                    />
                                </div>
                                <div className='w-[27vw] h-full pl-[2vw]'>
                                    <div id='filler' className='h-[7.5vw] w-full'></div>
                                    <div className=' w-full  font-bold text-[#dda62f] text-[2.5vw] underline '>Dr Shams Qazi</div>
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
                        <div id='courses_display_area' className=' mx-10 rounded-tl-[15px] rounded-tr-[15px] bg-[#d4e1dd] '>
                            <div id='How-to-chose-classes-options-teacher' className='bg-[#4a4e4d] text-[#949994c1] rounded-tl-[10px] rounded-tr-[10px] flex'
                             onClick={changeSection}>
                                <h1 id='op-1' className='pl-[2.65vw] pt-[1.5vw] pr-[1vw] pb-[.5vw] font-bold text-[2.5vw] rounded-tl-[10px] inline-block bg-[#d4e1dd] text-[#212221c1] border-[#656565]'>Todays Classes</h1>
                                <h1 id="op-2" className='pl-[1.75vw] pt-[1.5vw] pr-[1.5vw] pb-[.5vw] font-bold text-[2.5vw] inline-block  text-[#bec4be] text-[#949994c1] border-[#656565]'>Classes</h1>
                            </div>


                            <div id='courses_section_TodaysClasses' className='pl-[1vw] py-[5vw] ml-[2vw] mb-[1vw] relative flex flex-wrap'>
                                <div id='course-item' className='h-[10vw] w-[30vw] px-[1vw] mb-[1.5vw] border-b-[2px] border-[#000000] flex justify-between
                                                                 text-[#212221c1]  transition-all ease-in-out duration-[335ms] 
                                                                 hover:bg-stone-700 hover:text-[#bec4be]'
                                    onClick={() => {
                                        window.location.href = "/DTCourseD";
                                    }}
                                >
                                    <div className=' pt-[2vw]'>
                                        <h1 className='pt-[1vw] mb-[.75vw] font-semibold text-[2.65vw]'>Name</h1>
                                        <div className=' text-[1vw]'>3rd-Semester</div>
                                    </div>
                                    <div className='flex justify-center content-center flex-wrap pt-[2vw]' >
                                        <div>A%</div>
                                    </div>
                                </div>
                                <div id='course-item' className='h-[10vw] w-[30vw] px-[1vw] mb-[1.5vw] border-b-[2px] border-[#000000] flex justify-between
                                                                 text-[#212221c1]  transition-all ease-in-out duration-[335ms] 
                                                                 hover:bg-stone-700 hover:text-[#bec4be]'
                                    onClick={() => {
                                        window.location.href = "/DTCourseD";
                                    }}
                                >
                                    <div className=' pt-[2vw]'>
                                        <h1 className='pt-[1vw] mb-[.75vw] font-semibold text-[2.65vw]'>Name</h1>
                                        <div className=' text-[1vw]'>3rd-Semester</div>
                                    </div>
                                    <div className='flex justify-center content-center flex-wrap pt-[2vw]' >
                                        <div>A%</div>
                                    </div>
                                </div>
                                <div id='course-item' className='h-[10vw] w-[30vw] px-[1vw] mb-[1.5vw] border-b-[2px] border-[#000000] flex justify-between
                                                                 text-[#212221c1]  transition-all ease-in-out duration-[335ms] 
                                                                 hover:bg-stone-700 hover:text-[#bec4be]'
                                    onClick={() => {
                                        window.location.href = "/DTCourseD";
                                    }}
                                >
                                    <div className=' pt-[2vw]'>
                                        <h1 className='pt-[1vw] mb-[.75vw] font-semibold text-[2.65vw]'>Name</h1>
                                        <div className=' text-[1vw]'>3rd-Semester</div>
                                    </div>
                                    <div className='flex justify-center content-center flex-wrap pt-[2vw]' >
                                        <div>A%</div>
                                    </div>
                                </div>
                                <div id='course-item' className='h-[10vw] w-[30vw] px-[1vw] mb-[1.5vw] border-b-[2px] border-[#000000] flex justify-between
                                                                 text-[#212221c1]  transition-all ease-in-out duration-[335ms] 
                                                                 hover:bg-stone-700 hover:text-[#bec4be]'
                                    onClick={() => {
                                        window.location.href = "/DTCourseD";
                                    }}
                                >
                                    <div className=' pt-[2vw]'>
                                        <h1 className='pt-[1vw] mb-[.75vw] font-semibold text-[2.65vw]'>Name</h1>
                                        <div className=' text-[1vw]'>3rd-Semester</div>
                                    </div>
                                    <div className='flex justify-center content-center flex-wrap pt-[2vw]' >
                                        <div>A%</div>
                                    </div>
                                </div>
                                
                                <div id='filler' className='h-[9vw] bg-transparent'></div>
                            </div>

                            <div id='courses_section_Classes' className='pl-[1vw] py-[5vw] ml-[2vw] mb-[1vw] relative hidden flex-wrap'>
                                <div id='course-item' className='h-[10vw] w-[30vw] px-[1vw] mb-[1.5vw] border-b-[2px] border-[#000000] flex justify-between
                                                                 text-[#212221c1]  transition-all ease-in-out duration-[335ms] 
                                                                 hover:bg-red-600 hover:text-[#bec4be]'
                                    onClick={() => {
                                        window.location.href = "/DTCourseD";
                                    }}
                                >
                                    <div className=' pt-[2vw]'>
                                        <h1 className='pt-[1vw] mb-[.75vw] font-semibold text-[2.65vw]'>Name</h1>
                                        <div className=' text-[1vw]'>3rd-Semester</div>
                                    </div>
                                    <div className='flex justify-center content-center flex-wrap pt-[2vw]' >
                                        <div>A%</div>
                                    </div>
                                </div>
                                <div id='course-item' className='h-[10vw] w-[30vw] px-[1vw] mb-[1.5vw] border-b-[2px] border-[#000000] flex justify-between
                                                                 text-[#212221c1]  transition-all ease-in-out duration-[335ms] 
                                                                 hover:bg-red-600 hover:text-[#bec4be]'
                                    onClick={() => {
                                        window.location.href = "/DTCourseD";
                                    }}
                                >
                                    <div className=' pt-[2vw]'>
                                        <h1 className='pt-[1vw] mb-[.75vw] font-semibold text-[2.65vw]'>Name</h1>
                                        <div className=' text-[1vw]'>3rd-Semester</div>
                                    </div>
                                    <div className='flex justify-center content-center flex-wrap pt-[2vw]' >
                                        <div>A%</div>
                                    </div>
                                </div>
                                <div id='course-item' className='h-[10vw] w-[30vw] px-[1vw] mb-[1.5vw] border-b-[2px] border-[#000000] flex justify-between
                                                                 text-[#212221c1]  transition-all ease-in-out duration-[335ms] 
                                                                 hover:bg-red-600 hover:text-[#bec4be]'
                                    onClick={() => {
                                        window.location.href = "/DTCourseD";
                                    }}
                                >
                                    <div className=' pt-[2vw]'>
                                        <h1 className='pt-[1vw] mb-[.75vw] font-semibold text-[2.65vw]'>Name</h1>
                                        <div className=' text-[1vw]'>3rd-Semester</div>
                                    </div>
                                    <div className='flex justify-center content-center flex-wrap pt-[2vw]' >
                                        <div>A%</div>
                                    </div>
                                </div>
                                <div id='course-item' className='h-[10vw] w-[30vw] px-[1vw] mb-[1.5vw] border-b-[2px] border-[#000000] flex justify-between
                                                                 text-[#212221c1]  transition-all ease-in-out duration-[335ms] 
                                                                 hover:bg-red-600 hover:text-[#bec4be]'
                                    onClick={() => {
                                        window.location.href = "/CourseS";
                                    }}
                                >
                                    <div className=' pt-[2vw]'>
                                        <h1 className='pt-[1vw] mb-[.75vw] font-semibold text-[2.65vw]'>Name</h1>
                                        <div className=' text-[1vw]'>3rd-Semester</div>
                                    </div>
                                    <div className='flex justify-center content-center flex-wrap pt-[2vw]' >
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

// now what to do : Make pages for marking attendence of a specific class as well as a page for details of attendence of whole class.