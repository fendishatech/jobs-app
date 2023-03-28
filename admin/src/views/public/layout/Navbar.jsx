import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// navbar that has glassmorphic effect on scroll, a drop down menu and links to home with text logo and  logs and jobs and login, logout buttons
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav
      className={`w-full h-[60px] px-6 py-2 fixed top-0 left-0 right-0 z-10  flex items-center justify-between  ${
        scrolled
          ? "bg-opacity-10 backdrop-filter backdrop-blur-[5px] shadow-lg"
          : "bg-transparent"
      }`}
    >
      {/* Logo Section */}
      <Link to={"/"}>
        <h1 className="font-bold text-black text-2xl">
          Logo <span className="font-bold text-green-700 text-3xl">Jobs</span>{" "}
        </h1>
      </Link>
      {/* Menu Section */}
      <ul className="flex font-semibold text-xl">
        <Link className="" to={"/jobs"}>
          <li className="hover:bg-slate-500 py-2 px-3 relative">
            JOBS
            <div className="hidden px-2 pt-4 pb-2 w-60 absolute bg-slate-500 rounded-md shadow-lg">
              <span>New JOb</span>
            </div>
          </li>
        </Link>
        <Link to={"/blogs"}>
          <li className="hover:bg-slate-500 py-2 px-3">BLOGS</li>
        </Link>
      </ul>
      {/* Logging Section */}
      <button className="bg-green-500 px-8 py-2 rounded text-white text-xl hover:bg-green-600">
        Logout
      </button>
    </nav>
  );
};

export default Navbar;
