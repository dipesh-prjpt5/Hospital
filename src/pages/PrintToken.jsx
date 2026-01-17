import React from "react";

const PrintToken = () => {
  // Static example data for display
  const token = {
    hospital: "AIIMS HOSPITAL",
    doctor: "Dr. Anil Gandhi",
    tokenNumber: "A-001",
    time: "2:00 PM",
    date: "24-05-2019",
  };

  return (
    <div className="flex items-center justify-center h-fit">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md text-center">
        <h1 className="text-3xl font-bold mb-4">{token.hospital}</h1>
        <h2 className="text-xl font-semibold mb-2">{token.doctor}</h2>
        <p className="text-lg mb-1">Token No.</p>
        <p className="text-4xl font-extrabold mb-4">{token.tokenNumber}</p>
        <p className="text-gray-600 mb-1">
          {token.time} | {token.date}
        </p>
        <p className="italic text-gray-500">Please wait for your turn...</p>
      </div>
    </div>
  );
};

export default PrintToken;
