import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

function SignIn1() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate();

  // Validation function
  const validate = () => {
    let valid = true;
    const newErrors = { email: "", password: "" };

    if (!email) {
      newErrors.email = "Email is required.";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email address is invalid.";
      valid = false;
    }

    if (!password) {
      newErrors.password = "Password is required.";
      valid = false;
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
    setErrors({ ...errors, [name]: "" });
  };

  // Sign Up handler
  const handleSignUp = (e) => {
    e.preventDefault();
    const valid = validate();  // Run validation only on submit
    if (valid) {
      const user = { email, password };
      localStorage.setItem("user", JSON.stringify(user));
      toast.success("Sign-up successful! You can now log in.");
      setIsSignUp(false);
      setEmail("");
      setPassword("");
    }
  };

  // Sign In handler
  const handleSignIn = (e) => {
    e.preventDefault();
    const valid = validate();  // Run validation only on submit
    if (valid) {
      const storedUser = JSON.parse(localStorage.getItem("user"));

      if (storedUser && storedUser.email === email && storedUser.password === password) {
        toast.success("Login successful!");
        navigate("/list");
      } else {
        toast.error("Invalid email or password. Please sign up first.");
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          {isSignUp ? "Sign Up" : "Sign In"}
        </h2>
        <form onSubmit={isSignUp ? handleSignUp : handleSignIn}>
          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              className={`w-full px-4 py-2 mt-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
              value={email}
              onChange={handleInputChange}
            />
            {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              className={`w-full px-4 py-2 mt-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none ${
                errors.password ? "border-red-500" : "border-gray-300"
              }`}
              value={password}
              onChange={handleInputChange}
            />
            {errors.password && <p className="mt-1 text-sm text-red-500">{errors.password}</p>}
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 mt-6 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-1"
          >
            {isSignUp ? "Sign Up" : "Sign In"}
          </button>
        </form>
        <div className="mt-4 text-center">
          <button
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-sm text-blue-500 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            {isSignUp
              ? "Already have an account? Sign In"
              : "Don't have an account? Sign Up"}
          </button>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

export default SignIn1;
