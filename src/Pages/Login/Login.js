import React, {  useContext } from "react";
import img from '../../assets/images/login/login.svg';
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Login = () => {
  const {loginUser} =useContext(AuthContext);
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const navigate = useNavigate();
    const handleLogin = event => {
        event.preventDefault();
       
        const form = event.target;
        const email =form.email.value;
        const password = form.password.value;
        loginUser(email,password)
        .then(result =>{
          const user = result.user;
          console.log(user);
          const currentUser = {
            email:user.email
          }
          fetch(`http://localhost:5000/jwt`,{
            method :'POST',
            headers: {
              'content-type': 'application/json'
            },
            body:JSON.stringify(currentUser)
          })
          .then(res =>res.json())
          .then(data =>{
              console.log(data);
              localStorage.setItem('geniusToken',data.token);
              navigate(from,{replace:true});
          })
          
          
        })
        .catch(err =>console.error(err));
    }
  return (
    <div className="hero  w-full my-20">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content grid md:grid-cols-2  flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            
             <img className="w-3/4" src={img} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 my-20 py-20">
            <h1 className="text-5xl font-bold text-center mt-5">Login now!</h1>
            <form  onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
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
                  name="password"
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
                <input className="btn btn-warning" type="submit"  value="Login" />
                 
              </div>
            </form>
            <p className="text-center">New to Genius Car account <Link className="text-orange-600 font-bold" to="/signup">Sign Up</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
