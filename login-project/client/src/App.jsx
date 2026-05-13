
import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.text();

    alert(data);
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-900">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl w-80"
      >
        <h1 className="text-2xl font-bold mb-5 text-center">
          Login
        </h1>

        <input
          type="name"
          name="name"
          placeholder="Username"
          className="w-full border p-2 mb-4 rounded"
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full border p-2 mb-4 rounded"
          onChange={handleChange}
        />

        <button className="bg-blue-500 text-white w-full py-2 rounded">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;