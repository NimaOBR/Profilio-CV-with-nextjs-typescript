import React, { FunctionComponent, useState } from "react";
import { IProject } from "../type";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import Image from "next/image";

// motions
import { motion } from "framer-motion";

const ProjectsCard: FunctionComponent<{
  item: IProject;
  isDetails: null | number;
  setDetails: (id: number | null) => void;
}> = ({
  item: {
    id,
    name,
    category,
    deploy_url,
    descriptions,
    github_url,
    image_path,
    key_tech,
  },
  isDetails,
  setDetails,
}) => {
  const container = {
    initial: {
      y: 60,
    },
    animate: {
      y: 0,
    },
  };

  return (
    <motion.div
      className="z-50"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Image
        quality="100"
        layout="responsive"
        unoptimized
        src={image_path}
        alt={name}
        className="cursor-pointer "
        onClick={() => setDetails(id)}
        width="300"
        height="150"
      />
      <p className="my-2 text-center">{name}</p>
      {isDetails === id && (
        <motion.div   initial={{ opacity: 0}}
        animate={{ opacity: 1}}
        transition={{ duration: 0.5 }} className="grid md:grid-cols-2 md:p-10 rounded-lg w-full absolute top-0 left-0 gap-x-12 text-block bg-gray-300 dark:text-white dark:bg-dark-100 p-2">
          <motion.div variants={container} initial='initial' animate='animate'>
            <motion.div className='border-4 border-white rounded-sm' variants={container} initial='initial' animate='animate'>
            <Image
              src={image_path}
              alt={name}
              quality="100"
              layout="responsive"
              unoptimized
              width="150"
              height="100"
            />
            </motion.div>
            <div className="flex justify-center my-4 space-x-3">
              <a
                target="_blank"
                href={github_url}
                className="flex items-center p-2  space-x-3 text-lg bg-gray-200 dark:bg-dark-200
                hover:bg-zinc-300 hover:dark:bg-white hover:dark:text-black duration-300 rounded-md"
              >
                <AiFillGithub className="item-center" />
                <span>GitHub</span>
              </a>
              <a
                target="_blank"
                href={deploy_url}
                className="flex p-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200 hover:bg-zinc-300 hover:dark:bg-white hover:dark:text-black items-center duration-300 rounded-md"
              >
                <AiFillProject />
                <span>Project</span>
              </a>
            </div>
          </motion.div>
          <motion.div variants={container} initial='initial' animate='animate'>
            <h2 className="mb-3 text-xl md:text-2xl font">{name}</h2>
            <h3>{descriptions}</h3>
            <div className="flex flex-wrap mt-5 space-x-3 text-md tracking-tighter">
              {key_tech.map((item) => (
                <span
                  className="px-2 py-1 my-1 bg-gray-200 dark:bg-dark-200 rounded-sm"
                  key={item}
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
          <button
            onClick={() => setDetails(null)}
            className="absolute p-1 rounded-full top-0 right-3 focus:outline-none bg-gray-200 dark:bg-dark-200"
          >
            <MdClose
              size={25}
              className="hover:bg-white hover:text-black rounded-full duration-300"
            />
          </button>
        </motion.div>
      )}
    </motion.div>
  );
};

export default ProjectsCard;
