import "./css/Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  // const [isChecked, setIsChecked] = useState<boolean>(false);

  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setIsChecked(event.target.checked);
  // };

  return (
    <div className="login-signup-form">
      <div className="login-signup">
        <div className="login">
          <h1>Login</h1>
          <form className="login-form">
            <div className="login-fields">
              <div className="login-field">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="Type Your Email Address"
                />
              </div>
              <div className="login-field">
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  type="password"
                  placeholder="Type Your Password"
                />
              </div>
              {/* <div className="remember-me">
            <input
              type="checkbox"
              id="rememberMe"
              checked={isChecked}
              onChange={handleChange}
            />
            <label htmlFor="rememberMe">Remember me</label>
          </div> */}
            </div>
            <Link to="/forgot-password" className="forgot-btn">
              Forgot password?
            </Link>
            <button className="login-btn">Login</button>
          </form>
        </div>
        <div className="signup">
          <p>Or</p>
          <Link to="/signup" className="signup-btn">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
