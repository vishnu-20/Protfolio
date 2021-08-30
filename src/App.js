import React from "react";
import "./App.css";
import OtherDetails from "./Components/OtherDetails";
import Profile from "./Components/Profile";
import { motion } from "framer-motion"
import Email from "./Components/Email";
import { useState } from "react";


function App() {
 const varient={
   hidden :{
    x:'30vh',
    opacity:0,
    delay:5
   },
   visible :{
x:0,
opacity:1,
transition : {
  delay:0.6,duration:0.7,type :"spring"
}
   }
 }
 const profile_varient={
   visible:{
    x:0,
    opacity:1,
    transition:{
      delay:0.6,duration:0.7,type:'spring'
    }
   },
   hidden :{
     x:'-10vh',
     opacity:0
    
   }
 }

 const [message, setMessage] = useState(false);
  return (
    
   
    <div className="app">
      <Email send={message} sendMail={setMessage} />
      <div className="container my-4">
        <div className="row app_row">
          <div className="col-lg-3 ">
            <motion.div className="profile"
            variants={profile_varient}
            initial='hidden'
            animate="visible"
            >
              <Profile send={message} sentEmailDirect={setMessage} />
            </motion.div>
          </div>
          <div className="col-lg-9"> 
            <motion.div className="other_details"
            variants={varient}
            initial="hidden"
            animate="visible">
              <OtherDetails send={message} sentEmailDirect={setMessage}/>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
   
  );
}

export default App;
