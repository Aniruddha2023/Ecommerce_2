import React from 'react';
import { assets } from '../assets/assets';
import NewsLetter from '../components/NewsLetter';
import Title from '../components/Title';

const About = () => {
  return (
    <div className="p-8">
      {/* Section with Left Image and Right Text */}
      <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
        <div className="w-full md:w-1/2">
          <img 
            src={assets.about_img} 
            alt="About Us" 
            className="w-full h-auto rounded-md"
          />
        </div>
        <div className="w-full md:w-1/2 text-gray-700">
        <div className='flex justify-center items-center mb-8 text-4xl'>
        <Title text1={'About'} text2={'Us'} />
          </div>  
          <p className='text-lg text-center  justify-center '> 
           Lorem ipsum dolor sit amet consectetur adipisicing elit. 
           Aspernatur, nisi necessitatibus earum facere accusantium 
           tenetur consectetur optio vero obcaecati minima libero ratione deserunt iusto
            quisquam eius dignissimos nesciunt exercitationem ducimus ipsum! Odio eius,
             deserunt illo esse aspernatur maxime soluta eveniet eaque porro sequi tempora
              voluptates ullam quae mollitia nemo impedit explicabo earum inventore vero minima 
              recusandae quis ut! Quisquam, dolores? Velit fuga laboriosam aperiam, asperiores 
              obcaecati quas omnis iusto illum officiis praesentium repudiandae repellendus
               corporis ipsam quasi dignissimos eos earum aliquam blanditiis reiciendis sapiente
                
          </p>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="text-center mb-8">

      <div className='flex justify-center items-center mb-8 text-4xl'>
        <Title text1={'Why Chooset'} text2={'Us'} />
          </div>
     
        <p className="text-gray-600">
          Our services are tailored to meet the unique needs of our customers.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1 */}
        <div className="p-4 shadow-lg rounded-lg border">
          <h3 className="text-xl font-semibold mb-2">High Quality</h3>
          <p>
            We prioritize quality in everything we do, ensuring our customers
            receive the best.
          </p>
        </div>
        {/* Column 2 */}
        <div className="p-4 shadow-lg rounded-lg border">
          <h3 className="text-xl font-semibold mb-2">Affordable Pricing</h3>
          <p>
            Our pricing is competitive and designed to offer excellent value
            for money.
          </p>
        </div>
        {/* Column 3 */}
        <div className="p-4 shadow-lg rounded-lg border">
          <h3 className="text-xl font-semibold mb-2">Exceptional Support</h3>
          <p>
            We are committed to providing excellent customer support whenever
            you need it.
          </p>
        </div>
      </div>

      <NewsLetter />
    </div>
  );
};

export default About;
