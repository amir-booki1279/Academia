import React from 'react';
import { FaHeart, FaRegCalendar, FaRegClock } from 'react-icons/fa';
import { LuNotebookPen } from 'react-icons/lu';

const ProductCard = ({img,title,icon,lessonsNumber,clockNumber,date,teacherName,studentNumber,like,price}) => {
    return (
        <div className='flex flex-col p-4 justify-start gap-4.5 items-start bg-white rounded-3xl'>
            <img className='h-45 w-full' src={img} alt="" />
            <h2 className='text-base font-bold'> {title}</h2>

            <div className='w-full bg-slate-200 px-3 font-medium rounded-3xl flex justify-between items-center h-10'>
                  <div className='flex items-center gap-1.5 text-xs font-semibold'>
                        <span><LuNotebookPen/></span>

                        <span>{lessonsNumber} درس</span>
                  </div> 
                  <div className='flex items-center gap-1.5 text-xs font-semibold'>
                        <span><FaRegClock /></span>

                        <span>14 ساعت </span>
                  </div>  
                  <div className='flex items-center gap-1.5 text-xs font-semibold'>
                        <span><FaRegCalendar /></span>

                        <span> {date}</span>
                  </div>  
            </div>
            <div className='flex items-center justify-between w-full'>
                <h3 className='text-sm font-bold'>مدرس:  {teacherName}</h3>
                <h3 className='font-medium'>{studentNumber} دانش‌آموز</h3>
            </div>
            <div className="flex items-center justify-between w-full">
                    <div className='flex items-center gap-1.5 bg-red-100 rounded-full p-1 px-2'>
                        <FaHeart className='text-red-400'/>
                        <span className='text-red-400'>{like}</span>
                    </div>

                     <div className='flex items-center gap-1.5 '>
                        <span className='text-blue-500'>{price}</span>
                        <span className='text-xs'>تومان</span>
                    </div>
            </div>  
        </div>
    );
};

export default ProductCard;