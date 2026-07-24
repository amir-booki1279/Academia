import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-[#252641] py-14 mt-25">
      <div className="max-w-7xl mx-auto md:w-full mt-20 max-lg:px-4 ">
        <div className="flex flex-col mb-10 items-center gap-3 text-white">
          <div className="flex items-center gap-3 ">
            <img
              className="w-8 h-8"
              src="/images/home/Group 33.png"
              alt=""
            />
            <h2 className="text-[32px]  font-bold">آکادمیا</h2>
          </div>
          <p className="text-[18px] font-normal max-w-118 text-center">
            هدف ما سهولت دسترسی و دریافت خدمات از همه ی نقاط کشور با
            کمترین تعرفه و بدون نیاز مراجعه حضوری در کل فرایند ثبت
          </p>
        </div>
        <div className="flex flex-col gap-6 items-center text-white">
            <span>برای دریافت اخبار از طریق ایمیل ثبت نام  کنید</span>
            <div className="flex gap-2 justify-between items-center py-5 h-15   px-3 bg-white w-120 rounded-[50px]">
                    <button className="py-2.75 px-4 bg-[#2196F3] rounded-[80px]">
                        خبرم کن
                    </button>
                    <input placeholder="Example@gmail.com" className="h-13 rounded-[80px] py-2.75 w-[80%] text-slate-600 placeholder:text-left px-2" type="text" />
            </div>
            <div className="flex justify-start items-center gap-20 mt-7 text-white/60 ">
                    <span>دوره های اموزشی </span>
                    <span className="relative after:border after:border-white/60 after:h-6 after:absolute after:top-0 after:-left-10 before:border before:border-white/60 before:h-6 before:absolute before:top-0 before:-right-10">درباره ما  </span>
                    <span>  قوانین و مقررات </span>

            </div>
            <div className="flex justify-center items-center h-16 w-220 max-lg:w-full bg-[#00000033]/40 mt-9 ">
                <p>
                    تمام حقوق مادی و معنوی این مجموعه متعلق به Academia.ir میباشد
                </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
