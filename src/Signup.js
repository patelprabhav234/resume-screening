import "./Signup.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    cpassword: "",
  });
 
  const handleChange = (e, field) => {
    setUser({
      ...user,
      [field]: e.target.value,
    });
  };


  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
       localStorage.setItem("userData", JSON.stringify(user));
       navigate("/login");
    }

    const ValidateForm = ()=>{
        if(user.password !== user.cpassword){
            return false;
        }
        if(user.username.trim().length === 0){
            return false;
        }
        if(user.password.length < 6){
            return false;
        };
        if(!user.email.includes("@")){
            return false;
        }

        return true;
    }
  
  const enableSubmit = ValidateForm();
  return (
    <div className="signup-page">
      <div className="signup-card">
        <h2 className="signup-title">Create your account</h2>

        <form
          className="signup-form"
          onSubmit={(e) => handleSubmit(e)}
          method="post"
        >
          <div className="form-group">
            <input
              className="input-field"
              type="text"
              value={user.username}
              name="username"
              onChange={(e) => handleChange(e, "username")}
              placeholder="Username"
              required
            />
          </div>

          <div className="form-group">
            <input
              className="input-field"
              type="email"
              value={user.email}
              name="email"
              onChange={(e) => handleChange(e, "email")}
              placeholder="Email"
              required
            />
          </div>

          <div className="form-group">
            <input
              className="input-field"
              type="password"
              value={user.password}
              name="password"
              onChange={(e) => handleChange(e, "password")}
              placeholder="Password"
              required
            />
          </div>

          <div className="form-group">
            <input
              className="input-field"
              type="password"
              value={user.cpassword}
              name="cpassword"
              onChange={(e) => handleChange(e, "cpassword")}
              placeholder="Confirm Password"
              required
            />
          </div>

          <button
            className={`btn ${!enableSubmit ? "btn-disabled" : ""}`}
            type="submit"
            disabled={!enableSubmit}
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
