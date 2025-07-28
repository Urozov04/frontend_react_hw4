import React, { useState } from 'react'
import Popup from "../ui/Popup"
import logo from "../../assets/DWEL®.svg"

const Header = () => {
  const [showSiginin, setShowSignin] = useState(false);
  const handleShowSignin = () => setShowSignin(true);
  const handleCloseSignin = () => setShowSignin(false);

  const [showSignup, setShowSignup] = useState(false);
  const handleShowSignup = () => setShowSignup(true);
  const handleCloseSignup = () => setShowSignup(false);
  return (
    <div>
      <div className="container">
        <div className="flex justify-between items-center h-[105px]">
          <div>
            <img src={logo} alt="" />
          </div>
          <div className="flex gap-5">
            <button onClick={handleShowSignin}>Signin</button>
            <button onClick={handleShowSignup}>Signup</button>
            <Popup isShow={showSiginin} onClose={handleCloseSignin}>
              <div className="w-[414px] bg-white p-8 flex flex-col items-center">
                <div>
                  <img src={logo} alt="" />
                </div>
                <h2 className="text-2xl font-semibold mt-12 mb-6">Login</h2>
                <input
                  className="w-[100%] px-4 py-3 bg-[#cacccf] rounded-[10px]"
                  type="email"
                  placeholder="Enter your email"
                />
                <input
                  className="w-[100%] px-4 py-3 bg-[#cacccf] rounded-[10px] my-6"
                  type="password"
                  placeholder="Enter your password"
                />
                <button className="w-[100%] py-3 bg-[#7000ff] text-white rounded-[10px] font-semibold">
                  Submit
                </button>
              </div>
            </Popup>
            <Popup isShow={showSignup} onClose={handleCloseSignup}>
              <div className="w-[414px] bg-white p-8 flex flex-col items-center">
                <div>
                  <img src={logo} alt="" />
                </div>
                <h2 className="text-2xl font-semibold mt-12 mb-6">Register</h2>
                <input
                  className="w-[100%] px-4 py-3 bg-[#cacccf] rounded-[10px]"
                  type="text"
                  placeholder="Enter your fullname"
                />
                <input
                  className="w-[100%] px-4 py-3 bg-[#cacccf] rounded-[10px] my-6"
                  type="text"
                  placeholder="Enter your phone number"
                />
                <input
                  className="w-[100%] px-4 py-3 bg-[#cacccf] rounded-[10px]"
                  type="email"
                  placeholder="Enter your email"
                />
                <input
                  className="w-[100%] px-4 py-3 bg-[#cacccf] rounded-[10px] my-6"
                  type="password"
                  placeholder="Enter your password"
                />
                <button className="w-[100%] py-3 bg-[#7000ff] text-white rounded-[10px] font-semibold">
                  Submit
                </button>
              </div>
            </Popup>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
