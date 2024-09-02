import { NavLink } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
      <form className="flex flex-col gap-4 ">
        <input
          type="text"
          placeholder="Enter the username"
          name="username"
          className="border p-3 rounded-lg"
        />
        <input
          type="email"
          placeholder="Enter the email"
          name="email"
          className="border p-3 rounded-lg "
        />
        <input
          type="password"
          placeholder="Enter the password"
          name="password"
          className="border p-3 rounded-lg"
        />
        <button className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:bg-slate-900 opacity-75">Sign up</button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Have an account</p>
        <NavLink to={"/sign-in"}>
          <span className="text-blue-700">sign-in</span>
        </NavLink>
      </div>
    </div>
  );
}

export default SignUp
