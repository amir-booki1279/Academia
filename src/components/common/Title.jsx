import React from 'react';

const Title = ({title}) => {
    return (
        <div className="flex flex-col gap-2.5 mb-11 w-full justify-center items-center">
                    <h2 className='text-[40px] font-bold'> {title}</h2>
                    <div className='w-70 ' >
                        <img className='w-full' src="/images/home/Vector 20.png" alt="" />
                    </div>
            </div>
    );
};

export default Title;