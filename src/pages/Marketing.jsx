import React from "react";
import CommonButton from "../Components/CommonButton";
import degitalMarketings from "../assets/degitalMarketing/degitalMarketing.jpg";
const Marketing = () => {
  return (
    <>
      <div className="mt-16 text-center">
        <h2 className="text-5xl font-semibold text-gray-600">
          Digital Marketing.
        </h2>
        <div className="w-16 mx-auto border-b-2 border-gray-300 my-2"></div>
      </div>
      <div className="max-w-5xl mx-auto px-4 py-10 mt-15">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <img
            src={degitalMarketings}
            alt="Development"
            className="w-full md:w-1/2  shadow-lg"
          />
          <div className="text-center md:text-left">
            <p className="text-xl font-semibold text-center">
              SEO, digital advertising, reputation management, content
              development and more – Future Tech can meet any digital needs you
              may have.
            </p>
            <p className="mt-2 text-gray-700 text-center">
              The digital world is always evolving, which is why you need an
              expert as your tour guide. Whether you’re looking to make an
              impact locally, across Canada, or on the international stage,
              Future Tech is determined to showcase your brand in front of the
              right people.
            </p>
            <CommonButton text="Get Started" />
          </div>
        </div>
        <div className="mt-25 text-center">
          <h2 className="text-5xl font-semibold text-gray-600">
            Digital Advertising.
          </h2>
          <div className="w-16 mx-auto border-b-2 border-gray-300 my-2"></div>
        </div>

        <div className="mt-10 text-center">
          <h2 className="text-2xl font-semibold text-gray-700">
            Google Adwords , Facebook <br></br>
            You Tube , twitter, instagram and linkdin.
          </h2>
        </div>
        <div className="mt-5 text-center">
          <h2 className="">
            You pick the buget and consectetur adipisicing elit. Voluptatum,
            <br />
            temporibus earum cupiditate sint magnam quasi sunt facilis, <br />
            You Tube , twitter, instagram and linkdin.
          </h2>
          <CommonButton text="learn more " />
        </div>
      </div>
      <div className="mt-20 text-center">
        <h2 className="text-5xl font-semibold text-gray-600">
          Search Engine Optimization
        </h2>
        <div className="w-16 mx-auto border-b-2 border-gray-300 my-2"></div>
      </div>
      <div className="mt-15 text-center">
        <h2 className="text-1xl font-semibold text-gray-700">
          Always talkd About ,realy done<br></br>right.
        </h2>
      </div>
      <div className="mt-10 text-center">
        <h2 className="">
          Effective sco buget and consectetur adipisicing elit.<br></br>
          Voluptatum, temporibus earum cupiditate sint magnam quasi<br></br>
          sunt facilis, distinctio harum asperiores illo? Aut vitae,<br></br>
          magnam eos quibusdam amet iste minima? <br></br>
          You Tube , twitter, instagram and linkdin.
        </h2>
      </div>
    </>
  );
};

export default Marketing;
