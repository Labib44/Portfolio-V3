import { useTheme } from "../../../../context/ThemeProvider/ThemeProvider";


const Experience = () => {
    const { isDark } = useTheme();
    return (
        <div className="relative col-span-12 px-4 space-y-6 ">
            <div className="col-span-8 space-y-8 relative px-4 before:absolute before:top-2 before:bottom-0 before:w-[3px] before:-left-3 before:bg-gray-300">
                <div className="flex flex-col relative before:absolute before:top-6 before:w-4 before:h-4 before:rounded-full before:left-[-35px] before:z-[1] before:bg-[#3e7b7d]">
                    <h3 className={`" text-xl text-primary font-semibold tracki ml-5 mt-6 " ${!isDark ? "text-white" : ""}`}>Developer</h3>
                    <time className="pt-2 text-accent tracki uppercase ml-5">2000-2004 (4 year Experience)</time>
                    <p className="pt-2 text-xl text-accent ml-5 ">There are many variations of passages of Lorem Ipsum available, but the majority have fered altation in some form, by injmour, or randomised words which do not look even slightlievable.</p>
                </div>
                


            </div>
        </div>
    );
};

export default Experience;