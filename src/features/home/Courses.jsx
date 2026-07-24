import React from "react";
import Title from "../../components/common/Title";
import ProductCard from "../../components/common/ProductCard";
import Button from '../../components/common/Button';

const Courses = () => {
  return (
    <div className="max-w-7xl mx-auto md:w-full mt-20  max-sm:px-5">
      <Title title={"دوره‌های اموزشی "} />
      <div className="w-full grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-8">
        <ProductCard
          img={"/images/courses/react.png"}
          title={"دوره جامع React JS صفر تا صد"}
          lessonsNumber={202}
          clockNumber={14}
          date={"ا اذر 1402"}
          teacherName={" دکتر بحرالعلوم"}
          studentNumber={255}
          like={12}
          price={"500,000"}
        />
        
        <ProductCard
          img={"/images/courses/html.png"}
          title={"دوره جامع HTML 5 صفر تا صد"}
          lessonsNumber={202}
          clockNumber={14}
          date={"ا اذر 1402"}
          teacherName={" دکتر بحرالعلوم"}
          studentNumber={255}
          like={12}
          price={"500,000"}
        />
        <ProductCard
          img={"/images/courses/python.png"}
          title={"دوره جامع pyton صفر تا صد"}
          lessonsNumber={202}
          clockNumber={14}
          date={"ا اذر 1402"}
          teacherName={" دکتر بحرالعلوم"}
          studentNumber={255}
          like={12}
          price={"500,000"}
        /><ProductCard
          img={"/images/courses/net.png"}
          title={"  دوره جامع .net core صفر تا صد"}
          lessonsNumber={202}
          clockNumber={14}
          date={"ا اذر 1402"}
          teacherName={" دکتر بحرالعلوم"}
          studentNumber={255}
          like={12}
          price={"500,000"}
        />
       
      </div>

        <div className="flex justify-center mt-10">
      <Button title={'مشاهده همه'}/>

        </div>

    </div>
  );
};

export default Courses;
