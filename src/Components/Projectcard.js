import React from "react";
import { motion } from "framer-motion";
const varient={
  hidden:{
    opacity:0,
  },
  visible:{
   opacity:1,
   transition : {
    delay:0.2,duration:0.6
  }
  }

}

function Projectcard({
  value: { name, image, deployed_url, github_url, category },
}) {
  return (
    <motion.div className=" col-lg-4  col-md-6 projectcard"
    initial="hidden"
    animate="visible"
    variants={varient}
    >
      <figure className="projectcard_wrapper">
         
          <a href={deployed_url}  >
          <img src={image} alt="noimage" className="project_image" />
        </a>
        <div className="project_title">
          <span className="space">
          <i className="fa fa-github fx-lg" aria-hidden="true"></i>
               </span>
               <a href={github_url} className="a" >
              {name}
          </a>
        </div>
      </figure>
    </motion.div>
  );
}

export default Projectcard;
