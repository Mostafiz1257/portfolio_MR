import { FiFacebook } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { ImWhatsapp } from "react-icons/im";
// import Header from "../Header/Header";

const Home = () => {
    const handleFacebookClick = () => {
        window.open('https://web.facebook.com/mostafiz.mostafiz.9216', '_blank');
    }

    const handleGithubClick = () => {
        window.open('https://github.com/Mostafiz1257?tab=repositories', '_blank');
    };

    const handleLinkedInClick = () => {
        window.open('https://www.linkedin.com/in/mostafizur-rahman-56a659125/', '_blank');
    };

    return (
        <div className="">
            <div className="flex justify-center items-center h-screen ">
                <div className='text-center'>
                    <h5 className='mt-[-200px] text-teal-600 text-4xl font-bold items-center flex justify-center bg-clip-text text-transparent bg-gradient-to-r from-teal-800 to-teal-800' data-aos="fade-down-right ">Hi, I am a Full stack Developer </h5>
                    <p
                        className='sm:justify-between sm:mt-8 text-center text-2xl md:w-3/4 m-auto mt-6 items-center flex justify-center text-gray-600' data-aos="fade-down-left ">

                        I specialize in MERN stack development, crafting websites with clean code and appealing designs. My goal is to deliver seamless user experiences, blending frontend finesse with backend efficiency. With a focus on user satisfaction, I prioritize both functionality and aesthetics in my work.</p>
                    <div className='space-x-6 text-5xl text-teal-500 font-bold items-center flex mt-5 justify-center ' data-aos="fade-up"
                        data-aos-duration="2000"
                    >
                        <FiFacebook onClick={handleFacebookClick} className=' cursor-pointer border-teal-500 border rounded-full border-double p-2 hover:scale-105 duration-200 hover:text-teal-700' />
                        <FaLinkedinIn onClick={handleLinkedInClick} className=' cursor-pointer border-teal-500 border rounded-full border-double p-2 hover:scale-105 duration-200 hover:text-teal-700' />
                        <FiGithub onClick={handleGithubClick} className='  cursor-pointer border-teal-500 border rounded-full border-double p-2 hover:scale-105 duration-200 hover:text-teal-700' />
                    </div>
                </div>
                {/* <div className="fixed bottom-0 right-0 mb-20 mr-20 md:hidden">
                    <a href="https://wa.me/1XXXXXXXXXX" target="_blank">
                        <ImWhatsapp className="text-teal-500 text-2xl" />
                    </a>
                </div> */}
            </div>


        </div>
    );
};

export default Home;