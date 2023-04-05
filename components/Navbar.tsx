import React, { useState,useEffect } from "react";
import Link from "next/link";
import {useRouter}  from "next/router";



const Navbar = () => {
  const [activeItem, setActiveItem] = useState<string>("");
  const {pathname} = useRouter()


  const NavItem:React.FC<{activeItem:string,name:string,router:string,setActiveItem:Function}> = ({activeItem,name,router,setActiveItem})=>{
    return(
        activeItem !== name ?( 
            <Link href={router}>
                <span onClick={()=>setActiveItem(name)} className='hover:text-green-400 cursor-pointer max-[420px]:text-sm'>{name}</span>
            </Link>
          ):null
    )
  }


  useEffect(() => {
    if(pathname==='/')setActiveItem('About')
    if(pathname==='/project')setActiveItem('Projects')
    if(pathname==='/resume')setActiveItem('Resume')
  }, [])
  
  return (
    <div className="flex justify-between px-5 py-3 my-3">
      <span className="font-bold text-green-400 text-xl  border-b-4 border-emerald-400 max-[420px]:text-sm">{activeItem}</span>
      <div className="text-blue-400 text-lg flex space-x-5">
        <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name='About'router='/'/>
        <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name='Project'router='/project'/>
        <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name='Resume'router='/resume'/>
      </div>
    </div>
  );
};

export default Navbar;
