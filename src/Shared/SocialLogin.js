import React from "react";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider/AuthProvider";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
  
    const navigate = useNavigate();
  const { googleSignIn } = useContext(AuthContext);
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
        const currentUser = {
          email: user.email,
        };
        fetch(`https://genius-car-client-qooo.vercel.app/jwt`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            localStorage.setItem("geniusToken", data.token);
            navigate(from, { replace: true });
          });
      })

      .catch((err) => console.log(err));
  };
  return (
    <div>
      <p className="text-center">
        <small>Social Login</small>
      </p>
      <p className="text-center">
        <button onClick={handleGoogleSignIn} className="btn btn-ghost">
          Google
        </button>
      </p>
    </div>
  );
};

export default SocialLogin;
