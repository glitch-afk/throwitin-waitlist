import React from "react";

const Card = () => {
  return (
    <div className="text-white flex flex-col bigcard py-10 px-4 rounded-xl space-y-20">
      <h1 className="text-4xl text-gray-700 font-extrabold">01.</h1>
      <div className="space-y-8 pb-12">
        <h2 className="text-3xl font-bold">Lorem ipsum dolor sit amet</h2>
        <p className="text-xl leading-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
  );
};

export default Card;
