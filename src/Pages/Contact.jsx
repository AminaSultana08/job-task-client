

const Contact = () => {
    return (
        <div>
        <div className="  pb-20">
               <h1 className="text-center text-blue-900 font-bold text-3xl ">Contact Us</h1>
        <div className="grid lg:grid-cols-3 grid-cols-1 space-y-4 lg:space-y-0  items-center justify-center mx-auto text-center p-20">
           <div className=" lg:pl-20 text-blue-900" >
           <h1 className="text-2xl mb-2 text-blue-900">Phone</h1>
           <p className="text-base text-blue-900">+(568) 456 789 111 <br/>
           +(553) 111 353 543</p>
           </div>
           <div>
            <h1 className="text-2xl mb-2 text-blue-900">Address</h1>
           <p className="text-base text-blue-900"> Office:1st &  3rd floor, <br/> house : C-34 ,Block-E, <br/> Banani, Dhaka <br/>
             1207 Dhaka, Bangladesh</p>
           </div>
           <div>
            <h1 className="text-2xl mb-2 text-blue-900">Email</h1>
            <p className="text-base text-blue-900">task-management@gmail.com <br/> touristGuide@gmail.com</p>
           </div>
        </div>
        </div> 
        </div>
    );
};

export default Contact;