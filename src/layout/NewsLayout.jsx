
import { Outlet } from "react-router-dom";
import RightNav from "../pages/Shared/RightNav/RightNav";
import Header from "../pages/Shared/Header";
import Navber from "../pages/Shared/Navber/navber";

const NewsLayout = () => {
  return (
    <div>
         <Navber/>
      <div className=" grid grid-cols-1 w-full md:grid-cols-2 lg:grid-cols-2 mx-20 justify-items-center">
        <div className="text-center w-[70%]">
          <Outlet></Outlet>
        </div>
        <div className=" w-[30%]">
          <RightNav></RightNav>
        </div>
      </div>
    </div>
  );
};

export default NewsLayout;
