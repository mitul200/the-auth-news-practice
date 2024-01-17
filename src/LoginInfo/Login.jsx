import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";

const Login = () => {
    const {handelSingIn} = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || "/";
    console.log(location)
    const handelLogin =(event)=>{
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        console.log(email , password)
        handelSingIn(email , password)
    .then(result=>{
        const loggedUser = result.user
        console.log(loggedUser)
        navigate(from, { replace: true })
    })
    .catch(error=>{
        console.log(error)
    })
      
    }
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handelLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
                <p>
                  Dont Have an account?{" "}
                  <Link  to="/register" className=" text-red-600">
                    register
                  </Link>
                </p>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
