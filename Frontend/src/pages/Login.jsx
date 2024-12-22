import React, { useState } from "react";

const Login = () => {
  const [state, setState] = useState("Sign up");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();
  };

  return (
    <form className="flex items-center min-h-[80vh]">
      <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg">
        <p className="text-2xl font-semibold">
          {state === "Sign up" ? "Create Account" : "Login"}
        </p>
        <p>
          Please {state === "Sign up" ? "sign up" : "log in"} to book an
          appointment
        </p>

        {state === "Sign up" && (
          <div className="w-full">
            <input
              className="border border-zinc-300 rounded w-full p-2 mt-1"
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder="Full Name"
              required
            />
          </div>
        )}
        <div className="w-full">
          <input
            className="border border-zinc-300 rounded w-full p-2 mt-1"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Email Address"
            required
          />
        </div>
        <div className="w-full">
          <input
            className="border border-zinc-300 rounded w-full p-2 mt-1"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="Password"
            required
          />
        </div>
        <button className="bg-primary py-2 text-white w-full rounded-md text-base">
          {state === "Sign up" ? "Create Account" : "Login"}
        </button>
        {state === "Sign up" ? (
          <p>
            Already have an account?{" "}
            <span
              onClick={() => setState("Login")}
              className="cursor-pointer text-primary underline"
            >
              Login Here
            </span>{" "}
          </p>
        ) : (
          <p>
            Don&apos;t have an account?{" "}
            <span
              onClick={() => setState("Sign up")}
              className="cursor-pointer text-primary underline"
            >
              Sign Up
            </span>{" "}
          </p>
        )}
      </div>
    </form>
  );
};

export default Login;
