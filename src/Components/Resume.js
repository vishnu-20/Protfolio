import React from "react";
import Language from "./Language";
import bar from "../Assets/bar.jpg";
import { motion } from "framer-motion"

export default function Resume() {

const skills=[
    {

    icon:bar,
    language:"react",
    level:"60"

},
    {

    icon:bar,
    language:"java",
    level:"60"

},
    {

    icon:bar,
    language:"react",
    level:"50"

},
{

    icon:bar,
    language:"react",
    level:"60"

},
    {

    icon:bar,
    language:"java",
    level:"60"

},
    {

    icon:bar,
    language:"react",
    level:"50"

},
{

    icon:bar,
    language:"react",
    level:"60"

},
    {

    icon:bar,
    language:"java",
    level:"60"

},
    {

    icon:bar,
    language:"react",
    level:"50"

},
{

    icon:bar,
    language:"react",
    level:"60"

},
    {

    icon:bar,
    language:"java",
    level:"60"

},
    {

    icon:bar,
    language:"react",
    level:"50"

}

]

const resumeVarient={
    hidden:{
      opacity:0,
    },
    visible:{
     opacity:1,
     transition : {
      delay:0.2,duration:0.6
    }
    },

  }


  return (
    <motion.div className="container resume_container"
     variants={resumeVarient}
            initial="hidden"
            animate="visible"
    >
      <div className=" row resume_row">
        <div className="col-lg-6 resume_card">
          <div className="h4">Education</div>
         
            <p className="resume_title">Bachelor of Computer Applications</p>
            <p className="resume_details">Ilahia college of arts and science</p>
            <p className="resume_details">MG UNIVERSITY KOTTYAM</p>
         
        </div>
        <div className="col-lg-5 resume_card_other">
          <div className="h4">Experince</div>
        
            <p className="resume_title">Infosys</p>
            <p className="resume_details">2 years</p>
            <p className="resume_details">MG UNIVERSITY KOTTYAM</p>
         
        </div>
      </div>
      <div className="container technical_container">
      <div className="row resume_Skill">
          <h5 className ="resume_skill_heading">Technical Skills</h5>
          {
              skills.map((language)=>(
                  <Language value={language}/>
              ))
              
          }
      </div>

      </div>
    </motion.div>
  );
}
