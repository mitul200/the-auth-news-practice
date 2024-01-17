import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider";

const Navber = () => {

  const {user , logOut} = useContext(AuthContext)
  console.log(user)

  const handelLogout=()=>{
    logOut()
    .then(()=>{})
    .catch(console.error())
  }
  
  return (
    <div className="mx-20">
      <div>
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link to='/'>Home</Link>
                </li>
                <li>
                  <Link to='/'>About</Link>
                </li>
                <li>
                  <Link to='/'>carrer</Link>
                </li>
              </ul>
            </div>
            
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link to='/' className="m-3 font-semibold text-slate-700">Home</Link>
              </li>
              <li>
                <Link to='/' className="m-3 font-semibold text-slate-700">About</Link>
              </li>
              <li>
                <Link to='/' className="m-3 font-semibold text-slate-700">Carrer</Link>
              </li>
              
            </ul>
          </div>
          <div className="navbar-end">
               <p className="m-3 font-semibold text-slate-700"> {user&& user.email}</p>
               {user ? <button onClick={handelLogout} className=" bg-slate-500 px-3 py-2 rounded-xl text-white">LogOut</button>:
               <Link to='/login' className="btn text-white">Login</Link>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navber;
