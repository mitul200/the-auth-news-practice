import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";

const Register = () => {
  const { creatUser } = useContext(AuthContext);
  console.log(creatUser);


  const handelregister = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    creatUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handelregister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">name</span>
                </label>
                <input
                  type="name"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>
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
                <label  className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <Link  to='/trams' className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</Link></label>
                <p>
                  Dont Have an account?{" "}
                  <Link to="/login" className=" text-red-700">
                    login
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

export default Register;
