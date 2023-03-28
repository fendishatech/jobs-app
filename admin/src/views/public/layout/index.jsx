import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

const PublicLayout = () => {
  return (
    <>
      <Navbar />
      <div className="mt-[60px]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default PublicLayout;
