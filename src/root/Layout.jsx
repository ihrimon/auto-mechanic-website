import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer";
import Navbar from "../pages/Shared/Navbar";

const Layout = () => {
  return (
    <div>
      {/* header */}
      <Navbar />
      {/* outlet */}
      <div className="min-h-screen">
        <Outlet />
      </div>

      {/* footer */}
      <Footer />
    </div>
  );
};

export default Layout;
