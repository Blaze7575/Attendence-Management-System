"use client"
import React from 'react';

function CDetails() {

    const compose = () => {
        const elem = document.getElementById("msg-container");
        elem.classList.toggle("hidden");
    }

    const sendMsg = () => {
        const elem = document.getElementById("msg-container");
        elem.classList.toggle("hidden")
    }

    const hideMsg = (obj) => {

        const listof = [...document.getElementsByTagName("table")[0].children[1].children]
        let tr = []
        listof.forEach((element) => {
            tr.push(element.children[1].children[0].children[1])
        });
        console.log(tr)
        console.log(obj.target)
        console.log(tr.includes(obj.target))
        if (!tr.includes(obj.target)) {
            const elem = document.getElementById("msg-container");
            elem.classList.add("hidden")
        }
    }

    let i = 0;

    let data = [
        { id: 1, name: "Haider" }, { id: 2, name: "Haider" }, { id: 3, name: "Haider" },
        { id: 1, name: "Haider" }, { id: 2, name: "Haider" }, { id: 3, name: "Haider" },
        { id: 1, name: "Haider" }, { id: 2, name: "Haider" }, { id: 3, name: "Haider" },
        { id: 1, name: "Haider" }, { id: 2, name: "Haider" }, { id: 3, name: "Haider" },
        { id: 1, name: "Haider" }, { id: 2, name: "Haider" }, { id: 3, name: "Haider" },
        { id: 1, name: "Haider" }, { id: 2, name: "Haider" }, { id: 3, name: "Haider" },
        { id: 1, name: "Haider" }, { id: 2, name: "Haider" }, { id: 3, name: "Haider" },
        { id: 1, name: "Haider" }, { id: 2, name: "Haider" }, { id: 3, name: "Haider" },
        { id: 1, name: "Haider" }, { id: 2, name: "Haider" }, { id: 3, name: "Haider" }
    ]

    return (
        <div id='Dashboard_container' className='w-full relative'>
            <div id='main' className=' pt-[10vw] bg-[#185943] relative'
                onClick={hideMsg}>
                <div id='Attendence' className=' min-h-[25vw] pb-[5vw] mt-8 mx-10 rounded-tl-[15px] rounded-tr-[15px] bg-[#d4e1dd]'>
                    <div id='' className='bg-[#4a4e4d] text-[#949994c1] rounded-tl-[10px] rounded-tr-[10px] flex'>
                        <h1 id='op-1' className='pl-[3.65vw] pt-[1.5vw] pr-[2vw] pb-[.5vw] font-bold text-[2.5vw] rounded-tl-[10px] inline-block bg-[#d4e1dd] text-[#212221c1] border-[#656565]'>
                            Class Name
                        </h1>
                    </div>
                    <table id='Atable' className='mt-[6.5vw] ml-[10vw]  text-[#212221c1]'>
                        <thead>
                            <tr className='bg-[#1c6e40] text-[#ffffff] text-[2vw] font-[600] border-b-[2px] border-[#bebebe2f] '>
                                <td className='px-[3vw] pt-[1vw] pb-[0.25vw]'>Date</td>
                                <td className='px-[3vw] pt-[1vw] pb-[0.25vw] rounded-tr-[10px] border-l-[2px] border-[#ffffffd1]'>Attendence</td>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((d) => {
                                if (i % 2 == 0) {
                                    i++
                                    return (
                                        <tr className='h-[3vw] whitespace-normal'>
                                            <td className='py-[.5vw] pt-[.8vw] text-center font-semibold bg-[#e8e8e8] '>{d.id}</td>
                                            <td className='py-[.5vw] text-center font-semibold bg-[#e8e8e8] border-l-[2px] border-[#212221c1]'>
                                                <div className='flex justify-between'>
                                                    <div className='ml-[6.5vw] pt-[.1vw] inline-block'>Present</div>
                                                    <button className='px-[.5vw] mr-[.3vw] bg-[#187db4] text-[white] rounded-[4px] overflow-hidden'
                                                        onClick={compose}
                                                    >
                                                        req
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>)
                                }
                                else {
                                    i++
                                    return (
                                        <tr className='h-[3vw] whitespace-normal'>
                                            <td className='py-[.20vw] pt-[.8vw] text-center font-semibold bg-[#ffffff] '>{d.id}</td>
                                            <td className='py-[.20vw] text-center font-semibold bg-[#ffffff] border-l-[2px] border-[#212221c1]'>
                                                <div className='flex justify-between'>
                                                    <div className='ml-[6.5vw] pt-[.1vw] inline-block'>Present</div>
                                                    <button className='px-[.5vw] mr-[.3vw] bg-[#187db4] text-[white] rounded-[4px] overflow-hidden'
                                                        onClick={compose}>
                                                        req
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>)
                                }
                            })}
                        </tbody>
                    </table>
                </div>
                
                <div id='filler' className=' h-[50px]'></div>

            </div>
            <div id='msg-container' className='fixed bottom-[1vw] right-[1vw] hidden'>
                <textarea id='msg' className='h-[25vw] w-[50vw] p-[1vw] rounded-tr-[8px] rounded-tl-[8px] bg-[white] text-[black] outline-none overflow-scroll' />
                <div className='h-[3vw] w-[50vw] bg-[white] rounded-bl-[10px] flex justify-end'>
                    <button className='px-[1vw] mr-[.3vw] my-[.3vw]  bg-[#187db4] text-[white] rounded-[4px] overflow-hidden'
                        onClick={sendMsg}>
                        send
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CDetails;