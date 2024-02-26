import { TypeAnimation } from "react-type-animation";

const Header = () => {
    return (
        <>
            <TypeAnimation className="className='mt-[-200px]  text-4xl font-bold items-center flex justify-center"
                sequence={[
                    // Same substring at the start will only be typed out once, initially
                    'I AM DREAMER :)',
                    100, // wait 1s before replacing "Mice" with "Hamsters"
                    'I AM A FULL STACK DEVELOPER',
                    100,
                    'I AM MOSTAFIZUR RAHMAN ',
                    100,
                    'I AM A SOFTWARE ENGINEER',
                    1000
                ]}
                wrapper="span"
                speed={75}
                style={{ fontSize: '2em', display: 'inline-block' }}
                repeat={Infinity}
            />
        </>
    );
};

export default Header;