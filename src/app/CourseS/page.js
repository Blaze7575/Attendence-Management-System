import React from 'react';

function CDetails() {

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
            <div id='main' className=' pt-[10vw] pl-[3vw] bg-[#185943] relative'>
                <div id='Course_info' className=' h-[5vw] rounded-tl-[10px] rounded-bl-[10px] bg-[white] flex content-center flex-wrap'>
                    <h2 className=' w-[90vw] ml-[2vw] mt-[.35vw] text-[2.4vw] underline text-[#212221c1] font-bold
                                    overflow-hidden text-ellipsis'>
                        Linear Algebra
                    </h2>
                </div>
                <div id='Attendence' className='w-full min-h-[25vw] mt-8 rounded-tl-[10px] rounded-bl-[10px] bg-[white] flex flex-wrap grow-0 shrink-0'>
                    <table id='Atable' className='mt-[2vw] mb-[6vw] ml-[5vw]  text-[#212221c1]'>
                        <thead>
                            <tr className='bg-[#1c6e40] text-[#ffffff] text-[2vw] font-bold border-b-[2px] border-[#bebebe2f] '>
                                <td className='px-[3vw] pt-[1vw] pb-[0.25vw]'>Date</td>
                                <td className='px-[3vw] pt-[1vw] pb-[0.25vw] rounded-tr-[10px] border-l-[2px] border-[#ffffffd1]'>Attendence</td>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((d) => {
                                if (i % 2 == 0) {
                                    i++
                                    return (
                                        <tr>
                                            <td className='py-[.20vw] text-center font-semibold bg-[#e8e8e8] '>{d.id}</td>
                                            <td className='py-[.20vw] text-center font-semibold bg-[#e8e8e8] border-l-[2px] border-[#212221c1]'>{d.name}</td>
                                        </tr>)
                                }
                                else {
                                    i++
                                    return (
                                        <tr>
                                            <td className='py-[.20vw] text-center font-semibold bg-[#ffffff] '>{d.id}</td>
                                            <td className='py-[.20vw] text-center font-semibold bg-[#ffffff] border-l-[2px] border-[#212221c1]'>{d.name}</td>
                                        </tr>)
                                }
                            })}
                        </tbody>
                    </table>
                </div>
                <div id='filler' className=' h-[50px]'></div>
            </div>
        </div>
    );
}

export default CDetails;