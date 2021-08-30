import React,{useState,useEffect} from "react";
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { motion } from "framer-motion"

function Navbar() {

  const varients={
    hidden :{
      y:'-30vh',
      opacity: 0
    },
    visible :{
y:0,
opacity:1,

transition : {
  delay:0.9,duration:0.8,type :"spring"
}
    }
  }

const [navState, setnavState] = useState('');
useEffect(()=>{
let url=window.location.href;
if(url.endsWith("/")){
setnavState("About");
}else if(url.endsWith("/resume")){
  setnavState("Resume");

}else if(url.endsWith("/projects")){
  setnavState("Projects");
}
},[navState])
  return (
    
  <motion.div className="navbar"
    variants={varients}
    initial="hidden"
    animate="visible" >
      <div className="navbar_active">{navState}</div>
      <div className="navbar_items">
          {navState!=='About'?
          <Link to="/" className="navbar_item"><div onClick={()=>setnavState("About")}>About</div></Link>:null
        }
        {/* && op used in here has the same fuctionality of if */}
        {navState!=='Resume' &&  <Link to="/resume" className="navbar_item">
        <div onClick={()=>setnavState("Resume")} >Resume</div>
        </Link> }
          
         {navState!=="Projects"? <Link to="/projects" className="navbar_item">
         <div onClick={()=>setnavState("Projects")}>Projects</div>
         </Link>:null}
         
      </div>
    </motion.div>


  
  );
}

export default Navbar;
