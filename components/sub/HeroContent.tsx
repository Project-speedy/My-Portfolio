// "use client";

// import React from "react";
// import { Typed } from 'react-typed';
// import ReactTextLoop from 'react-text-loop';
// import { motion } from "framer-motion";
// import {
//   slideInFromLeft,
//   slideInFromRight,
//   slideInFromTop,
// } from "@/utils/motion";
// import { SparklesIcon } from "@heroicons/react/24/solid";
// import Image from "next/image";

// const HeroContent = () => {
//   return (
//     <motion.div
//       initial="hidden"
//       animate="visible"
//       className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
//     >
//       <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
//         <motion.div
//           variants={slideInFromTop}
//           className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
//         >
//           <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
//           <h1 className="Welcome-text text-[13px]">
//             Fullstack Developer Portfolio
//           </h1>
//         </motion.div>

//         {/* <motion.div
//           variants={slideInFromLeft(0.5)}
//           className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
//         >
//           <span>
//             Providing
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
//               {" "}
//               the best{" "}
//             </span>
//             project exprience
//           </span>
//         </motion.div> */}
//         <div className="typewriter" data-aos="fade-right" data-aos-duration="1500" data-aos-delay="900" style={{ color: 'white' }}>I'm a <span className="typewriter-text" style={{ color: 'white' }}></span></div>
          
//         <motion.p
//           variants={slideInFromLeft(0.8)}
//           className="text-lg text-gray-400 my-5 max-w-[600px]"
//         >
//           I&apos;m a Full Stack Software Engineer with experience in Website,
//           Mobile, and Software development. Check out my projects and skills.
//         </motion.p>
//         <motion.a
//   variants={slideInFromLeft(1)}
//   href="/resume.pdf"  // Update with the correct path
//   download="resume.pdf"
//   className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
// >
//   Hire Me!
// </motion.a>
//       </div>

//       {/* <motion.div
//         variants={slideInFromRight(0.8)}
//         className="w-full h-full flex justify-center items-center"
//       >
//         <Image
//           src="/akhtarpic.png"
//           alt="work icons"
//           height={650}
//           width={350}
//         />
//         <Image
//           src="/mainIconsdark.svg"
//           alt="work icons"
//           height={650}
//           width={650}
//         />
//       </motion.div> */}
//       <motion.div
//   variants={slideInFromRight(0.8)}
//   className="w-full h-full flex justify-center items-center relative"
// >
//   <Image
//     src="/mainIconsdark.svg"
//     alt="work icons"
//     height={650}
//     width={650}
//     // className="absolute top-0 left-0"
//   />
//   <Image
//     src="/akhtarpic.png"
//     alt="work icons"
//     height={650}
//     width={325}
//     className="absolute top-10 left-41 z-10"
//   />
// </motion.div>

//     </motion.div>
//   );
// };

// export default HeroContent;
"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Head from "next/head";

const HeroContent = () => {
  const [typedLoaded, setTypedLoaded] = useState(false);

  useEffect(() => {
    // Dynamically load the Typed.js script
    const script = document.createElement("script");
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/typed.js/2.1.0/typed.umd.js";
    script.integrity = "sha512-+2pW8xXU/rNr7VS+H62aqapfRpqFwnSQh9ap6THjsm41AxgA0MhFRtfrABS+Lx2KHJn82UOrnBKhjZOXpom2LQ==";
    script.crossOrigin = "anonymous";
    script.referrerPolicy = "no-referrer";
    script.onload = () => {
      setTypedLoaded(true); // Mark that the script has loaded
    };
    document.body.appendChild(script);

    // Cleanup function to remove the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    // Initialize Typed only if the script is loaded
    if (typedLoaded) {
      const typed = new (window as any).Typed(".typewriter-text", {
        strings: ["an Application Developer", "a Nature Lover", "a learner"], // Strings to be typed
        typeSpeed: 100, // Typing speed
        backSpeed: 50,  // Backspacing speed
        loop: true,     // Loop the typing effect
      });

      // Cleanup function to destroy the Typed instance on component unmount
      return () => {
        typed.destroy();
      };
    }
  }, [typedLoaded]); // Re-run the effect when the script is loaded

  return (
    <>
      <Head>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/typed.js/2.1.0/typed.umd.js"
          integrity="sha512-+2pW8xXU/rNr7VS+H62aqapfRpqFwnSQh9ap6THjsm41AxgA0MhFRtfrABS+Lx2KHJn82UOrnBKhjZOXpom2LQ=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        ></script>
      </Head>

      <motion.div
        initial="hidden"
        animate="visible"
        className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
      >
        <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
          <motion.div
            variants={slideInFromTop}
            className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
          >
            <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
            <h1 className="text-lg text-gray-400 my-2 max-w-[600px]">
              Hey👋
            </h1>
          </motion.div>
          <motion.p
            variants={slideInFromLeft(0.8)}
            className="text-lg text-gray-400 my-5 max-w-[600px]"
          >
          <div
            className="typewriter"
            data-aos="fade-right"
            data-aos-duration="1500"
            data-aos-delay="900"
            style={{ color: 'white' }}
          >
            I'm <span className="typewriter-text" style={{ color: 'white' }}></span>
          </div>
          </motion.p>

          <motion.p
            variants={slideInFromLeft(0.8)}
            className="text-lg text-gray-400 my-5 max-w-[600px]"
          >
            I&apos;m currently working as an Application Developer at Schneider Electric and a recent undergrad from Siddaganga Institute of Technology from Department of Information science and Engineering. Check out my projects and skills.
          </motion.p>

          <motion.a
            variants={slideInFromLeft(1)}
            href="/resume.pdf"  // Update with the correct path
            download="resume.pdf"
            className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
          >
            Hire Me!
          </motion.a>
        </div>

        <motion.div
          variants={slideInFromRight(0.8)}
          className="w-full h-full flex justify-center items-center relative"
        >
          <Image
            src="/mainIconsdark.svg"
            alt="work icons"
            height={650}
            width={650}
          />
          <Image
            src="/dp.png"
            alt="work icons"
            height={650}
            width={425}
            className="absolute top-10 left-41 z-10"
          />
        </motion.div>
      </motion.div>
    </>
  );
};

export default HeroContent;
