import React from "react";
import { QRCodeCanvas } from "qrcode.react";

const PrintToken = () => {
  const token = {
    hospital: "AIIMS HOSPITAL",
    department: "Orthopedic Department",
    doctor: "Dr. Amit Sharma",
    tokenNumber: "ORTHO-02",
    time: "10:54 AM",
    date: "19/01/2026",
  };

  const qrData = `
    Hospital: ${token.hospital}
    Department: ${token.department}
    Doctor: ${token.doctor}
    Token: ${token.tokenNumber}
    Date: ${token.date}
    Time: ${token.time}
  `;

  return (
    <div className="flex items-center justify-center">
      <div className="bg-white text-black rounded-xl shadow-xl p-8 w-full max-w-md text-center">
        {/* Hospital */}
        <h1 className="text-2xl font-bold mb-1">{token.hospital}</h1>
        <p className="text-sm text-gray-600 mb-4">{token.department}</p>

        {/* QR CODE */}
        <div className="flex justify-center mb-4">
          <QRCodeCanvas
            value={qrData}
            size={140}
            bgColor="#ffffff"
            fgColor="#000000"
            level="H"
          />
        </div>

        {/* Doctor */}
        <h2 className="text-lg font-semibold mb-2">{token.doctor}</h2>

        {/* Token */}
        <p className="text-sm text-gray-600">Token No.</p>
        <p className="text-4xl font-extrabold mb-4">{token.tokenNumber}</p>

        {/* Time */}
        <p className="text-gray-600 mb-1">
          {token.time} | {token.date}
        </p>

        <p className="italic text-gray-500">Please wait for your turn</p>
      </div>
    </div>
  );
};

export default PrintToken;
