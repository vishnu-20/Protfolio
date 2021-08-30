import { useState,React} from 'react'
import Projectcard from './Projectcard'
import Projects_data from './Projects_data'
import { motion } from "framer-motion"


function Projects() {

  const [projects, setProjects] = useState(Projects_data);

  const handlenavBar= (name)=>{
     const new_arr= Projects_data.filter(projects=>projects.category.includes(name));
     setProjects(new_arr);

  }

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
    return (
        <motion.div className="container project_main"
         variants={varient}
            initial="hidden"
            animate="visible"
        >
            <div className="project_navbar"
            >
                <div className="navbar_item"  onClick={()=>{setProjects(Projects_data)}}>All</div>
                <div className="navbar_item" onClick={()=> {handlenavBar("react")}}>React</div>
                <div className="navbar_item" onClick={()=>{handlenavBar("java")}}>Java</div>

            </div>
           <div className="row data_row">
             {
                 projects.map((data)=>(
                     < Projectcard value={data} key={data.id}/>

                 ))
             }
       
           </div>
        </motion.div>
    )
}

export default Projects;
