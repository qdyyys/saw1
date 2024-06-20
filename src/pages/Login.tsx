import { useState } from "react";
import logo from "../../public/images/logo.svg";
import appleSvg from "../../public/images/svg/apple.svg";
import googleSvg from "../../public/images/svg/google.svg";
import { IoMdEyeOff } from "react-icons/io";
import { IoEye } from "react-icons/io5";

const Login = () => {
  const [showPass, setShowPass] = useState(true);

  return (
    <div id="login" className="px-10">
      <img
        src={logo}
        alt="logotype"
        className="relative left-1/2 -translate-x-1/2 pt-14 mb-16"
      />

      <div className="max-w-xl mx-auto">
        <h1 className="font-FuturaDemiCTT text-6xl text-gray text-center mb-6">
          Добро пожаловать!
        </h1>

        <div className="flex flex-col gap-5">
          <input
            type="text"
            placeholder="Телефон / email"
            className="px-8 py-3.5 outline-none bg-transparent border-2 border-lightBLue rounded-inputRounded font-FuturaDemiCTT placeholder:text-gray text-2xl text-gray"
          />
          <div className="w-full relative">
            <input
              type={showPass ? "text" : "password"}
              name="password"
              id="pass"
              placeholder="Пароль"
              className="px-8 py-3.5 pr-12 outline-none bg-transparent border-2 border-lightBLue rounded-inputRounded placeholder:text-gray font-FuturaDemiCTT text-2xl text-gray w-full"
            />
            {showPass ? (
              <IoEye
                className="absolute right-5 top-1/2 -translate-y-1/2 text-2xl cursor-pointer"
                onClick={() => setShowPass(false)}
              />
            ) : (
              <IoMdEyeOff
                className="absolute right-5 top-1/2 -translate-y-1/2 text-2xl cursor-pointer"
                onClick={() => setShowPass(true)}
              />
            )}
          </div>
        </div>

        <div className="flex mt-5 mb-3">
          <button className="font-FuturaDemiCTT text-2xl text-white bg-lightBLue flex-1 rounded-inputRounded py-3.5 mr-7 active:scale-95 transition">
            Войти
          </button>

          <div className="flex gap-3.5">
            <img src={appleSvg} alt="" className="cursor-pointer" />
            <img src={googleSvg} alt="" className="cursor-pointer" />
          </div>
        </div>

        <div className="font-FuturaDemiCTT text-graytext-center">
          Нажимая на кнопку я даю согласие на обработку персональных данных.
        </div>
      </div>
    </div>
  );
};
export default Login;
