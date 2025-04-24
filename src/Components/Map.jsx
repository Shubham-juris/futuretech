import React from 'react';

const Map = () => {
  return (
    <div className="w-full flex justify-center items-center py-8">
      <iframe
        className="w-full sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] h-72 sm:h-[400px] md:h-[500px] rounded-lg border-2 border-gray-400 shadow-lg"
        title="Future Tech Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2505.0693895864556!2d-113.97171060000001!3d51.1071799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537164808d03ddd3%3A0x2afbaaad6e9536a2!2s32%20Westwinds%20Crescent%20NE%20%23120%2C%20Calgary%2C%20AB%20T3J%205L3%2C%20Canada!5e0!3m2!1sen!2sin!4v1743761489534!5m2!1sen!2sin"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
