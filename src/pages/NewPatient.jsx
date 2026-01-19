import { useState } from "react";
import { useHospital } from "../context/HospitalContext";

const NewPatient = () => {
  const { doctors, departments, generateToken } = useHospital();

  const [form, setForm] = useState({
    name: "",
    mobile: "",
    doctorId: "",
  });

  const selectedDoctor = doctors.find((d) => d.id === Number(form.doctorId));

  const department = selectedDoctor
    ? departments.find((dep) => dep.id === selectedDoctor.departmentId)
    : null;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.mobile || !form.doctorId) return;

    generateToken(
      { name: form.name, mobile: form.mobile },
      Number(form.doctorId),
    );

    setForm({ name: "", mobile: "", doctorId: "" });
  };

  return (
    <div className="flex justify-center">
      <div className="bg-[#25262C] rounded-xl p-8 w-full max-w-3xl">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-white">New Patient</h1>
          <p className="text-gray-400 text-sm">
            Register patient and generate consultation token
          </p>
        </div>

        {/* Card */}
        <div className="bg-[#292B31] rounded-xl p-6 shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Form Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Patient Name */}
              <div>
                <label className="block text-sm text-gray-400 mb-1">
                  Patient Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  autoCapitalize="off"
                  autoComplete="off"
                  autoCorrect="off"
                  onChange={handleChange}
                  placeholder="Enter patient name"
                  className="w-full px-3 py-2 rounded-md bg-[#292B31] border border-[#3A3F4B] text-white focus:ring-2 focus:ring-green-400 outline-none"
                />
              </div>

              {/* Mobile */}
              <div>
                <label className="block text-sm text-gray-400 mb-1">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  name="mobile"
                  value={form.mobile}
                  onChange={handleChange}
                  autoCapitalize="off"
                  autoComplete="off"
                  autoCorrect="off"
                  placeholder="10 digit mobile number"
                  className="w-full px-3 py-2 rounded-md bg-[#292B31] border border-[#3A3F4B] text-white focus:ring-2 focus:ring-green-400 outline-none"
                />
              </div>

              {/* Doctor */}
              <div>
                <label className="block text-sm text-gray-400 mb-1">
                  Doctor
                </label>
                <select
                  name="doctorId"
                  value={form.doctorId}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-md bg-[#292B31] border border-[#3A3F4B] text-white"
                >
                  <option value="">Select doctor</option>
                  {doctors.map((doc) => (
                    <option key={doc.id} value={doc.id}>
                      {doc.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Department */}
              <div>
                <label className="block text-sm text-gray-400 mb-1">
                  Department
                </label>
                <div className="px-3 py-2 rounded-md bg-[#292B31] border border-[#3A3F4B] text-gray-200">
                  {department ? department.name : "Auto assigned"}
                </div>
              </div>
            </div>

            {/* Action */}
            <div className="flex justify-between items-center pt-4 border-t border-[#3A3F4B]">
              <span className="text-sm text-gray-400">
                Token will be generated automatically
              </span>

              <button
                type="submit"
                className="bg-green-500 hover:bg-green-600 text-black font-semibold px-8 py-2 rounded-lg shadow"
              >
                Generate Token
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewPatient;
