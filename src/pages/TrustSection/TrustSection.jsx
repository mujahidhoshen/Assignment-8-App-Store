import React from "react";

const trustData = [
  {
    id: "1",
    title: "Total Download",
    count: "29.6M",
    text: "21% More Than Last Month",
  },
  {
    id: "2",
    title: "Total Review",
    count: "906K",
    text: "46% More Than Last Month",
  },
  { id: "3", title: "Active Apps", count: "132+", text: "31 Will Launch" },
];

const TrustSection = () => {
  return (
    <div className="bg-[#763fe8]  text-center">
      <h1 className="text-white text-3xl md:text-5xl font-bold p-4 md:p-8">
        Trusted by Millions, Built for You
      </h1>
      <div className="w-3/4 mx-auto flex flex-col sm:flex-row justify-around items-center text-white p-6">
        {trustData.map((data) => (
          <div
            key={data.id}
            className="mb-6 hover:scale-105 transition-transform duration-200 cursor-pointer"
          >
            <p className="text-lg font-semibold">{data.title}</p>
            <h1 className=" text-5xl font-bold py-2">{data.count}</h1>
            <p className=" font-semibold">{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustSection;
