import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import SocialSignIn from "../../Component/SocialSignIn";


const SignIn = () => {
    const {register,handleSubmit,formState: { errors },} = useForm()

    const {signIn}= useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/' ;

    console.log('state in the location login page', location.state);
    const onSubmit = (data) => {
      console.log(data)
      signIn(data.email,data.password)
      .then(result =>{
          const user = result.user
          console.log(user);
          Swal.fire({
            title: "SignIn Successfully",
            showClass: {
              popup: `
                animate__animated
                animate__fadeInUp
                animate__faster
              `
            },
            hideClass: {
              popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
              `
            }
          });
          navigate(from, { replace:true });
        })
      }
    return (
        <>
        <div>
        <div className="hero min-h-screen bg-white">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
            <div >
            <img className="w-full h-96" src="https://i.ibb.co/C9DG5ZF/6333204.jpg" alt=""/>
             </div>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form onSubmit={handleSubmit(onSubmit)} className="card-body ">
                
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input type="email" name="email"  {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                  {errors.email && <span className="text-red-600">Email is required</span>}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input type="text" name="password"  {...register("password", {
                    required: true,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z].*[a-z])/,
                    maxLength: 20,
                    minLength: 6
                  })}
                    placeholder="password" className="input input-bordered " />
                  {errors.password?.type === "required" && (
                    <p className="text-red-600" role="alert ">Password is required</p>
                  )}
                  {errors.password?.type === "minLength" && (
                    <p className="text-red-600" role="alert ">Password must be 6 characters</p>
                  )}
                  {errors.password?.type === "maxLength" && (
                    <p className="text-red-600" role="alert ">Password must be less than 20 characters</p>
                  )}
                  {errors.password?.type === "pattern" && (
                    <p className="text-red-600" role="alert ">Password must have one upper case,one  lower case,one number and one special characters</p>
                  )}

                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                  </label>

                </div>
                <div className="form-control mt-6">
                  <input type="submit" className="btn hover:bg-blue-900 text-white bg-blue-700" name="" value="Sign In" />

                </div>
              </form>
              <p className="text-center">Have an Account? <Link to='/signUp'  ><span className="text-blue-800 underline">SignUp</span> </Link></p>
              <div className="divider px-9">OR</div>
           <SocialSignIn></SocialSignIn>
            </div>
           
          </div>
        </div>
      </div>
        </>
    );
};

export default SignIn;