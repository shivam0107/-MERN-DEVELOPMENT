import frameImage from "../assets/frame.png"
import { SignupForm } from "./SignupForm";
import LoginForm from "./LoginForm";
import {FcGoogle} from "react-icons/fc"

function Template({ title, desc1, desc2, image, formType, setIsLoggedIn }) {
    return (
      <div className="flex justify-between w-11/12 max-w-[1160px] py-12 mx-auto gap-x-20  ">
        <div className="w-11/12 max-w-[450px] " >
          <h1 className="text-slate-100 font-semibold text-[1.875rem] leading-[2.875rem]  ">
            {title}
          </h1>
          <p className="text-[1.125rem] leading-[1.625rem] mt-4 ">
            <span className="text-slate-400 ">{desc1}</span>
            <br />
            <span className="text-blue-300 italic">{desc2}</span>
          </p>

          {formType === "signup" ? (
            <SignupForm setIsLoggedIn={setIsLoggedIn} />
          ) : (
            <LoginForm setIsLoggedIn={setIsLoggedIn} />
          )}

          <div className="flex w-full items-center my-4 gap-x-2">
            <div className="h-[1px] w-full bg-slate-600 "></div>
            <div className="text-slate-400 ">OR</div>
            <div className="h-[1px] w-full bg-slate-600 "></div>
          </div>

          <button
            className="w-full flex justify-center items-center
           rounded-[8px] font-medium  text-slate-400 border border-slate-600 py-[8px] px-[12px] gap-x-2  mt-6"
          >
            <FcGoogle />
            <p>Sign in with google</p>
          </button>
        </div>

        <div className="relative w-11/12 max-w-[450px]" >
          <img
            src={frameImage}
            alt="Pattern"
            width={558}
            height={584}
            loading="lazy"
          />
          <img
            src={image}
            alt="Pattern"
            width={558}
            height={584}
            loading="lazy"
            className="absolute -top-4 right-4"
          />
        </div>
      </div>
    );
}

export default Template;