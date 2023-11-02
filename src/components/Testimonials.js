import React from 'react';

// import components
import TestimonialSlider from '../components/TestimonialSlider';

const Testimonials = () => {
  return (
    <section className='relative container m-auto '>
      <div className='container-fluid mx-auto '>
        <div
          className='bg-accent-primary min-h-[600px] rounded-[50px] '
          data-aos='fade-up'
          data-aos-offset='300'
        >
            <h2 className='h2 text-white text-center pt-5'>
              Testimonials
            </h2>
          <div className='flex flex-col justify-center items-center px-2 xl:px-0 h-[800px]'>
            <TestimonialSlider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
