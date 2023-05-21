"use client";
import React from "react";

const NavigationMenuDemo = () => {
  return (
    <div className="bg-[#475569]">
      <div className="flex justify-center items-center text-white">
        <div className="text-[6px] md:text-[12px] lg:text-[15px] font-medium outline-none focus:outline-none cursor-pointer md:min-w-32 flex items-center bg-transparent px-1 md:px-3 py-1">
          Trang chủ
        </div>

        <div className="group inline-block smm:hidden sm:block md:block lg:block">
          <button className="outline-none focus:outline-none md:min-w-32 flex items-center font-medium  bg-transparent px-3 py-1">
            <span className="flex-1 pr-1 cursor-default text-[6px] md:text-[12px] lg:text-[15px]">
              Giới thiệu
            </span>
            <span>
              <svg
                className="h-2 w-2 md:h-4 md:w-4 transform fill-current transition
                    duration-150 ease-in-out group-hover:-rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </span>
          </button>
          <ul
            className="min-w-32 absolute  origin-top scale-0 transform rounded-sm 
                    bg-slate-500 transition z-50 duration-150 ease-in-out group-hover:scale-100"
          >
            <li className="rounded-sm px-3 py-1 cursor-pointer hover:bg-slate-600">
              Giới thiệu về IIT
            </li>
            <li className="rounded-sm px-3 py-1 cursor-pointer hover:bg-slate-600">
              Sứ mạng, tầm nhìn
            </li>
            <li className="rounded-sm px-3 py-1 cursor-pointer hover:bg-slate-600">
              Cơ cấu tổ chức
            </li>
          </ul>
        </div>

        <div className="group inline-block smm:hidden sm:block md:block lg:block">
          <button className="outline-none focus:outline-none md:min-w-32 flex items-center font-medium  bg-transparent px-3 py-1">
            <span className="flex-1 pr-1 cursor-default text-[6px] md:text-[12px] lg:text-[15px]">
              Đào tạo
            </span>
            <span>
              <svg
                className="h-2 w-2 md:h-4 md:w-4 transform fill-current transition
                    duration-150 ease-in-out group-hover:-rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </span>
          </button>
          <ul
            className="min-w-32 absolute origin-top z-50 scale-0 transform rounded-sm 
                    bg-slate-500 transition duration-150 ease-in-out group-hover:scale-100"
          >
            <li className="rounded-sm px-3 py-1 cursor-pointer hover:bg-slate-600">
              Chương trình đào tạo
            </li>
            <li className="rounded-sm px-3 py-1 cursor-pointer hover:bg-slate-600">
              Khóa học
            </li>
          </ul>
        </div>

        <div className="group inline-block">
          <button className="outline-none focus:outline-none  px-3 py-1 bg-transparent rounded-sm flex items-center md:min-w-32">
            <span className="pr-1 font-semibold cursor-default flex-1 text-[6px] md:text-[12px] lg:text-[15px]">
              Khoa học & Công nghệ
            </span>
            <span>
              <svg
                className="fill-current h-2 w-2 md:h-4 md:w-4 transform group-hover:-rotate-180 transition duration-150 ease-in-out"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </span>
          </button>

          <ul className="bg-slate-500 z-50  rounded-sm transform scale-0 group-hover:scale-100 absolute transition duration-150 ease-in-out origin-top w-52">
            <li className="rounded-sm px-3 cursor-pointer py-1 hover:bg-slate-600">
              Seminar - workshops
            </li>
            <li className="rounded-sm px-3 cursor-pointer py-1 hover:bg-slate-600">
              Chương trình dự án
            </li>
            <li className="rounded-sm relative px-3 py-1 hover:bg-slate-600">
              <button className="w-full text-left flex items-center outline-none focus:outline-none">
                <span className="flex-1 cursor-default">Sản phẩm KHCN</span>
                <span className="">
                  <svg
                    className="fill-current h-2 w-2 md:h-4 md:w-4 transition duration-150 ease-in-out"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </span>
              </button>
              <ul className="bg-slate-500 z-50 rounded-sm absolute top-0 right-[0.14rem]  transition duration-150 ease-in-out origin-top-left md:min-w-32 ">
                <li className="px-3 py-1 cursor-pointer hover:bg-slate-600">
                  Sản phẩm KHCN - CGCN
                </li>

                <li className="px-3 py-1 cursor-pointer hover:bg-slate-600">
                  Công bố khoa học
                </li>
                <li className="px-3 py-1 cursor-pointer hover:bg-slate-600">
                  Sách - Giáo trình
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="group inline-block smm:hidden sm:block md:block lg:block">
          <button className="outline-none focus:outline-none md:min-w-32 flex items-center font-medium  bg-transparent px-3 py-1">
            <span className="flex-1 pr-1 cursor-default text-[6px] md:text-[12px] lg:text-[15px]">
              Hợp tác
            </span>
            <span>
              <svg
                className="h-2 w-2 md:h-4 md:w-4 transform fill-current transition
                    duration-150 ease-in-out group-hover:-rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </span>
          </button>
          <ul
            className="md:min-w-32 z-50 absolute origin-top scale-0 transform rounded-sm 
                    bg-slate-500 transition duration-150 ease-in-out group-hover:scale-100"
          >
            <li className="rounded-sm px-3 py-1 cursor-pointer hover:bg-slate-600">
              Đối tác học thuật
            </li>
            <li className="rounded-sm px-3 py-1 cursor-pointer hover:bg-slate-600">
              Đối tác doanh nghiệp
            </li>
          </ul>
        </div>

        <div className="text-[6px] md:text-[12px] lg:text-[15px] font-medium outline-none focus:outline-none md:min-w-32 flex items-center cursor-pointer  bg-transparent px-3 py-1">
          Liên hệ
        </div>
      </div>
    </div>
  );
};

export default NavigationMenuDemo;
