import React, { FunctionComponent } from "react";
import { ISkill } from "../type";

// framer motion
import {motion}from 'framer-motion'

const ResumeBar: FunctionComponent<{ item: ISkill }> = ({item: { Icon, level ,name } }) => {
  const bar_width = `${level}`
const variants ={
  initial:{
    width:'60%'
  },
  animate:{
    width:bar_width,
    transition:{
      duration:0.4,
      type:'spring',
      damping:10,
      stiffness:100,
    },
  },
}
  return (
    <div className="text-white my-2 rounded-full bg-gray-200 dark:bg-dark-200">
      <motion.div
      variants={variants}
      initial='initial'
      animate='animate'
        className="px-4 py-1 flex items-center rounded-full bg-gradient-to-r from-Newgreen to-Newblue max-[520px]:text-sm  max-[400px]:text-xs"
        style={{ width: bar_width }}
      >
        <Icon className="mr-3" />
        {name}
      </motion.div>
    </div>
  );
};

export default ResumeBar;
