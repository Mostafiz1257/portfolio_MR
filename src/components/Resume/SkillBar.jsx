

const SkillBar = ({ skill, rate, w }) => {
    const width = `${w}%`;
    return (
        <div className=''>
            <h1 className=' uppercase text-[#1e293b] animate-pulse'>{skill}</h1>

            <div>
                <div className='bg-[#c7e7e5] rounded-full overflow-hidden'>
                    <div className={`bg-[#334155] flex justify-center items-center w-[70%] h-full text-xs text-white font-bold`}>{rate}</div>
                </div>
            </div>

        </div>
    );
};

export default SkillBar;