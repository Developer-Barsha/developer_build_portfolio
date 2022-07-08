import React from 'react';
import { BlogData } from './FakeData/BlogData';
import './BlogSection.css'

const BlogSection = () => {
    return (
        <div className='custom_container px-10'>
            <p className='text-[18px] font-bold text-primary text-center mb-[0.5rem]'>Latest Posts</p>
            <p className='text-[#2c3957] font-bold text-center text-[42px] uppercase'>OUR LATEST STORIES </p>
            <p className='text-[#2c3957] font-bold text-center text-[42px] uppercase '>AND ARTICLES</p>
            <div className='flex justify-center items-center'>
                <div className='hr'>
                </div>
            </div>
            <div className='relative grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 lg:pb-[100px] md:pb-0 pb-[0px] gap-8 '>
                {BlogData.map((blog, i) =>
                    <div key={blog?.id} className='blog'>
                        <div className=''>
                            <img className='w-full z-0' src={blog.img} alt="Blog related image" />
                            <div className='mt-[-30px]'>
                                <p className=' ml-[40px] text-[15px]  z-10 text-white bg-primary px-[19px] py-[9px] inline'>{blog.date}</p>
                            </div>
                        </div>
                        <div className='blog-container px-[40px] pt-[34px] pb-[42px]'>
                            <div className='flex justify-between items-center'>
                                <p className='text-[15px] font-[600] text-[#888888]'><span className='text-primary'>icon</span> By Admins</p>
                                <p className='text-[15px] font-[600] text-[#888888]'><span className='text-primary'>icon</span> {blog.comments} Comments</p>
                            </div>
                            <p className='title my-5 text-[24px] text-[#2c3957] font-bold'>{blog.title}</p>
                            <p className='text-[15px] text-[#666666] '>{blog.des}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BlogSection;