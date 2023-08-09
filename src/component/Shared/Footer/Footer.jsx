import { BsArrowRight } from "react-icons/bs";
import { FaHeart, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    const fristLinkData = [
        {
            title: "Security & Provciy",
            url: "",
        },
        {
            title: "Support",
            url: "",
        },
        {
            title: "Term & Condition",
            url: "",
        },
        {
            title: "Contact",
            url: "",
        },
        {
            title: "About Us",
            url: "",
        },

    ];
    return (
        <>
            <footer className="px-10 py-44 bg-[#1C2F50] text-accent">
                <div className="container mx-auto grid grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4">
                    <div className="flex flex-col space-y-4">
                        <h1 className='text-xl px-16 lg:px-0 md:px-0 sm:px-0'>A Private Limited is the most popular type of partnership Malta. The limited liability is, in fact, the only type of company allowed by Companies.</h1>
                    </div>
                    <div className="grid grid-cols-2">

                        <div className="">
                            <h2 className="font-bold text-2xl">Company</h2>
                            <div className="flex flex-col">
                                {
                                    fristLinkData.map((data, idx) =>
                                        <a key={idx} href={data.url} target="_blank" rel="noreferrer" className=' text-[16px] font-serif pt-2 hover:underline underline-offset-1 flex items-center'><span><BsArrowRight className="text-xl mr-3"></BsArrowRight></span> {data.title}</a>
                                    )
                                }
                            </div>

                        </div>
                        <div>
                            <h2 className="font-bold text-2xl">Linkedin</h2>
                            <div className="flex">
                                <FaLinkedin className="text-4xl text-white"></FaLinkedin> 
                                <span className="ml-3 mt-1 text-xl font-semibold">Linkedin</span>
                            </div>
                        </div>

                    </div>
                    <div className="">
                        <h2 className="text-2xl font-bold">Sign up</h2>
                        <p className="text-xl py-4">Follow our newsletter to stay updated about agency.</p>
                        <div className="flex h-14 mt-5">
                            <input type="text" name="parcel" id="parcel" placeholder="Subscribe"
                                className="flex flex-1 text-left text-xl text-primary border sm:text-sm p-3 rounded-l-md outline-none h-16"
                            />
                            <span className="flex items-center px-5 pointer-events-none sm:text-sm rounded-r-md bg-secondary text-white text-xl h-16">
                                Go
                            </span>
                        </div>
                    </div>

                </div>
            </footer>
            <footer className="footer footer-center p-5 bg-[#15233B] text-base-content h-20">
                <div className="flex justify-center text-xl">
                    <p className="text-white">© 2023 Harold. Design with -</p>
                    <FaHeart className="text-red-600"></FaHeart>
                    <p className="text-white">All rights reserved. </p>
                </div>


            </footer>
        </>
    );
};

export default Footer;