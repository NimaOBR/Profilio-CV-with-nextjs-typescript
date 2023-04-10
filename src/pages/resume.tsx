import React from "react";
import { languages } from "../../data";
import ResumeBar from "./../../components/ResumeBar";
import { tools } from "./../../data";

// framer motion
import {motion}from 'framer-motion'


const resume = () => {
  return (
    <motion.div initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8 }} className="px-6 py-2">
      {/* Eductions */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">
              Computer and Electronics Science Engineering
            </h5>
            <p className="font-semibold">Start of Technology(2019-2023)</p>
            <p className="my-3">
              Student at Johns Hopkins University, USA And I have a valid degree
            </p>
          </div>
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold">Experience</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">Software Engineer</h5>
            <p className="font-semibold">Jr-TCS(2022-2023)</p>
            <p className="my-3">
              2 years of work experience in a foreign company
            </p>
          </div>
        </div>
      </div>
      {/* Grid Language */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h5 className="text-2xl font-bold mt-3 max-[520px]:text-xl">Languages & Frameworks</h5>
          <div className="my-2">
            {languages.map((item) => (
              <ResumeBar item={item} key={item.name} />
            ))}
          </div>
        </div>
        <div>
          <h5 className="text-2xl font-bold mt-3 max-[520px]:text-xl">Tools & Softwares & Hardwares</h5>
          <div className="my-2">
            {tools.map((item) => (
              <ResumeBar item={item} key={item.name} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default resume;
