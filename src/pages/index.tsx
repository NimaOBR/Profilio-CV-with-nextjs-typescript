import { GetServerSidePropsContext, GetStaticPropsContext } from "next";
import React from "react";
import ServiseCard from "../../components/ServiseCard";
import { servises } from "../../data";
// import { Inter } from "next/font/google";
// import { Iservis } from './../../type';

// framer motions
import { motion } from "framer-motion";

const index = ({ envpoint }: any) => {
  console.log(envpoint);

  const fedeInUp = {
    initial: {
      y: 60,
    },
    animate: {
      y: 0,
    },
  };
  const container = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="flex flex-col px-6 pt-1 flex-grow "
    >
      <h5 className="my-3 text-medium">
        I am currently pursuing B.Tech Degree(Final Year) in Computer Science
        Engineering from Academy of Technology. I have 3+ years of experience in
        Web Development and I have a Youtube Channel where I teach Full Stack
        Web Development
      </h5>
      <div
        className="p-4 mt-5 mb-2 bg-nima flex-grow dark:bg-dark-200 rounded-2xl"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <h6 className="my-3 text-xl font-bold tracking-wide">What I Offer</h6>
        <motion.div
          variants={container}
          initial="initial"
          animate="animate"
          className="grid gap-6 lg:grid-cols-2"
        >
          {servises.map((item) => (
            <motion.div
              variants={fedeInUp}
              className="lg:col-span-1 bg-white rounded-lg overflow-hidden"
            >
              <ServiseCard item={item} key={item.id} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};
export default index;

// export const getServerSideProps = async (
//   context: GetServerSidePropsContext
// ) => {
//   const res = await fetch(`${process.env.VERCEL_URL}/api/servises`);
//   const data = await res.json();
//   console.log('SERVER : ', servises);

//   return {
//     props: {
//       // servises: data.servises,
//       envpoint:process.env.VERCEL_URL
//     },
//   };
// };

// export const getStaticProps = async (context: GetStaticPropsContext) => {
//   const res = await fetch("http://localhost:3000/api/servises");
//   const data = await res.json();
//   console.log("SERVER : ", servises);

//   return {
//     props: {
//       servises: data.servises,
//     },
//   };
// };
