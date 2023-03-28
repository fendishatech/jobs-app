import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = async () => {
    navigate("/home");
  };
  return (
    <div className="min-h-screen md:p-2 flex items-center justify-center bg-slate-100">
      <form
        className="w-[400px] h-[300px] bg-slate-200 p-4 flex flex-col justify-center"
        action=""
      >
        <div>Login to your account to continue</div>
        <div className="flex flex-col">
          <label htmlFor="email">Phone No</label>
          <input
            className="text-xl py-2 px-4 rounded bg-slate-300"
            type="text"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password">Password</label>
          <input
            className="text-xl py-2 px-4 rounded bg-slate-300"
            type="password"
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className="px-8 py-2 mt-4 bg-red-900 rounded"
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
