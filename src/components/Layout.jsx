import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

function Layout() {
  return (
    <>
      <div className="dashboard-container">
        <Sidebar />
        <main className="dashboard-content">
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default Layout;
