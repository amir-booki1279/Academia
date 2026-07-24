import React from "react";
import BoxService from "../../components/common/BoxService";

const Category = () => {
  return (
    <div className="w-full relative">
        <div className="max-w-7xl mx-auto md:w-full mt-100  max-xl:mt-70 max-sm:px-7 px-5">
      <div className="grid grid-cols-2 gap-32.5 relative max-xl:grid-cols-1">
        <div className="flex flex-col gap-3 max-xl:items-center">
          <h2 className="text-[40px] font-bold relative">
            دسته بندی‌ دوره‌ها
            
            {/* Shape */}
            <div className="w-40 h-40 bg-[#FFF5DB] rounded-br-[100px] absolute -right-12.5 -top-12.5 -rotate-90 -z-10"></div>
          </h2>
          <p className="max-xl:w-[50%]">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
            و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه
            روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای
            شرایط فعلی تکنولوژی مورد نیاز
          </p>
        </div>

        <div className="flex items-center gap-8 max-sm:flex-col">
          <div className="flex flex-col gap-8 -translate-y-73 max-xl:translate-0">
            <BoxService
              img={"/images/categories/data.png"}
              text={
                "سهولت دسترسی و دریافت  خدمات از همه ی نقاط کشور با کمترین تعرفه و بدون نیاز  مراجعه حضوری در کل فرایند ثبت "
              }
              title={" تحلیل داده "}
            />
            <BoxService
              img={"/images/categories/global-edit.png"}
              text={
                "سهولت دسترسی و دریافت  خدمات از همه ی نقاط کشور با کمترین تعرفه و بدون نیاز  مراجعه حضوری در کل فرایند ثبت "
              }
              title={" امنیت شبکه "}
            />
          </div>
          <div className="flex flex-col gap-8 -translate-y-57 max-xl:translate-0">
            <BoxService
              img={"/images/categories/game.png"}
              text={
                "سهولت دسترسی و دریافت  خدمات از همه ی نقاط کشور با کمترین تعرفه و بدون نیاز  مراجعه حضوری در کل فرایند ثبت "
              }
              title={" بازی "}
            />
            <BoxService
              img={"/images/categories/bezier.png"}
              text={
                "سهولت دسترسی و دریافت  خدمات از همه ی نقاط کشور با کمترین تعرفه و بدون نیاز  مراجعه حضوری در کل فرایند ثبت "
              }
              title={" وب دیزاین "}
            />
          </div>
        </div>

      </div>
    </div>

         {/* Shape */}
        <div className="bg-[#E3F2FD] h-120 w-[58%] absolute left-0 -top-40 -z-20 rounded-tr-[150px]"></div>

    </div>
  );
};

export default Category;
