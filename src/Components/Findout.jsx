import React from 'react'
import CommonButton from './CommonButton'

function Findout() {

  const findOut_Data = [
    {
      heading: 'Making A Website Is Easy. Making A Good One Isn',
      para: "Not all websites are created equal. If your father's brother's nephew's cousin's former roommate makes websites, you'll probably want to contact us instead. We understand the nuances of building a quality website that will be able to incorporate everything your business needs today or in the future. ",
    },
    {
      heading: 'Audience Reach ',
      para: "Design from all angles. You may not be your target audience, so it's important to understand how different usere interact with a website and design your site to maximize potential leads. ",
    },
    {
      heading: 'Simple Websites Are More Complex Than You Think. ',
      para: "We're experts in web. A website needs to do more than just display your message. It needs to take full advantage of a huge online market, maximize SEO, provide customer analysis, fuel business decisione, and integrate tightly with your marketing and advertising platforms. Doing a good job in all of these areas requires expertis in more than just posting a picture online",
    }
  ]
  return (
    <div className='w-full flex xl:flex-row  flex-col mx-auto bg-[#c5c5c53b] md:px-50 gap-6 py-10 mt-15'>
      {findOut_Data.map((val, id) => {
        return (
          <div className='px-6' key={id}  >
            <h5 className='text-2xl font-semibold text-gray-700 text-center'>{val.heading}</h5>
            <p className='mt-6 text-gray-700 text-center'>{val.para}</p>
            <CommonButton text='Find out'/>
          </div>
        )
      })}

    </div>
  )
}

export default Findout;
