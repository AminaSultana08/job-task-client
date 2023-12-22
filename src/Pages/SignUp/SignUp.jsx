import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import SocialSignIn from "../../Component/SocialSignIn";

const SignUp = () => {
    const {register,handleSubmit,reset,formState: { errors },} = useForm()
    const {createUser,updateUserProfile}= useAuth()
    const navigate = useNavigate()
    
      const onSubmit = (data) => {
        console.log(data)
        createUser (data.email,data.password)
        .then(result => {
            const loggedUser = result.user
            console.log(loggedUser);
            updateUserProfile(data.name, data.photoURL)
            .then(()=>{
                console.log('user profile info updated');
                reset()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "User created successfully",
                    showConfirmButton: false,
                    timer: 1500
                  });
                  navigate('/')
            } )
            .catch(error =>console.log(error) )
        })
    }
    return (
        <>
        <div>
        <div className="hero min-h-screen bg-white">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
            <div >
                    <img className="w-full h-96" src="https://i.ibb.co/qmXsbb7/6333213.jpg" alt=""/>
                </div>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form onSubmit={handleSubmit(onSubmit)} className="card-body ">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input type="text" {...register("name", { required: true })} name="name" placeholder="name" className="input input-bordered" />
                  {errors.name && <span className="text-red-600">Name is required</span>}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo</span>
                  </label>
                  <input type="url" {...register("photoURL", { required: true })} name="photoURL" placeholder="Photo URL" className="input input-bordered" />
                  {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
                </div>
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
                  <input type="submit" className="btn hover:bg-blue-900 text-white bg-blue-700" name="" value="Sign Up" />

                </div>
              </form>
              <p className="text-center">Have an Account? <Link to='/signIn'><span className="text-blue-800 underline">SignIn</span></Link></p>
              <div className="divider px-9">OR</div>
              <SocialSignIn></SocialSignIn>
            </div>
           
          </div>
        </div>
      </div>
        </>
    );
};

export default SignUp;