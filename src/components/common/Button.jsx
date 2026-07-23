import React from 'react';

const Button = ({title}) => {
    return (
        <button className='py-3 px-8 bg-[#2196F3] text-white font-semibold rounded-[80px] hover:shadow-sm hover:shadow-[#2136f3]/50 '>
            {title}
        </button>
    );
};

export default Button;