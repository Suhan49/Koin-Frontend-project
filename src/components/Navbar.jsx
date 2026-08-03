import { useState } from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="w-full bg-white shadow-md">
      <div className="w-full px-4 sm:px-6 lg:px-8">

        {/* Top Navbar */}
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <img
            src="https://nevadabusiness.com/wp-content/uploads/2024/10/KOIN-LOGO.png"
            alt="KoinX"
            className="w-32 sm:w-36 lg:w-40"
          />

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8 font-semibold">
            <span className="cursor-pointer hover:text-blue-600">
              Crypto Taxes
            </span>

            <span className="cursor-pointer hover:text-blue-600">
              Free Tools
            </span>

            <span className="cursor-pointer hover:text-blue-600">
              Resource Center
            </span>

            <Button
              label="Get Started"
              className="cursor-pointer"
              onClick={() => navigate("/signup")}
            />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
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

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden border-t py-4">

            <div className="flex flex-col gap-4 font-semibold">

              <span className="cursor-pointer">
                Crypto Taxes
              </span>

              <span className="cursor-pointer">
                Free Tools
              </span>

              <span className="cursor-pointer">
                Resource Center
              </span>

              <Button
                label="Get Started"
                className="w-full cursor-pointer"
                onClick={() => navigate("/signup")}
              />

            </div>

          </div>
        )}

      </div>
    </nav>
  );
}

export default Navbar;