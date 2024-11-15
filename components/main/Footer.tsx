// import React from "react";
// import {
//   RxDiscordLogo,
//   RxGithubLogo,
//   RxInstagramLogo,
//   RxTwitterLogo,
//   RxLinkedinLogo,
// } from "react-icons/rx";
// import { FaSnapchat } from "react-icons/fa6";

// const Footer = () => {
//   return (
//     <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]">
//       <div className="w-full flex flex-col items-center justify-center m-auto">
//         <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">

//           <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
//             <div className="font-bold text-[16px]">Community</div>
//             <a href="https://www.linkedin.com/in/anusha-j-singh-56121b2b7" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center my-[15px] cursor-pointer">
//               <RxLinkedinLogo />
//               <span className="text-[15px] ml-[6px]">LinkedIn</span>
//             </a>
//             <a href="https://github.com/AnushaSingh12" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center my-[15px] cursor-pointer">
//               <RxGithubLogo />
//               <span className="text-[15px] ml-[6px]">Github</span>
//             </a>
//           </div>

//           <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
//             <div className="font-bold text-[16px]">Social Media</div>
//             <a href="https://www.instagram.com/anusha_singh.rajput" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center my-[15px] cursor-pointer">
//               <RxInstagramLogo />
//               <span className="text-[15px] ml-[6px]">Instagram</span>
//             </a>
//             <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center my-[15px] cursor-pointer">
//               <RxTwitterLogo />
//               <span className="text-[15px] ml-[6px]">Twitter</span>
//             </a>
//             <a href="https://www.snapchat.com/add/anushasingh8106" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center my-[15px] cursor-pointer">
//               <FaSnapchat />
//               <span className="text-[15px] ml-[6px]">Snapchat</span>
//             </a>
//           </div>

//           <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
//             <div className="font-bold text-[16px]">Reach out to Me!</div>
//             <a href="mailto:Anushasingh1210@gmail.com" className="flex flex-row items-center my-[15px] cursor-pointer">
//               <span className="text-[15px] ml-[6px]">Anushasingh1210@gmail.com</span>
//             </a>
//           </div>
//         </div>

//         <div className="mb-[20px] text-[15px] text-center">
//           &copy; Anusha Inc. All rights reserved
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;
import React from "react";
import Link from 'next/link';
import {
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";
import { FaSnapchat } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] relative">
      <div className="flex flex-col items-center justify-center m-auto">
        
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          {/* Community Links */}
        <div className="flex flex-col items-center mb-6">
          <h2 className="font-bold text-[16px]">Community</h2>
          <a
            href="https://www.linkedin.com/in/anusha-j-singh-56121b2b7"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center mt-4 cursor-pointer hover:text-blue-400 transition-colors duration-327 ease-in-out"
            style={{ textDecoration: 'none', zIndex: 100 }}
          >
            <RxLinkedinLogo /> <span className="ml-2">LinkedIn</span>
          </a>
          <a
            href="https://github.com/AnushaSingh12"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center mt-4 cursor-pointer hover:text-blue-400 transition-colors duration-327 ease-in-out"
            style={{ textDecoration: 'none', zIndex: 100 }}
          >
            <RxGithubLogo /> <span className="ml-2">Github</span>
          </a>
        </div>
          
          {/* Social Media Links */}
        <div className="flex flex-col items-center mb-6">
          <h2 className="font-bold text-[16px]">Social Media</h2>
          <a
            href="https://www.instagram.com/anusha_singh.rajput"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center mt-4 cursor-pointer hover:text-blue-400 transition-colors duration-327 ease-in-out"
            style={{ textDecoration: 'none', zIndex: 100 }}
          >
            <RxInstagramLogo /> <span className="ml-2">Instagram</span>
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center mt-4 cursor-pointer hover:text-blue-400 transition-colors duration-327 ease-in-out"
            style={{ textDecoration: 'none', zIndex: 100 }}
          >
            <RxTwitterLogo /> <span className="ml-2">Twitter</span>
          </a>
          <a
            href="https://www.snapchat.com/add/anushasingh8106"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center mt-4 cursor-pointer hover:text-blue-400 transition-colors duration-327 ease-in-out"
            style={{  textDecoration: 'none', zIndex: 100 }}
          >
            <FaSnapchat /> <span className="ml-2">Snapchat</span>
          </a>
        </div>
          
          {/* Contact Info */}
          <div className="min-w-[200px] h-auto flex flex-col items-center">
            <h2 className="font-bold text-[16px]">Reach out to Me !</h2>
            <a
              href="mailto:Anushasingh1210@gmail.com"
              className="flex flex-row items-center my-[15px] cursor-pointer text-[15px] hover:text-blue-400 transition-colors duration-327 ease-in-out"
              style={{ textDecoration: 'none', zIndex: 100 }}
            >
              <span className="ml-[6px]">Anushasingh1210@gmail.com</span>
            </a>
          </div>
        </div>

        {/* Footer Copyright */}
        <div className="flex items-center justify-center mt-[20px] mb-[3px] ml[500px text-[15px] text-center absolute bottom-0 w-full">
         &copy; Anusha Inc. All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
