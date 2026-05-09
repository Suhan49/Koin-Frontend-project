import { useState } from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="px-5 pl-1 bg-white shadow-md w-237 lg:w-full  ">
      <div className="flex items-center justify-between py-4 ">
        
        
        <img
          src="https://nevadabusiness.com/wp-content/uploads/2024/10/KOIN-LOGO.png"
          className="w-40"
        />

        
        <div className=" hidden  lg:block flex space-x-7 font-bold items-center ">
          <span className="cursor-pointer" >Crypto Taxes</span>
          <span className="cursor-pointer" >Free Tools</span>
          <span className="cursor-pointer" >Resource Center</span>
          <Button
            label={"Get Started"} className="cursor-pointer"
            onClick={() => navigate("/signup")}
          />
        </div>

        
        
        <div className="lg:hidden ">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      
      {isOpen && (
        <div className=" flex flex-col space-y-4 pb-4 font-bold ">
          <span className="cursor-pointer"  >Crypto Taxes</span>
          <span className="cursor-pointer" >Free Tools</span>
          <span className="cursor-pointer" >Resource Center</span>
          <Button
            label={"Get Started"} className={"cursor-pointer"}
            onClick={() => navigate("/signup")}
          />
        </div>
      )}
    </div>
  );
}

export default Navbar;