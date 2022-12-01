import "./login.css";

function Login() {
    return (
        <div className="login">
            <div className="container">
                <form className="form">
                    <h1>Sign In</h1>
                    <input className="input" type="email" placeholder="Email or phone number" />
                    <input className="input" type="password" placeholder="Password" />
                    <button className="loginButton">Sign In</button>
                    <span>
                        New to Netflix? <b>Sign up now.</b>
                    </span>
                    <small>
                        This page is protected by Google reCAPTCHA to ensure you're not a
                        bot. <b>Learn more</b>.
                    </small>
                </form>
            </div>
        </div>
    )
}

export default Login;