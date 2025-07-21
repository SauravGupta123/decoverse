import React from "react";
import {
  AiFillStar,
  AiOutlineUsergroupAdd,
  AiFillLinkedin,
} from "react-icons/ai";
import { MetaData } from "@components/CustomComponents";
import { Link } from "react-router-dom";
import Contributors from "./Contributors";
import Programs from "./Programs";
import { about_us } from "./assets/assets";
import MuiTimeline from "./Timeline";
import { motion } from "framer-motion";
export default function About() {
  return (
    <>
      <MetaData path="about" />
      <div className=" w-11/12 mx-auto text-center mt-4 antialiased font-outfit ">
        <div className="hero">
          <div className="hero-content flex-col sm:flex-row">
            <div className="left text-center flex flex-col justify-center items-center">
              <div className="w-full flex flex-row justify-between  text-white phone:mt-[80px] max-phone:mt-4">
                <div className="flex flex-col lg:max-w-[50%] text-left">
                  <div className="mb-[50px]">

                    <motion.div
                      initial={{ opacity: 0, x: -150 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1,
                        type: "spring",
                        stiffness: 100,
                        delay: 0.5,
                      }}
                      className="heading mb-8 w-fit"
                    >
                      <h1 className="mt-2 text-white max-md:text-4xl md:text-6xl">
                        <span>Decoverse's Platform</span>
                      </h1>
                      <h3 className="text-left text-custom-blue">
                        Your Gateway to Coding Success!
                      </h3>
                    </motion.div>
                    <motion.p
                      initial={{ opacity: 0, x: -150 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1,
                        type: "spring",
                        stiffness: 100,
                        delay: 1,
                      }}
                      className="text-[20px]"
                    >
                      At Decoverse, we believe coding isn't just a skill, it's
                      a superpower. It's the language of innovation, the key to
                      unlocking countless possibilities, and the fuel that
                      drives the digital world. We're here to empower coders of
                      all levels to take control of their coding journey,
                      showcase their talent, and achieve their full potential.
                    </motion.p>
                  </div>
                  <div className="">
                    <motion.h2
                      initial={{ opacity: 0, x: -150 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1,
                        type: "spring",
                        stiffness: 100,
                        delay: 2,
                      }}
                      className="mb-[18px] font-semibold text-5xl"
                    >

                      Our Mission
                    </motion.h2>
                    <motion.p
                      initial={{ opacity: 0, x: -150 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1,
                        type: "spring",
                        stiffness: 100,
                        delay: 2.5,
                      }}
                      className="text-[20px]"
                    >
                     Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit magnam dignissimos ad soluta consectetur, dolore esse eius provident aspernatur quae veritatis molestias error animi illum laboriosam asperiores officia iure libero.
                    </motion.p>
                  </div>
                </div>
                <motion.div
                  initial={{ scale: 0, y: 150 }}
                  whileInView={{ scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1,
                    type: "spring",
                    stiffness: 100,
                    delay: 1.5,
                  }}
                  className="lg:w-[50%] h-full lg:flex justify-end max-lg:hidden"
                >
                  <img src={about_us} className="object-contain h-[525px]" alt="" /></motion.div>
              </div>
              <div className="mt-[70px]">
                <motion.h2
                  initial={{ opacity: 0, x: -150 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1,
                    type: "spring",
                    stiffness: 100,
                    delay: 0.5,
                  }}
                  className="font-semibold text-5xl text-left  text-white"
                >
                  {" "}
                  Why it is Created
                </motion.h2>

                <motion.div
                  initial={{ opacity: 0, y: 150 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1,
                    type: "spring",
                    stiffness: 100,
                    delay: 0.7,
                  }}
                  className="flex flex-row justify-between mt-[50px] flex-wrap gap-y-[25px] gap-x-[25px] "
                >
                  <div className="hover:scale-110 hover:transition transition border-[1px] flex-1 border-solid border-white bg-[#0e0f10] min-w-[225px] text-white rounded-[12px] py-[30px] px-[25px] text-center">
                    <h3 className="font-semibold text-2xl mb-[20px]">
                      Contests
                    </h3>
                    <p className="text-[1rem]">
                      Explore a curated selection of upcoming coding contests
                      from renowned platforms like LeetCode, Codeforces,
                      CodeChef, and more. Filter contests based on your skill
                      level, preferred format, and available time. Dive into
                      detailed contest descriptions, track leaderboards, and
                      stay ahead of the competition.
                    </p>
                  </div>

                  <div className="hover:scale-110 hover:transition transition border-[1px] flex-1 border-solid border-white min-w-[225px] bg-[#0e0f10] text-white rounded-[12px] py-[30px] px-[25px] text-center">
                    <h3 className="font-semibold text-2xl mb-[20px]">
                      Portfolio
                    </h3>
                    <p className="text-[1rem]">
                      Forget manual updates and tedious formatting. Simply
                      connect your user handles from different platforms, and
                      watch your portfolio blossom with your latest ratings,
                      achievements, and coding history. Impress potential
                      employers, collaborators, and the tech community with your
                      dynamic skill showcase.
                    </p>
                  </div>
                  <div className="hover:scale-110 hover:transition transition border-[1px] flex-1  border-solid border-white min-w-[225px] bg-[#0e0f10] text-white rounded-[12px] py-[30px] px-[25px] text-center">
                    <h3 className="font-semibold text-2xl mb-[20px]">
                     Lorem Epsum
                    </h3>
                    <p className="text-[1rem]">
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ab eum molestias eius minus? Quaerat modi atque, fugit laudantium dolor perferendis magni libero, eaque magnam, sed sit officiis iure molestiae?
                    </p>
                  </div>
                </motion.div>
              </div>
             
            </div>
          </div>
        </div>


      
        </div>
      <div className="divider w-0"></div>
      {/* <Footer /> */}
    </>
  );
}
