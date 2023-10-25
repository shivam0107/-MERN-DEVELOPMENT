import React, { useState } from "react";
import {AiOutlineEye , AiOutlineEyeInvisible} from "react-icons/ai"
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


const LoginForm = ({ setIsLoggedIn }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

    const navigate = useNavigate();
    
  const [showPassword, setShowPassword] = useState(false);

  function changeHandler(event) {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }

  function submitHandler(event) {
      event.preventDefault();
      setIsLoggedIn(true);
      toast.success("logged In");
      navigate("/Dashboard");

  }

  return (
    <form
      onSubmit={submitHandler}
      className="flex flex-col w-full gap-y-4 pt-6 "
    >
      <lable className="w-full ">
        <p className="text-[0.87rem] text-slate-100 mb-1 leading-[1.375rem] ">
          Email Address<sup className=" text-red-800 ">*</sup>
        </p>
        <input
          required
          type="email"
          value={formData.email}
          onChange={changeHandler}
          placeholder="Enter email id"
          name="email"
          className="bg-slate-800 rounded-[0.5rem] text-slate-300 w-full p-[12px]"
        />
      </lable>

      <lable className="w-full relative">
        <p className="text-[0.87rem] text-slate-100 mb-1 leading-[1.375rem] ">
          Password<sup className=" text-red-800 ">*</sup>
        </p>
        <input
          required
          type={showPassword ? "text" : "password"}
          value={formData.password}
          onChange={changeHandler}
          placeholder="Enter password"
          name="password"
          className="bg-slate-800 rounded-[0.5rem]  text-slate-300 w-full p-[12px]"
        />

        <span
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute right-3 top-[43px] cursor-pointer "
        >
          {showPassword ? (
            <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
          ) : (
            <AiOutlineEye fontSize={24} fill="#AFB2BF" />
          )}
        </span>

        <Link to="#">
          <p className="text-xs mt-1 max-w-max ml-auto text-blue-100 " >Forgot Password</p>
        </Link>
      </lable>

      <button className="bg-yellow-400 rounded-[8px] font-medium text-slate-800 px-[12px] py-[8px] mt-6" >Sign in</button>
    </form>
  );
};

export default LoginForm;