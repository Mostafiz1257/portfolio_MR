import React from 'react';
import SkillBar from './SkillBar';
import Education from './Education';

const Resume = () => {
    return (
        <>
            <div className='md:mb-[60px]' data-aos="fade-up"
                data-aos-duration="2000">
                <h3 className=' text-3xl font-bold text-teal-600 md:mb-4'>My Skills</h3>
                <div className=' md:grid grid-cols-2 gap-5'>
                    <div className=' md:grid grid-rows-3'>
                        <SkillBar skill={"React"} rate={"90%"} w={"70"}></SkillBar>
                        <SkillBar skill={"node"} rate={"70%"}></SkillBar>
                        <SkillBar skill={"express"} rate={"70%"}></SkillBar>
                        <SkillBar skill={"mongodb"} rate={"80%"}></SkillBar>
                        <SkillBar skill={"css"} rate={"90%"}></SkillBar>
                    </div>
                    <div className=' md:grid grid-rows-3'>
                        <SkillBar skill={"Mysql"} rate={"70%"}></SkillBar>
                        <SkillBar skill={"Tailwind"} rate={"85%"}></SkillBar>
                        <SkillBar skill={"bootstrap"} rate={"80%"}></SkillBar>
                        <SkillBar skill={"firebase"} rate={"85%"}></SkillBar>
                        <SkillBar skill={"HTML"} rate={"90%"}></SkillBar>
                    </div>
                </div>
            </div>
            <Education></Education>
        </>
    );
};

export default Resume;