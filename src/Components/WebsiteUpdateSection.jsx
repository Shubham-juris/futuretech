import React from 'react';
import img3 from '../assets/website/img3.jpg'
import CommonButton from './CommonButton';

const WebsiteUpdateSection = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 flex  md:flex-row flex-col-reverse items-center gap-12">
      <div className="md:w-1/2">
        <h2 className="text-5xl font-bold text-[#788E91] mb-8">Updates and Overhauls</h2>
        <p className="text-lg text-slate-700 font-medium mb-4">
          Websites get old quick, and users can tell. Is your website starting to show its age?
        </p>
        <p className="text-gray-600 mb-4">
          Sometimes it's a lack of maintenance, sometimes it's the technology used, and sometimes it's just plain time - whatever the reason, we'll fix your website to give your users the experience they expect.
        </p>
        <p className="text-gray-700 font-semibold mb-2">We will create a website for you that is:</p>
        <ul className="list-disc list-inside text-gray-600 space-y-2 px-2 pb-10">
          <li><strong>Fast</strong> - Users don't want to wait.</li>
          <li><strong>Simple</strong> - Users want to find what they want easily.</li>
          <li><strong>Responsive</strong> - Users want it to work on their phone, tablet and computer.</li>
          <li><strong>Optimized</strong> - Users want to see you in search engines.</li>
          <li><strong>Robust</strong> - Users want your site to work.</li>
          <li><strong>Extensible</strong> - Users want to see new features and content over time.</li>
          <li><strong>Integrated</strong> - Users want everything done for them, automatically.</li>
          <li><strong>Informative</strong> - Users want you to know what they need.</li>
        </ul>
        <CommonButton text='Contact Us'/>

      </div>

      <div className="md:w-1/2">
        <img
          src={img3 }
          alt="Woman working on computer"
          className="rounded-lg shadow-lg w-full"
        />
      </div>
    </section>
  );
};

export default WebsiteUpdateSection;
