import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import Navbar from "../../components/Navbar";
const inter = Inter({ subsets: ["latin"] });
import SIdebar from "./../../components/SIdebar";

import { ThemeProvider } from "next-themes";

// framer motions
import {motion}from'framer-motion'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider attribute="class">
    <motion.div initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }} className={inter.className}>
      <div className="grid grid-cols-12 gap-6 my-4 lg:px-10 px-5 sm:px-20 md:px-32 ">
        <div className="lg:col-span-3 bg-white dark:bg-dark-100 rounded-2xl col-span-12 p-4 text-center shadow-lightShadow dark:shadow-darkShadow  " >
          <SIdebar />
        </div>
        <div className="lg:col-span-9 bg-white rounded-2xl col-span-12 flex flex-col dark:bg-dark-100 dark:text-white shadow-lightShadow dark:shadow-darkShadow ">
          <Navbar />
          <Component {...pageProps} />
        </div>
      </div>
    </motion.div>
     </ThemeProvider>
  );
};
export default App;
