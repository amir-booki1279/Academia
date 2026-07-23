import React from 'react';
import Title from '../../components/common/Title';
import BoxService from '../../components/common/BoxService';

const Services = () => {
    return (
        <div className='max-w-7xl mx-auto md:w-full mt-20 pb-100'>
            <Title title={'خدمات ما'}/>

            {/* ServiceBox */}
            <div className='w-full grid grid-cols-3 max-md:grid-cols-2 max-md:px-4 max-sm:grid-cols-1 flex-wrap gap-8 '>
                    <BoxService img={"/images/services/briefcase.png"} text={'سهولت دسترسی و دریافت  خدمات از همه ی نقاط کشور با کمترین تعرفه و بدون نیاز  مراجعه حضوری در کل فرایند ثبت '} title={'سادگی خدمات '} />

                    <BoxService img={"/images/services/favorite-chart.png"} text={'سهولت دسترسی و دریافت خدمات از همه ی نقاط کشور با کمترین تعرفه و بدون نیاز مراجعه حضوری در کل فرایند ثبت'} title={'فرصت های شغلی'} />

                    <BoxService img={"/images/services/personalcard.png"} text={'سهولت دسترسی و دریافت  خدمات از همه ی نقاط کشور با کمترین تعرفه و بدون نیاز  مراجعه حضوری در کل فرایند ثبت '} title={' مدرک معتبر '} />
            </div>
        </div>
    );
};

export default Services;