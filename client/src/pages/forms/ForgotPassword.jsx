import { useState } from "react";
import { useNavigate } from "react-router-dom";


import {
  MdEmail,
  IoFingerPrintSharp,
  IoMdArrowBack,
} from "../../utils/icons_resource";

import InputFieldComponent from "../../components/forms/InputFieldComponent";
import FormBtn from "../../components/forms/FormBtn";

const ForgetPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const handleSendOTP = ()=>{
    navigate('/auth/verify-otp');
  }
  
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-[#333]">
    <div className="w-full max-w-md bg-white rounded-lg p-6 flex flex-col gap-6">
      <header className="flex flex-col items-center gap-1">
        <div className="h-12 w-12 border border-[#e0e0e0] text-primary-txt rounded-lg flex items-center justify-center mb-5 ">
          <IoFingerPrintSharp className="h-5 w-5" />
        </div>
        <h1 className="text-2xl font-semibold mb-2">Forget Password?</h1>
        <p className="text-sm text-center font-light text-secondary-txt">
          Enter the email address associated with your account and we will send
          you a verification code to reset your password.
        </p>
      </header>
      <form className="flex flex-col gap-8">
        <InputFieldComponent
          label="Email"
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
          icon={MdEmail}
          value={email}
          onChange={setEmail}
          required={true}
        />

        <div className="flex flex-col gap-3 w-full">
          <FormBtn btnText="Send OTP" onClick={handleSendOTP} />

          <button className="border hover:bg-[#f5f5f5] text-primary-txt px-4 py-2 rounded-md flex gap-2 items-center justify-center"
          onClick={() => navigate("/auth/login")}
          >
            <IoMdArrowBack className="h-5 w-5" />
            <span className="text-sm font-medium font-body">Back to Login</span>
          </button>
        </div>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;