import { FiFacebook } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";
import { FiGithub } from "react-icons/fi";
import Header from "../Header/Header";

const Home = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className='text-center'>
                <h5 className='mt-[-200px]  text-4xl font-bold items-center flex justify-center' data-aos="fade-down-right">Hi, I'M  <span className=" text-pink-600">  DREAMER :)</span> </h5>
                <p
                    className='sm:justify-between sm:mt-8 text-center text-2xl md:w-3/4 m-auto mt-6 items-center flex justify-center' data-aos="fade-down-left">I am a frontend web developer. I can provide clean code and pixel perfect design. I also make website more & more interactive with web animations.</p>
                <div className='space-x-6 text-5xl font-bold items-center flex mt-5 justify-center ' data-aos="fade-up"
                    data-aos-duration="2000"
                >
                    <FiFacebook className=' cursor-pointer border-black border rounded-full border-double p-2' />
                    <IoLogoTwitter className=' cursor-pointer border-black border rounded-full border-double p-2' />
                    <FiGithub className='  cursor-pointer border-black border rounded-full border-double p-2' />
                </div>
            </div>
        </div>
    );
};

export default Home;