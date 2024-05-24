import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import OAuth from "../components/OAuth";

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function handleChange(e) {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setLoading(true);
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        setLoading(false);
        setError(data.message);
        return;
      }

      setLoading(false);
      setError(null);
      alert("Account has been created successfully. Sign In to Continue...");
      navigate("/sign-in");
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  }

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-12">Sign Up</h1>
      <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          onChange={handleChange}
          className="border p-3 rounded-lg outline-blue-400"
          id="username"
        />
        <input
          type="tel"
          placeholder="Contact Number"
          pattern="[0-9]{10}"
          maxlength="10"
          onChange={handleChange}
          className="border p-3 rounded-lg outline-blue-400"
          id="username"
        />
        <input
          type="email"
          placeholder="Email"
          onChange={handleChange}
          className="border p-3 rounded-lg outline-blue-400"
          id="email"
        />
        <input
          type="password"
          placeholder="Password"
          onChange={handleChange}
          className="border p-3 rounded-lg outline-blue-400"
          id="password"
        />
        <div className="flex space-x-2 items-baseline">
          <input type="checkbox" />
          <p>
            By clicking "Sign Up," you agree to Rentify's{" "}
            <Link to="/terms" className="text-blue-700">
              Terms of Service and Privacy Policy.
            </Link>
          </p>
        </div>

        <button
          disabled={loading}
          className="bg-blue-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
        >
          {loading ? "Loading..." : "Sign Up"}
        </button>
        
      </form>
      <div className="flex gap-2 mt-5">
        <p>Have an account ?</p>
        <Link to="/sign-in">
          <span className="text-blue-700 hover:underline">Sign In</span>
        </Link>
      </div>

      {/* {error && <p className="text-red-500 mt-5">{error}</p>} */}
    </div>
  );
}
