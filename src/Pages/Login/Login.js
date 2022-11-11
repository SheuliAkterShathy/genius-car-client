import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import img from '../../assets/images/login/login.svg'
import { setAuthToken } from "../../auth/Auth";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Login = () => {

     const {login,googleSignIn} = useContext(AuthContext);
     const navigate = useNavigate();
     const location = useLocation();

     const from = location.state?.from?.pathname || '/';

    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
         console.log(email,password)
         
        login(email,password)
        .then(result=>{
          const user = result.user;
         
          setAuthToken(user)
          navigate(from, {replace:true});

          // // get jwt token
          // fetch('https://genius-car-server-three-mu.vercel.app/jwt', {
          //   method:'POST',
          //   headers:{
          //     'content-type':'application/json'
          //   },
          //   body:JSON.stringify(currentUser)
          // })
          // .then(res=>res.json())
          // .then(data=>{
          //   console.log(data)
          //   // local storage is the easiyest but not the best place to store the jwt token
          //   localStorage.setItem('token', data.token);
          //    navigate(from, {replace:true});
          // })

        })
        .catch(error=>console.error(error))
    }

    const handleGoogleSignIn = () =>{
      googleSignIn()
      .then(result =>{
        const user = result.user;
        console.log(user);
        setAuthToken(user)
        navigate(from, {replace:true});
      })
      .catch(err=> console.error(err))
    }

  return (
    <div className="hero w-full py-20">
      <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <img className="w-3/4" src={img} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">
        <h1 className="text-5xl text-center font-bold">Login</h1>
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
                <input className="btn bg-red-500 border-none" type="submit" value="Login" />
             
            </div>
          </form>

          <div className="flex items-center w-full my-4">
		<hr className="w-full dark:text-gray-400"/>
		<p className="px-3 dark:text-gray-400">OR</p>
		<hr className="w-full dark:text-gray-400"/>
	</div>

 <div className="mb-3">
 <button onClick={handleGoogleSignIn} aria-label="Login with Google" type="button" className="flex items-center justify-center w-[80%] mx-auto p-3 text-white space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-violet-400 bg-red-500">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
				<path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
			</svg>
			<p>Login with Google</p>
		</button>
 </div>
          <p className="text-center">New to Genius Car <Link className="text-red-500" to='/signup'>Sign Up</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
