import { Outlet } from "react-router-dom";
import Header from "../pages/Shared/Header";
import Leftnav from "../pages/Shared/LeftNav/Leftnav";
import RightNav from "../pages/Shared/RightNav/RightNav";

const Main = () => {
  return (
    <div>
      <Header></Header>
      {/* grid---layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-20 justify-items-center">
        <div className="text-center">
         <Leftnav></Leftnav>
        </div>
        <div className="text-center   w-auto">
         <Outlet></Outlet>
        </div>
        <div className="">
          <RightNav></RightNav>
        </div>
      </div>
    </div>
  );
};

export default Main;
