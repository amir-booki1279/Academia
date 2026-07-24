import React from "react";
import Title from "../../components/common/Title";
import { FaEye, FaRegCalendar } from "react-icons/fa";
import BoxBlog from "../../components/common/BoxBlog";
import Button from '../../components/common/Button'

const Blogs = () => {
  return (
    <div className="max-w-7xl mx-auto md:w-full mt-20 max-lg:px-4 ">
      <Title title={" اخبار و مقالات"} />
      <div className="grid grid-cols-2 gap-10 w-full max-xl:grid-cols-1">
        <div className="flex flex-col gap-8 max-xl:items-center">
          <img
            className="w-154 h-85"
            src="/images/blogs/image.png"
            alt=""
          />
          <div className="flex items-center justify-start gap-4 max-xl:justify-center">
            <div
              className="flex justify-center items-center gap-2 bg-[#DAEEFF] py-3.5 px-6
                        text-[#2196F3] rounded-[80px]"
            >
              <span className="text-xl">
                {" "}
                <FaEye />{" "}
              </span>
              <span> 22 بازدید </span>
            </div>

            <div
              className="flex justify-center items-center gap-2 bg-[#DAEEFF] py-3.5 px-6
                        text-[#2196F3] rounded-[80px]"
            >
              <span className="text-xl">
                {" "}
                <FaRegCalendar />{" "}
              </span>
              <span> 1402/7/2 </span>
            </div>
          </div>
          <h2 className="text-4xl font-bold">
            چگونه مطالعه موثر را برای شما آسانتر کنیم.
          </h2>
          <p className="max-xl:max-w-[70%]">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
            و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه
            روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای
            شرایط فعلی تکنولوژی مورد.
          </p>
        </div>

           {/* Left */}
            <div className="flex flex-col gap-10 max-xl:max-w-[70%] max-xl:mx-auto">
            <BoxBlog/>
            <BoxBlog/>
            <BoxBlog/>
            </div>

      </div>
      <div className="flex justify-center mt-7">
        <Button title={'مشاهده همه'}/>
      </div>
    </div>
  );
};

export default Blogs;
