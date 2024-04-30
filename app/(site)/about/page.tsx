'use client'
import React, { FC } from "react";
import { Tilt } from 'react-tilt'
import { motion } from "framer-motion";
import services from "@/constant/services"
import { fadeIn, textVariant } from "@/lib/Motion";
import Image from "next/image";
import TechStack from "@/components/TechStack";

const defaultOptions = {
  reverse: false,  // reverse the tilt direction
  max: 35,     // max tilt rotation (degrees)
  perspective: 1000,   // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1.1,    // 2 = 200%, 1.5 = 150%, etc..
  speed: 1000,   // Speed of the enter/exit transition
  transition: true,   // Set a transition on enter/exit.
  axis: null,   // What axis should be disabled. Can be X or Y.
  reset: true,    // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}

const ServiceCard = ({ index, title, icon }: any) => (
  <Tilt options={defaultOptions} className="xs:w-[250px] w-full lg:w-52">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full bg-gradient-to-b from-blue-500 to-teal-500 p-[1px] rounded-[20px] border'
    >
      <div
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <Image
          src={icon}
          alt='web-development'
          className='w-14 h-14 object-contain'
        />

        <div className='text-2xl font-bold break-words h-4 text-center'>
          {title}
        </div>
      </div>
    </motion.div>
  </Tilt>
);
const AboutPage = () => {
  return (
    <>
      <motion.div variants={textVariant()}>

        <p className={` font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]`}>Introduction</p>
        <h2 className={` font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]`}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I'm a skilled software developer with experience in TypeScript and
        JavaScript, and expertise in frameworks like React, Node.js, and
        Three.js. I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
      <div className="mt-10">
        <p className="text-2xl font-medium">Current Favorite Tech Stack</p>
        <figure className='mt-2'>
          <TechStack />
        </figure>
      </div>

      <div className='py-6'>
        <h2 className="text-2xl font-medium">Contact</h2>
        <article className='w-72 mt-4'>
          <p>
            Do contact me if you need my opinion about web development,
            especially frontend works. I’ll be happy to help! (find my email
            in the footer)
          </p>
        </article>
      </div>

    </>
  );
};

export default AboutPage