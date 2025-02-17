import { Outlet } from "react-router-dom";
import "../App.css";
import Header from "./Header";

const Layout = () => {
  // const location = useLocation();
  // const isAuthPage =
  //   location.pathname === "/login" || location.pathname === "/signup";

  return (
    <div className="w-full h-full flex flex-col">
      <Header />
      <main className="w-full h-[calc(100%-105px)] px-6 py-6 bg-bgPrimary overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
