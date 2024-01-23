import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Leftnav = () => {
  const [categoris, setCategoris] = useState([]);
  useEffect(() => {
    fetch(`https://news-practice-server-two.vercel.app/categoris`)
      .then((res) => res.json())
      .then((data) => setCategoris(data));
  }, []);
  return (
    <div>
      <div className=" w-[267px] bg-[#E7E7E7] py-4">
        <h2 className=" font-bold">National News</h2>
      </div>
      <div className="m-5 mb-2 space-y-3">
        {categoris?.map((category) => (
        <p className="text-left" key={category.id}>
            <Link
              to={`category/${category.id}`}
              className="text-secondary  fw-bold text-decoration-none"
            >
              {category.name}
            </Link>
          </p>
        ))}
      </div>
    </div>
  );
};

export default Leftnav;
