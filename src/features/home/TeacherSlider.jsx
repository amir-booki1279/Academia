import {Swiper, SwiperSlide} from "swiper/react";
import Title from "../../components/common/Title";
import {Autoplay, Navigation,Pagination} from 'swiper/modules'
import TeacherCart from "../../components/common/TeacherCart";
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'





const teachers = [
    {
        img:'/images/teachers/1.png',
        name:'بهاره یزدانی',
        job:'طراحی محصول و رابط کاربری'
    },
    {
        img:'/images/teachers/2.png',
        name:'بهاره یزدانی',
        job:'طراحی محصول و رابط کاربری'
    },{
        img:'/images/teachers/3.png',
        name:'بهاره یزدانی',
        job:'طراحی محصول و رابط کاربری'
    },{
        img:'/images/teachers/4.png',
        name:'بهاره یزدانی',
        job:'طراحی محصول و رابط کاربری'
    },
    {
        img:'/images/teachers/4.png',
        name:'بهاره یزدانی',
        job:'طراحی محصول و رابط کاربری'
    },{
        img:'/images/teachers/4.png',
        name:'بهاره یزدانی',
        job:'طراحی محصول و رابط کاربری'
    },
]






export default function TeacherSlider() {
  return (
    <div className="bg-[#E3F2FD] h-187.5 max-md:mt-20">
      <div className="max-w-7xl mx-auto md:w-full -mt-30 pb-200  max-sm:px-7 px-5">
        <div className="pt-30">
            <Title title={'اساتید برتر '}/>
        </div>
        <div className="flex justify-center items-center w-full">
              <Swiper 
              className="py-16!"
              modules={[Navigation,Pagination,Autoplay]}
              loop={true}
              autoplay={{
                delay:3000,
                disableOnInteraction:false
              }}
              
              slidesPerView={4}
              spaceBetween={30}
              navigation
              pagination={{clickable:true}}
              breakpoints={{
                0:{slidesPerView:1},
                640:{slidesPerView:2},
                990:{slidesPerView:4}
              }}
              >             
                {
                    teachers.map((t,i)=>(
                        <SwiperSlide key={i}>
                                <div className={`w-full ${i % 2 === 0 ? '-translate-y-15' : ''}`}>
                                     <TeacherCart/>
                                </div>
                        </SwiperSlide>
                    ))
                }
              
                
                 



              </Swiper>
        </div>
      </div>
    </div>
  );
}
