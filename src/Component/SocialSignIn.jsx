
import { FaGoogle } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import useAuth from "../Hooks/useAuth";
import { useNavigate } from "react-router-dom";
const SocialSignIn = () => {
    const {googleSignIn,githubSignIn} = useAuth()
    const navigate = useNavigate()
    const handleGoogleSignIn=()=>{
        googleSignIn()
        .then(result =>{
            console.log(result.user);
            navigate('/')
        })
    }
    const handleGithubSignIn=()=>{
        githubSignIn()
        .then(result =>{
            console.log(result.user);
            navigate('/')
        })
    }
    return (
        <div>
      <div className="flex gap-4 justify-center items-center">
      <button onClick={handleGoogleSignIn} className=" mb-5 flex gap-2 bg-blue-600 text-white rounded-xl px-2 py-1 items-center justify-center" role="button">
     
    
      <span className=" text-sm  flex items-center justify-evenly gap-1">
          <FaGoogle/> Google
      </span>
  </button>
  <button onClick={handleGithubSignIn} className=" mb-5 flex items-center justify-center" role="button">
  
  <span className="button-82-front text-sm gap-2 bg-blue-600 text-white rounded-xl px-2 py-1 flex items-center justify-center">
     <BsGithub/>  Github
  </span>
</button>
      </div>
     
        </div>
    );
};

export default SocialSignIn;