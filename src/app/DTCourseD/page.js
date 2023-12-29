"use client"
import React from 'react';


function Dashboard() {

    const markAtten = (obj) => {
        let elem = obj.target
        if (elem.innerText == "P") {
            elem.style.background = "red"
            elem.innerText = "A"
            console.log(elem.classList)
        }
        else if (elem.style.background == "red") {
            elem.style.background = "#187db4"
            elem.innerText = "P"
            console.log(elem.classList)
        }

    }

    let i = 0
    let data = [
        { id: 1, name: "Haider" }, { id: 2, name: "Haider htftyfu hgjyguggghg hjgygjhg gjhg" }
    ]
    let date = new Date()


    return (
        <>
            <div id='Dashboard_container' className='relative'>
                <div id='main' className='min-h-[96vh] w-full pt-[12vw] bg-[#185943]'>

                    <div id='courses_display_area' className='min-h-[35vw] mx-10 rounded-tl-[15px] rounded-tr-[15px] bg-[#d4e1dd] '>

                        <div id='' className='bg-[#4a4e4d] text-[#949994c1] rounded-tl-[10px] rounded-tr-[10px] flex'>
                            <h1 id='op-1' className='pl-[3.65vw] pt-[1.5vw] pr-[2vw] pb-[.5vw] font-bold text-[2.5vw] rounded-tl-[10px] inline-block bg-[#d4e1dd] text-[#212221c1] border-[#656565]'>
                                Class Name + Cuurent Date {/* date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear()*/}
                            </h1>
                        </div>

                        <table className='mt-[7vw] ml-[10vw] text-[#212221c1]'>
                            <thead>
                                <tr className='bg-[#1c6e40] text-[#ffffff] text-[2vw] font-[600] border-b-[2px] border-[#bebebe2f] '>
                                    <td className='px-[2vw] pt-[1vw] pb-[0.25vw]'>#</td>
                                    <td className='w-[8vw] px-[3vw] pt-[1vw] pb-[0.25vw] border-l-[2px] border-[#ffffffd1]'>ID</td>
                                    <td className='w-[15vw] px-[6vw] pt-[1vw] pb-[0.25vw] border-l-[2px] border-[#ffffffd1]'>Name</td>
                                    <td className='px-[3vw] pt-[1vw] pb-[0.25vw] rounded-tr-[10px] border-l-[2px] border-[#ffffffd1]'>Attendence</td>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((d) => {
                                    if (i % 2 == 0) {
                                        i++
                                        return (
                                            <tr className='h-[3vw] whitespace-normal'>
                                                <td className='py-[.5vw] text-center font-semibold bg-[#e8e8e8] '>{d.id}</td>
                                                <td className='py-[.5vw] text-center font-semibold bg-[#e8e8e8] border-l-[2px] border-[#212221c1]'>{d.id}</td>
                                                <td className='py-[.5vw] text-center font-semibold bg-[#e8e8e8] border-l-[2px] border-[#212221c1]'>Haider Musavi </td>
                                                <td className='py-[.5vw] text-center font-semibold bg-[#e8e8e8] border-l-[2px] border-[#212221c1]'>
                                                    <button className=' px-[2vw] py-[.5vw] rounded-[4px] bg-[#187db4] text-[#ffffff]
                                                                    hover:bg-[#3a89b4] '
                                                        onClick={markAtten}>
                                                        P
                                                    </button>
                                                </td>
                                            </tr>)
                                    }
                                    else {
                                        i++
                                        return (
                                            <tr>
                                                <td className='py-[.5vw] text-center font-semibold bg-[#ffffff] '>{d.id}</td>
                                                <td className='py-[.5vw] text-center font-semibold bg-[#ffffff] border-l-[2px] border-[#212221c1]'>{d.id}</td>
                                                <td className='py-[.5vw] text-center font-semibold bg-[#ffffff] border-l-[2px] border-[#212221c1]'>{d.id}</td>
                                                <td className='py-[.5vw] text-center font-semibold bg-[#ffffff] border-l-[2px] border-[#212221c1]'>
                                                    <button className=' px-[2vw] py-[.5vw] rounded-[4px] bg-[#187db4] text-[#ffffff]
                                                                    hover:bg-[#3a89b4] '
                                                        onClick={markAtten}>
                                                        P
                                                    </button>
                                                </td>
                                            </tr>)
                                    }
                                })}
                            </tbody>
                        </table>


                        <div id='' className='min-h-[30vw] pl-[1vw] pt-[5vw] ml-[2vw] relative flex flex-wrap'>

                        </div>


                    </div>
                </div>
            </div>
        </>
    );
}

export default Dashboard;
