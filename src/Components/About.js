import React from "react";
import profile from "../Assets/profile.jpg";
import SkillCard from "./SkillCard";
import { motion } from "framer-motion"

function About() {
  const skills = [
    {
      icon: profile,
      title: "Java",
      about:
        "this is Vishnu Lal i love to work in this industry. i am currently working at infosys",
    },
    {
      icon: profile,
      title: "Java",
      about:
        "this is Vishnu Lal i love to work in this industry. i am currently working at infosys",
    },
    {
      icon: profile,
      title: "Java",
      about:
        "this is Vishnu Lal i love to work in this industry. i am currently working at infosys",
    },
    {
      icon: profile,
      title: "Java",
      about:
        "this is Vishnu Lal i love to work in this industry. i am currently working at infosys",
    },
    {
      icon: profile,
      title: "Java",
      about:
        "this is Vishnu Lal i love to work in this industry. i am currently working at infosys",
    },
    {
      icon: profile,
      title: "Java",
      about:
        "this is Vishnu Lal i love to work in this industry. i am currently working at infosys",
    },
    {
      icon: profile,
      title: "Java",
      about:
        "this is Vishnu Lal i love to work in this industry. i am currently working at infosys",
    },
  ];

  const aboutVarient={
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
    <motion.div className="about"
    variants={aboutVarient}
            initial="hidden"
            animate="visible"
    
    >
      <div className="about_introduction">
        this is Vishnu Lal i love to work in this industry. i am currently
        working at infosys. this is Vishnu Lal i love to work in this industry.
        i am currently working at infosys this is Vishnu Lal i love to work in
        this industry. i am currently working at infosys,   this is Vishnu Lal i love to work in this industry. i am currently
        working at infosys. this is Vishnu Lal i love to work in this industry.
        i am currently working at infosys this is Vishnu Lal i love to work in
        this industry. i am currently working at infosys
      </div>
      <div className="container about_container">
        <h6 className="about_heading">What I offer</h6>
        <div className="row about_row">
          {skills.map((skill) => (
            <SkillCard skillObj={skill} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default About;
