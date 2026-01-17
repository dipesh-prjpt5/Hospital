import doctorImage from "../../assets/imgimg.svg";

const DoctorCard = ({ data }) => {
  return (
    <div className="p-4 h-80 shadow-md flex flex-col items-center gap-2 bg-[#363C48] text-white">
      <img className="w-24 h-24 object-cover" src={doctorImage} alt="Doctor" />
      <h3 className="font-bold text-lg">{data.name}</h3>
      <p className="text-sm">Room No: {data.room_no}</p>
      <p className="text-sm">
        Token Status: Done - {data.token_status.done}, Pending - {data.token_status.pending}
      </p>
      <button className="bg-[#E83D7A] rounded-2xl px-4 py-2 text-white hover:bg-[#d6366b] transition">
        Send
      </button>
    </div>
  );
};

export default DoctorCard;
