import React,{useEffect,useRef} from 'react';
import { Link,useHistory} from 'react-router-dom';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const Register = () => {
  // user registration validation
  const { register, handleSubmit, formState: { errors },reset,watch} = useForm();
  const password = useRef({});
  password.current = watch("password", "");
  // end user registration validation

  const onSubmit = (data) => {
    console.log(data)
    reset()
  }

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
          <section>
  <div className='container'>
    <div className='user signinBx'>
      <div className='imgBx'>
        <img src='images/images/manmandir-logo.png' alt='' />
      </div>
      <div className='formBx'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2>Sign Up</h2>
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
          <input type='text' name placeholder='Name' {...register("name",{required:"Name is Required",pattern:{value:/^[a-zA-Z]*$/,message:"Name must be alphanumeric"}})} />
          {errors.name && (<small className="text-danger">{errors.name.message}</small>)}
          
          <input type='email' name placeholder='Email Address' {...register("email",{required:"Email is Required",pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,message:"Invalid email address"}})} />
          {errors.email && (<small className="text-danger">{errors.email.message}</small>)}
          
          <input type='number' name placeholder='Mobile Number' {...register("mobileNumber",{required:"Mobile Number is Required",pattern:{value:/^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,message:"Invalid mobile number"}})} />
          {errors.mobileNumber && (<small className="text-danger">{errors.mobileNumber.message}</small>)}
          
          <input type='password' name placeholder='Password' {...register("password",{required:"Password is Required"})} />
          {errors.password && (<small className="text-danger">{errors.password?.message}</small>)}
          
          <input type='password' name placeholder='Confirm Password' {...register("confirmPassword", {required : "Confirm Password is Required",validate: value => value === password.current|| 'The passwords do not match'})} />
          {errors.confirmPassword && (<small className="text-danger">{errors.confirmPassword?.message}</small>)}
          
          <div className="mt-5">
              <input type='submit' name defaultValue='Login' value='Sign Up' />
          </div>
          
          <p className='signup'>
            Already have an account ?<Link to="/login"> Sign In.</Link>
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

export default Register
