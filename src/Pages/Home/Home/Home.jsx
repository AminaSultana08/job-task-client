
import { Link } from 'react-router-dom';
import bannerImg from '../../../assets/Best-Task-Management-Software-Platforms.webp'
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
const Home = () => {
    return (
        <div className='flex flex-col gap-5'>
            <Navbar></Navbar>
            <div className='flex'>
            
           <Link to='/dashboard'> <button className='btn bg-blue-500 rounded-lg text-white px-3 hover:bg-blue-800' type="">Let's explore More</button></Link>
            <div>
            <img src={bannerImg} alt=""/>
            </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;