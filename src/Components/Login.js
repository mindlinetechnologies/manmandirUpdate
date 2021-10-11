import React,{useEffect} from 'react';
import './../css/login.css';
import { Link,useHistory} from 'react-router-dom';

const Login = () => {
  let history = useHistory();
    useEffect(() => {
        const unlisten = history.listen(() => {
          window.scrollTo(0, 0);
        });
        return () => {
          unlisten();
        }
    },[])
    return (
        <>
<div style={{ backgroundImage: `url("images/images/banner/11.jpg")`,backgroundPosition:'center',backgroundSize:'cover' }}>

<section  className="background" >
  
  <div className='container'>
    <div className='user signinBx'>
      <div className='imgBx'>
        <img src='images/images/manmandir-logo.png' alt='' />
      </div>
      <div className='formBx'>
        <form action onsubmit='return false;'>
          <h2>Sign In</h2>
          <div
            style={{ paddingTop: 10, paddingBottom: 10, textAlign: 'center' }}
          >
            <button class='loginBtn loginBtn--facebook'>
              Login with Facebook
            </button>
            <button class='loginBtn loginBtn--google'>Login with Google</button>
          </div>
          <h5 style={{ paddingTop: 10, paddingBottom: 10, fontWeight: 800 }}>
            OR
          </h5>
          <input type='email' name placeholder='Email Address' />
          <input type='password' name placeholder='Password' />
          <div style={{ textAlign: 'right' }}>
            <Link>Forgot Password ?</Link>
          </div>
          <input type='submit' name defaultValue='Login' value='Sign In' />
          <p className='signup'>
            Don't have an account ?<Link to="/register"> Sign Up.</Link>
          </p>
        </form>

      </div>
    </div>
    <div className='user signupBx'>
      <div className='formBx'>
        <form action onsubmit='return false;'>
          <h2>Create an account</h2>
          <input type='text' name placeholder='Username' />
          <input type='email' name placeholder='Email Address' />
          <input type='password' name placeholder='Create Password' />
          <input type='password' name placeholder='Confirm Password' />
          <input type='submit' name defaultValue='Sign Up' />
          <p className='signup'>
            Already have an account ?
            <a href='#' onclick='toggleForm();'>
              Sign in.
            </a>
          </p>
        </form>
      </div>
    </div>
  </div>
 
</section>
</div>

        </>
    )
}

export default Login
