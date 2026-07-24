import React from "react";
import { Link } from "react-router-dom";
import Button from "../common/Button";
import { useState } from "react";
import BoxHeader from "../common/BoxHeader";

const Header = () => {
  const [show, setShow] = useState(false);

  return (
    <div className='w-full h-auto pb-25  bg-[url("/images/home/header-bg.png")] bg-cover  bg-no-repeat bg-position-[center_35%] rounded-br-[350px] rounded-bl-[350px] '>
      {/* Header Top */}
      <div className="max-w-7xl mx-auto pt-8 max-md:px-4 max-md:w-full">
        <div className="w-full  mx-auto h-12.5  ">
          <div className="flex  w-full h-full justify-between items-center">
            <div className="flex items-center gap-2">
              <img
                className="w-8 h-8"
                src="/images/home/Group 33.png"
                alt=""
              />
              <h2 className="text-[20px]  font-bold">آکادمیا</h2>
            </div>
            {/* Menu */}
            <ul className="flex items-center gap-12 max-md:hidden">
              <li>
                <Link className="font-semibold">  خانه </Link>
              </li>
              <li>
                <Link className="font-semibold"> دوره ها </Link>
              </li>
              <li>
                <Link className="font-semibold"> اساتید </Link>
              </li>
              <li>
                <Link className="font-semibold"> ارتباط باما </Link>
              </li>
              <li>
                <Link className="font-semibold "> اخبار مقالات </Link>
              </li>
            </ul>
            {/* Shop And Login */}
            <div className="flex items-center gap-4 max-md:hidden">
              <Link className="flex justify-center h-12.5 w-12.5  items-center bg-white rounded-full"></Link>
              <Button title={"ورود به حساب"} />
            </div>
            {/* buttom humberger */}
            <div className="justify-center items-center w-12.5 h-12.5 bg-white rounded-md hidden max-md:flex" onClick={() => setShow(!show)}>
              <button className=" "></button>
            </div>
          </div>

          {/* SideBar Mobile */}
          <div
            className={`${show ? "translate-x-0" : "translate-x-72"} transition-all duration-300 bg-white  top-0 right-0 h-screen w-2xs rounded-sm md:hidden max-md:fixed overflow-hidden fixed`}
          >
            <div className="flex flex-col py-16 ">
              <div className="flex items-center justify-center gap-3">
                <img
                  className="w-8 h-8"
                  src="/images/home/Group 33.png"
                  alt=""
                />
                <h2 className="text-[30px]  font-bold">آکادمیا</h2>
              </div>
              <ul className="flex flex-col items-start gap-4 m-10 transition-all duration-200 ">
                <li className="hover:pr-1">
                  <Link className="font-semibold"> دوره ها </Link>
                </li>
                <li className="hover:pr-1">
                  <Link className="font-semibold"> اساتید </Link>
                </li>
                <li className="hover:pr-1">
                  <Link className="font-semibold"> ارتباط باما </Link>
                </li>
                <li className="hover:pr-1">
                  <Link className="font-semibold ">
                    {" "}
                    اخبار مقالات{" "}
                  </Link>
                </li>
              </ul>
              <div className="flex items-center justify-center gap-4">
                <Link className="flex justify-center h-12.5 w-12.5  items-center bg-[#2196F3] rounded-full"></Link>
                <Button title={"ورود به حساب"} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*End Header Top */}

      {/* Header Box */}
        <section className="max-w-3xl mx-auto mt-20 max-md:px-4 relative max-md:w-full">
            <div className="flex flex-col gap-12 items-center">
                  <p className="text-2xl">پلتفرم اموزش طراحی وب</p>
                  <h2 className="text-[70px] font-bold w-full max-md:text-[60px]">مرجع اموزش برنامه نویسی</h2>
                  <p className="text-xl"> مرجع اموزش زنده و تعاملی دسترسی به بیش از هفت هزار ویدیوی اموزشی به زبان فارسی .</p>
                  <input className="py-3.75 px-5 bg-white outline-0 rounded-2xl w-full hover:shadow-md hover:drop-shadow-[rgba(0, 0, 0, 0.02)] cursor-pointer" type="text" placeholder="چی میخوای یاد بگیری ؟" />

                  <div className="grid grid-cols-3 max-md:grid-cols-2 max-md:px-4 max-sm:grid-cols-1 flex-wrap gap-8 w-full">
                      <BoxHeader title={'مدرس مجرب'} number={167}/>
                      <BoxHeader title={'مدرس مجرب'} number={167}/>
                      <BoxHeader title={'مدرس مجرب'} number={167}/>

                  </div>
            </div>
            {/* Icons around box */}
         <div className="max-xl:hidden">
             <div className="w-16 h-16 absolute top-20 -left-38">
                <img className="w-full h-full" src="/images/home/Vector.png" alt="" />
            </div>
            <div className="w-16 h-16 absolute top-50 -left-60">
                <img className="w-full h-full" src="/images/home/nodejs.png" alt="" />
            </div>
            <div className="w-16 h-16 absolute top-85 -left-38">
                <img className="w-full h-full" src="/images/home/vuejs.png" alt="" />
            </div>
             <div className="w-16 h-16 absolute top-120 -left-60">
                <img className="w-full h-full" src="/images/home/figma.png" alt="" />
            </div>
             <div className="w-16 h-16 absolute top-20 -right-38">
                <img className="w-full h-full" src="/images/home/react.png" alt="" />
            </div>
             <div className="w-16 h-16 absolute top-50 -right-60">
                <img className="w-full h-full" src="/images/home/angular.png" alt="" />
            </div>
             <div className="w-16 h-16 absolute top-85 -right-38">
                <img className="w-full h-full" src="/images/home/css.png" alt="" />
            </div>
             <div className="w-16 h-16 absolute top-120 -right-60">
                <img className="w-full h-full" src="/images/home/html.png" alt="" />
            </div>
         </div>
        </section>
      {/*End Header Box */}
      

    </div>
  );
};

export default Header;
