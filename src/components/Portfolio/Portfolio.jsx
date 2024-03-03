import React from 'react';
import airbnb from '../../assets/airbnb.jpg'
import toy from '../../assets/toy.jpg'
import course from '../../assets/course.png'
import food from '../../assets/food.jpg'
import restaurant from '../../assets/resturant.jpg'
import quiz from '../../assets/quiz.jpg'

const Portfolio = () => {
  const projectOneLive = () => {
    window.open('https://easy-language-b28c4.web.app/', '_blank');
  }

  const projectTwoLive = () => {
    window.open('https://educational-toy.web.app/', '_blank');
  }

  const projectThreeLive = () => {
    window.open('https://the-chef-client-5dc25.web.app/', '_blank');
  }
  const projectFourLive = () => {
    window.open('https://the-chef-client-5dc25.web.app/', '_blank');
  }
  const projectSixLive = () => {
    window.open('https://final-project-client-sid-43532.firebaseapp.com/', '_blank');
  }
  const projectFiveLive = () => {
    window.open('https://neon-melomakarona-3a7ad9.netlify.app/', '_blank');
  }

  return (
    <div id='project'>
      <div className=' grid md:grid-cols-3 gap-4 md:gap-4 mx-12' >
        <div className='overflow-hidden relative transition duration-200 transform hover:-translate-y-2 rounded shadow-lg hover:shadow-2xl' data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000">
          <img
            src={airbnb}
            alt='book cover'
            className='object-cover cursor-pointer w-full h-56 md:h-64 xl:h-80'
          />

          <div className='bg-cyan-950 px-6 py-4 bg-opacity-75 opacity-0 hover:opacity-100 text-gray-300 absolute inset-0 transition-opacity duration-200 flex flex-col'>
          </div>
        </div>
        <div onClick={projectTwoLive} className='overflow-hidden relative transition duration-200 transform hover:-translate-y-2 rounded shadow-lg hover:shadow-2xl' data-aos="flip-left "
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000">
          <img
            src={toy}
            alt='book cover'
            className='object-cover w-full h-56 md:h-64 xl:h-80'
          />

          <div className='bg-cyan-950 px-6 py-4 bg-opacity-75 opacity-0 hover:opacity-100 text-gray-300 absolute inset-0 transition-opacity duration-200 flex flex-col'>
          </div>
        </div>
        <div onClick={projectOneLive} className='overflow-hidden relative transition duration-200 transform hover:-translate-y-2 rounded shadow-lg hover:shadow-2xl' data-aos="flip-left cursor-pointer"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000">
          <img
            src={course}
            alt='book cover'
            className='object-cover w-full h-56 md:h-64 xl:h-80'
          />

          <div className='bg-cyan-950 px-6 py-4 bg-opacity-75 opacity-0 hover:opacity-100 text-gray-300 absolute inset-0 transition-opacity duration-200 flex flex-col'>
          </div>
        </div>
        <div onClick={projectThreeLive} className='overflow-hidden relative transition duration-200 transform hover:-translate-y-2 rounded shadow-lg hover:shadow-2xl' data-aos="flip-left cursor-pointer"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000">
          <img
            src={food}
            alt='book cover'
            className='object-cover w-full h-56 md:h-64 xl:h-80'
          />

          <div className='bg-cyan-950 px-6 py-4 bg-opacity-75 opacity-0 hover:opacity-100 text-gray-300 absolute inset-0 transition-opacity duration-200 flex flex-col'>
          </div>
        </div>
        <div onClick={projectFiveLive} className='overflow-hidden relative transition duration-200 transform hover:-translate-y-2 rounded shadow-lg hover:shadow-2xl' data-aos="flip-left cursor-pointer"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000">
          <img
            src={quiz}
            alt='book cover'
            className='object-cover w-full h-56 md:h-64 xl:h-80'
          />

          <div className='bg-cyan-950 px-6 py-4 bg-opacity-75 opacity-0 hover:opacity-100 text-gray-300 absolute inset-0 transition-opacity duration-200 flex flex-col'>
          </div>
        </div>
        <div onClick={projectSixLive} className='overflow-hidden relative transition duration-200 transform hover:-translate-y-2 rounded shadow-lg hover:shadow-2xl' data-aos="flip-left cursor-pointer"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000">
          <img
            src={restaurant}
            alt='book cover'
            className='object-cover w-full h-56 md:h-64 xl:h-80'
          />

          <div className='bg-cyan-950 px-6 py-4 bg-opacity-75 opacity-0 hover:opacity-100 text-gray-300 absolute inset-0 transition-opacity duration-200 flex flex-col'>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;