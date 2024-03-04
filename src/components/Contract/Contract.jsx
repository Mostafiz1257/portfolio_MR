import { useState } from 'react';
import toast from "react-hot-toast";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
const Contract = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        desc: ''
    });

    const { name, email, password, desc } = formData;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name && email && password) {
            // Assuming your submission logic here
            // For demonstration, I'm showing a success toast and clearing the form
            toast.success("Successfully sent");
            setFormData({
                name: '',
                email: '',
                password: '',
                desc: ''
            });
        } else {
            toast.error("Please fill in all required fields");
        }
    }

    return (
        <div className='grid md:grid-cols-2 md:mt-12'>
            <form className="space-y-4 mx-auto w-3/4" onSubmit={handleSubmit}>
                <div>
                    <p className=' text-teal-700'>Name*</p>
                    <input type="text" name="name" value={name} onChange={handleChange} placeholder="Enter your name" className="border border-3 border-teal-800 w-full h-12 pl-3" required />
                </div>
                <div>
                    <p className=' text-teal-700'>Email*</p>
                    <input type="email" name="email"  value={email} onChange={handleChange} placeholder="Enter your email" className="border border-3 border-teal-800 w-full h-12 pl-3" required />
                </div>
                <div>
                    <p className=' text-teal-700'>Password*</p>
                    <input type="password" name="password" value={password} onChange={handleChange} placeholder="Enter your password" className="border border-3 border-teal-800 w-full h-12 pl-3" required />
                </div>
                <div>
                    <p className=' text-teal-700'>Description</p>
                    <textarea type="text" name="desc" value={desc} onChange={handleChange} placeholder="Details write here " className="border border-3 border-teal-800 w-full h-[96px] pl-3 pt-3" required></textarea>
                </div>
                <button type="submit" className={`bg-teal-800 text-white py-3 px-5 rounded-sm ${!(name && email && password) ? 'cursor-not-allowed opacity-50' : ''}`} disabled={!(name && email && password)}>Submit</button>
            </form>
            <div className=' space-y-12 w-3/4 md:mt-0 mt-6 '>
                <div className='w-ful h-[96px] pl-3 flex item-center bg-teal-800 text-white'>
                    <div>
                        <IoCallOutline className=' text-6xl p-3'></IoCallOutline>
                    </div>
                    <div className='font-bold md:p-0 p-3'>
                        <p>Phone</p>
                        <p>+8801672589498</p>
                        <p>+8801312645183</p>
                    </div>
                </div>
                <div className='w-ful h-[96px]  flex item-center bg-teal-800 text-white'>
                    <div className='md:p-0 p-3'>
                        <MdOutlineMail className=' text-6xl p-3'></MdOutlineMail>
                    </div>
                    <div className='font-bold '>
                        <p>Email</p>
                        <p className='block sm:inline-block w-full sm:w-auto'>mostafiz.cse.1257@gmail.com</p>
                        <p>+mostafiz.1257@gmail.com</p>
                    </div>
                </div>
                <div className='w-ful h-[96px]  flex item-center bg-teal-800 text-white'>
                    <div>
                        <CiLocationOn className=' text-6xl p-3'></CiLocationOn>
                    </div>
                    <div className='font-bold  p-3'>
                        <p>Address</p>
                        <p>Kanchan Bazar, Narayangang</p>
                        <p>Dhaka,Bangladesh</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contract;
