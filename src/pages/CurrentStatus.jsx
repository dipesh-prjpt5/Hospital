import { useHospital } from "../context/HospitalContext";

const CurrentStatus = () => {
  const { doctors, departments, tokens } = useHospital();

  const getDepartmentName = (doctor) => {
    const dep = departments.find(d => d.id === doctor.departmentId);
    return dep ? dep.name : "—";
  };

  const getDoctorTokens = (doctorId) =>
    tokens.filter(t => t.doctorId === doctorId);

  return (
    <div className="bg-[#25262C] rounded-xl p-8">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold">Current Status</h1>
        <p className="text-gray-400 text-sm">
          Live consultation and token status
        </p>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-[#292B31] rounded-xl shadow">
        <table className="w-full text-sm">
          <thead className="border-b border-[#3A3F4B]">
            <tr className="text-gray-400">
              <th className="px-5 py-3 text-left">Doctor</th>
              <th className="px-5 py-3 text-left">Department</th>
              <th className="px-5 py-3 text-center">Current Token</th>
              <th className="px-5 py-3 text-center">Pending</th>
              <th className="px-5 py-3 text-center">Completed</th>
              <th className="px-5 py-3 text-center">Status</th>
            </tr>
          </thead>

          <tbody>
            {doctors.map((doc) => {
              const doctorTokens = getDoctorTokens(doc.id);
              const current = doctorTokens.find(t => t.status === "current");
              const pending = doctorTokens.filter(t => t.status === "pending").length;
              const completed = doctorTokens.filter(t => t.status === "done").length;

              return (
                <tr
                  key={doc.id}
                  className="border-b border-[#3A3F4B] hover:bg-[#30333B]"
                >
                  <td className="px-5 py-4 font-medium text-white">
                    {doc.name}
                  </td>

                  <td className="px-5 py-4 text-gray-300">
                    {getDepartmentName(doc)}
                  </td>

                  <td className="px-5 py-4 text-center text-white font-semibold">
                    {current ? current.tokenNo : "—"}
                  </td>

                  <td className="px-5 py-4 text-center text-yellow-400">
                    {pending}
                  </td>

                  <td className="px-5 py-4 text-center text-green-400">
                    {completed}
                  </td>

                  <td className="px-5 py-4 text-center">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold
                        ${
                          current
                            ? "bg-green-500/20 text-green-400"
                            : "bg-gray-500/20 text-gray-400"
                        }`}
                    >
                      {current ? "Active" : "Idle"}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {doctors.length === 0 && (
          <div className="text-center py-10 text-gray-400">
            No doctors available
          </div>
        )}
      </div>
    </div>
  );
};

export default CurrentStatus;
