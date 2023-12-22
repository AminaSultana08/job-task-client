
import { Link } from 'react-router-dom';
import bannerImg from '../../../assets/Best-Task-Management-Software-Platforms.webp'


const Home = () => {
    return (
        <div className='flex flex-col gap-5'>
           
            <div className='grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-1 grid-cols-1'>
            <img src="https://i.ibb.co/sbgpkvw/Students-or-employees-adding-events-or-deadlines-to-calendar-app.jpg" alt=""/> 
          <div className='text-blue-900 pt-10 pl-6 space-y-5 flex flex-col items-center justify-center'>
          <h1 className='text-3xl text-center font-bold '>Task Management</h1>
          <p className='pb-5'>Boost your productivity with our intuitive task management platform, designed for seamless collaboration and efficient organization. Elevate your workflow and stay on top of tasks effortlessly – try it now for free!</p>
          <Link to='/dashboard'> <button className='btn bg-blue-500 rounded-lg text-white px-3 hover:bg-blue-800 flex items-center justify-center' type="">Let's explore More</button></Link>
          </div>
            <div>
            <img className='w-full h-full' src={bannerImg} alt=""/>
            </div>
            </div>
           
        </div>
    );
};

export default Home;