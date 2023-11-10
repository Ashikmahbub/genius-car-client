import React from "react";
import img from '../../assets/images/login/login.svg';

const Login = () => {
    const handleLogin = event => {
        event.preventDefault();
    }
  return (
    <div className="hero  w-full">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content grid md:grid-cols-2  flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            
             <img className="w-3/4" src={img} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <h1 className="text-5xl font-bold text-center mt-5">Login now!</h1>
            <form  onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
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
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input className="btn btn-primary" type="submit"  value="Login" />
                 
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
