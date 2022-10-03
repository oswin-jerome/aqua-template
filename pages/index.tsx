import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Layout from "../layout/layout";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
        <div className="bg-gradient-to-br md:col-span-2 from-app-aqua-lime to-app-peach rounded-lg h-64 relative">
          <div className="bg-app-aqua text-white absolute -bottom-2 -right-2 px-6 py-2 rounded-br-lg rounded-tl-3xl flex gap-2 text-sm items-center">
            <p>EXPLORE</p>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
        <div className="bg-app-peach rounded-lg h-64"></div>
      </div>
    </Layout>
  );
};

export default Home;
