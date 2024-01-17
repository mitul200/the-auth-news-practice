import qZon1 from "../../../assets/qZone1.png";
import qZon2 from "../../../assets/qZone2.png";
import qZon3 from "../../../assets/qZone3.png";

const RightNav = () => {
  return (
    <div>
        <p className=" ms-5 text-xl font-semibold text-slate-600">Find Us On</p>
      <div className="mx-5 space-y-2">
        <img src={qZon1} alt="" />
        <img src={qZon2} alt="" />
        <img src={qZon3} alt="" />
      </div>
    </div>
  );
};

export default RightNav;
