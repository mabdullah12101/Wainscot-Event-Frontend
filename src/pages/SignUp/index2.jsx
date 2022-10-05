function SignUp() {
  return (
    <main className="wrapper">
      <section className="left">
        <div className="img-wrapper">
          <img src="./assets/img/image-authentication.png" alt="" />
        </div>
      </section>
      <section className="right">
        <div className="brand-wrapper">
          <img src="./assets/img/logo.png" alt="" />
          <span className="brand-text">
            <h2>
              We<span>tick</span>
            </h2>
          </span>
        </div>

        <h2>Sign Up</h2>
        <span className="caption">
          Already have an account?
          <a
            href="login.html"
            className="text-[#3366ff] font-bold no-underline"
          >
            Log in
          </a>
        </span>

        <form action="">
          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Email" />
          <div className="input-icons">
            <i className="iconify" data-icon="bi:eye"></i>
            <input type="password" placeholder="Password" />
          </div>
          <div className="input-icons">
            <i className="iconify" data-icon="bi:eye"></i>
            <input type="password" placeholder="Confirm Password" />
          </div>
          <div className="checkbox">
            <input type="checkbox" id="checkbox" />
            <label htmlFor="checkbox">Accept terms and condition</label>
          </div>

          <button type="submit" className="button-submit">
            Sign Up
          </button>
        </form>
      </section>
    </main>
  );
}

export default SignUp;
