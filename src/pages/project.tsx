import React, { useState } from 'react';
import ProjectsCard from '../../components/ProjectsCard';
import { projects as projectsdata } from '../../data';
import NavbarProject from '../../components/NavbarProject';
import { Category } from '../../type';

const Project = () => {
    const [projects,setProject] = useState(projectsdata);
    const [active,setActive] = useState('all');
  const [isDetails, setDetails] = useState<number|null>(null);

    const handelFiilterCategory = (category:Category|'all')=>{
        if(category==='all'){
            setProject(projectsdata)
            setActive(category)
            return;
        }
      const newArray =  projectsdata.filter((item)=>item.category.includes(category))
      setProject(newArray)
      setActive(category)
    }

    return (
        <div className='px-5 py-2 overflow-y-auto ' style={{height:'63vh'}}>
           <NavbarProject handelFiilterCategory={handelFiilterCategory} active={active}/>
           <div className='grid grid-cols-12 gap-4 my-3 relative'>
            {
                projects.map((item)=>(
                    <div className='col-span-12 p-2 sm:col-span-6 lg:col-span-4 bg-gray-200 dark:bg-dark-200 rounded-lg hover:bg-gray-500 hover:dark:bg-zinc-500 hover:dark:text-white duration-300'
                    key={item.name} >
                        <ProjectsCard item={item} isDetails={isDetails} 
                        setDetails={setDetails}/>
                    </div>
                ))
            }
            </div> 
        </div>
    );
};

export default Project;