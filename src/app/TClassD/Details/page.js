import React from 'react';

function CDetails() {

    let i = 0;

    let data = [
        { id: 1, name: "Haider" }, { id: 2, name: "Haider" }, { id: 3, name: "Haider" },
        { id: 1, name: "Haider" }, { id: 2, name: "Haider" }, { id: 3, name: "Haider" }
    ]

    return (
        <div id='Dashboard_container' className='w-full relative'>
            <div id='main' className='pt-[10vw] bg-[#185943] relative '>

                <div id='Attendence' className=' min-h-[25vw] pb-[5vw] mx-10 rounded-tl-[15px] rounded-tr-[15px] bg-[#d4e1dd]'>
                    <div id='' className='bg-[#4a4e4d]   rounded-tl-[15px] rounded-tr-[10px] flex'>
                        <div className='w-[27vw] h-full pl-[3vw] py-[1vw] text-[1.25vw] font-medium bg-[#d4e1dd] text-[#212221c1] rounded-tl-[15px]'>
                            <span className='font-bold ml-[]'>Name: </span><span>Haider Musavi</span><br/>
                            <span className='font-bold ml-[]'>S_id: </span><span>417101</span><br/>
                            <span className='font-bold ml-[]'>Departmet: </span><span>SEECS</span><br/>
                            <span className='font-bold ml-[]'>Course: </span><span>BSCS</span><br/>
                            {/* design the student info */}
                        </div>
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
                                            <td className='py-[.5vw] text-center font-semibold bg-[#e8e8e8] '>{d.id}</td>
                                            <td className='py-[.5vw] text-center font-semibold bg-[#e8e8e8] border-l-[2px] border-[#212221c1]'>{d.name}</td>
                                        </tr>)
                                }
                                else {
                                    i++
                                    return (
                                        <tr className='h-[3vw] whitespace-normal'>
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