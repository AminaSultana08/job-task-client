import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import avatar from '../../../assets/avatar.jpg'

const Navbar = () => {
    const {user,logOut} = useAuth()
    const handleLogOut =()=>{
      logOut()
      .then(() => { })
            .catch(error => {
                console.log(error);
            })
    }
   const navOptions= <>
   <li><NavLink to='/' className={({ isActive, isPending }) =>
   isPending ? "pending" : isActive ? "text-teal-300 underline" : ""
 }  >Home</NavLink> </li>
   <li><NavLink to='/contact' className={({ isActive, isPending }) =>
   isPending ? "pending" : isActive ? "text-teal-300 underline" : ""
 } >Contact</NavLink> </li>
 
  {
    user ? <> <button onClick={handleLogOut} className={`bg-blue-900 flex justify-center items-center gap-1 text-white ${({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-teal-300 underline" : ""
  }`} type="">Sign Out</button>
 
  </> : <><li><Link to='/signIn'  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-teal-300 underline" : ""
  } >Sign In</Link> </li></>
}


    </>
   
    return (
        <>
        <div className="navbar bg-blue-900 text-white ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navOptions}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Task Management</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navOptions}
          </ul>
        </div>
        <div className=" flex item-center navbar-end">
        <span className="px-5">{user?.displayName}  </span>
        <img
        className='rounded-full xl:w-20 xl:h-20 lg:w-20 lg:h-12 md:w-20 md:h-12 sm:w-10 sm:h-10 w-8 h-8  border-red-800 border-[2px]'
        referrerPolicy='no-referrer'
        src={user && user.photoURL ? user.photoURL : avatar}
        alt='profile'
       
      />
        </div>
      </div>
        </>
    );
};

export default Navbar;