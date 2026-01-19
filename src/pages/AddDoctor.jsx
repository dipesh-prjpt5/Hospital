import { useState } from "react";
import { useHospital } from "../context/HospitalContext";

const AddDoctor = () => {
  const { departments, addDoctor } = useHospital();

  const [form, setForm] = useState({
    name: "",
    email: "",
    departmentId: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.departmentId) return;

    addDoctor(form);
    setForm({ name: "", email: "", departmentId: "" });
  };

  return (
    <div className="flex justify-center">
      <div className="bg-[#25262C] rounded-xl p-8 w-full max-w-3xl">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-semibold">Add Doctor</h1>
          <p className="text-gray-400 text-sm">
            Register a new doctor in the system
          </p>
        </div>

        {/* Card */}
        <div className="bg-[#292B31] rounded-xl p-6 shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Name */}
              <div>
                <label className="block text-sm text-gray-400 mb-1">
                  Doctor Name
                </label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-md bg-[#292B31] border border-[#3A3F4B]"
                  placeholder="Dr. John Doe"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm text-gray-400 mb-1">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-md bg-[#292B31] border border-[#3A3F4B]"
                  placeholder="doctor@clinic.com"
                />
              </div>

              {/* Department */}
              <div>
                <label className="block text-sm text-gray-400 mb-1">
                  Department
                </label>
                <select
                  name="departmentId"
                  value={form.departmentId}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-md bg-[#292B31] border border-[#3A3F4B]"
                >
                  <option value="">Select department</option>
                  {departments.map((dep) => (
                    <option key={dep.id} value={dep.id}>
                      {dep.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Action */}
            <div className="flex justify-end pt-4 border-t border-[#3A3F4B]">
              <button
                type="submit"
                className="bg-green-500 hover:bg-green-600 text-black font-semibold px-8 py-2 rounded-lg shadow"
              >
                Add Doctor
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddDoctor;
