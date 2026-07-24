import React from 'react';
import { FaEye, FaRegCalendar } from 'react-icons/fa';

const BoxBlog = () => {
    return (
        <div className="flex max-sm:flex-col  gap-8 ">
          <img
            className="h-40 w-56"
            src="/images/blogs/1.png"
            alt=""
          />
          <div className="flex flex-col gap-2">
            <h2 className="text-[20px] font-bold">
              چگونه مطالعه موثر را برای شما آسانتر کنیم.
            </h2>
            <p className="text-sm">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
              چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون
              بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و
              برای شرایط فعلی تکنولوژی مورد.
            </p>
            <div className="flex items-center justify-start gap-4">
              <div
                className="flex justify-center items-center gap-2  
                        text-[#2196F3] "
              >
                <span className="text-xl">
                  {" "}
                  <FaEye />{" "}
                </span>
                <span> 22 بازدید </span>
              </div>

              <div
                className="flex justify-center items-center gap-2  py-3.5 px-6
                        text-[#2196F3] "
              >
                <span className="text-xl">
                  {" "}
                  <FaRegCalendar />{" "}
                </span>
                <span> 1402/7/2 </span>
              </div>
            </div>
          </div>
        </div>
    );
};

export default BoxBlog;
