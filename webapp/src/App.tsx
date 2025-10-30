import React, { useState } from "react";
import arrow1 from "../public/login/Arrow-1.svg";
import ellipse1 from "../public/login/Ellipse-1.svg";
import icon from "../public/login/arrow_forward.svg";
import polygon1 from "../public/login/Polygon-1.svg";
import rectangle1 from "../public/login/Rectangle-1.svg";
import sotowakuN from "../public/login/sotowaku_n.svg";
import sotowakuP from "../public/login/sotowaku_p.svg";
import star1 from "../public/login/Star-1.svg";

export const Login = (): JSX.Element => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", { name, password });
  };

  return (
    <div className="bg-[var(--purple)] w-full min-h-screen relative overflow-hidden">
      {/* Decorative Images */}
      <img
        className="absolute right-7 bottom-[-30px] w-[346px] h-[300px]"
        alt="Polygon decoration"
        src={polygon1}
        aria-hidden="true"
      />
      <img
        className="absolute left-0 bottom-[-105px] w-[408px] h-[395px]"
        alt="Ellipse decoration"
        src={ellipse1}
        aria-hidden="true"
      />
      <img
        className="absolute left-0 bottom-[270px] w-[269px] h-[270px]"
        alt="Arrow decoration"
        src={arrow1}
        aria-hidden="true"
      />
      <img
        className="absolute top-[60px] left-[61px] w-[381px] h-[356px]"
        alt="Rectangle decoration"
        src={rectangle1}
        aria-hidden="true"
      />
      <img
        className="absolute top-[105px] right-[138px] w-[211px] h-[191px]"
        alt="Star decoration"
        src={star1}
        aria-hidden="true"
      />

      {/* Login Form */}
      <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center absolute top-[448px] left-1/2 transform -translate-x-1/2 space-y-6">
        {/* Name Field */}
        <div className="relative w-[300px] h-16 flex items-center justify-between px-4">
          <input
            type="text"
            id="name-input"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-[220px] h-full bg-[#D8C9FF] rounded-xl border border-black text-gray px-4 outline-none"
            aria-label="名前"
            required
          />
          <label
            htmlFor="name-input"
            className="text-black font-bold text-sm leading-tight tracking-widest text-right"
            style={{ writingMode: "vertical-rl", textOrientation: "upright" }}
          >
            名前
          </label>
        </div>

        {/* Password Field */}
        <div className="relative w-64">
          <img className="w-full h-16 pointer-events-none" alt="パスワード入力枠" src={sotowakuP} />
          <label htmlFor="password-input" className="absolute top-1 left-4 text-black font-bold text-sm">
            パスワード
          </label>
          <input
            type="password"
            id="password-input"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="absolute top-6 left-4 w-[126px] text-gray bg-transparent border-none outline-none"
            aria-label="パスワード"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="relative w-[52px] h-[46px] bg-transparent border-none cursor-pointer"
          aria-label="ログイン"
        >
          <img
            className="absolute w-[66.67%] h-[66.67%] top-[16.67%] left-[16.67%] pointer-events-none"
            alt="ログインアイコン"
            src={icon}
          />
        </button>
      </form>
    </div>
  );
};
export default Login;
