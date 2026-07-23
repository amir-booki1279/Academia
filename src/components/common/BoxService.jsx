import React from 'react';

const BoxService = ({img,title,text}) => {
    return (
       <div className="flex flex-col gap-4 px-8 py-10 bg-fuchsia-50 rounded-3xl justify-center items-center hover:shadow-md hover:shadow-white/50">
                        <img className='w-20 h-20' src={img} alt="" />
                        <h2 className='text-2xl font-extrabold'> {title}</h2>
                        <p className='text-sm font-medium'>{text} </p>
                    </div>
    );
};

export default BoxService;