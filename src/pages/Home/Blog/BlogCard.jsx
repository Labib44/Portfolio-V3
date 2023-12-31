/* eslint-disable react/prop-types */
import { Icon } from '@iconify/react';
import { useTheme } from '../../../context/ThemeProvider/ThemeProvider';

const BlogCard = ({ blogData }) => {
    const { icon, title, img, description, bgcolor } = blogData;
    const { isDark} = useTheme();

    return (
        <div className={`' rounded-3xl shadow-xl' ${!isDark ? "bg-[#343F4B]" : "bg-[#F4F6FB] "}`}>
            <figure className="px-5 pt-5">
                <img src={img} alt="" className="rounded-xl" />
            </figure>
            <div className="avatar">
                <div className={`text-3xl text-white w-[65px] h-[65px] p-[14px] border-4 border-white rounded-full ${bgcolor} ml-12 -mt-8`}>
                    {icon}
                </div>
            </div>

            <div className={`' px-5 py-2 hover:text-secondary duration-700 ' ${!isDark ? "text-accent" : " text-primary"}`}>
                <h1 className='text-2xl font-semibold'>{title}</h1>
            </div>
            <div className='px-5 text-accent'>
                <p>{description}</p>
            </div>
            <div className={`' flex hover:text-secondary duration-700 px-5 py-6 ' ${!isDark ? "text-accent" : " text-primary"}`}>
                <h1 className='text-xl'>Learn More</h1>
                <Icon icon="mdi:arrow-right" className='text-[18px] mt-1 ml-1' />
            </div>
        </div>
    );
};

export default BlogCard;