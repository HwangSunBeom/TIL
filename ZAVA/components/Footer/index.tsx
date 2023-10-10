"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <>
      <footer className="bg-white dark:bg-blacksection border-t border-stroke dark:border-strokedark">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          {/* <!-- Footer Top --> */}
          <div className="py-20 lg:py-25">
            <div className="flex flex-wrap lg:justify-between gap-8 lg:gap-0">
              <motion.div
                variants={{
                  hidden: {
                    opacity: 0,
                    y: -20,
                  },

                  visible: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
                className="animate_top w-1/2 lg:w-1/2"
              >
                <a href="index.html" className="relative">
                  <Image
                    width={110}
                    height={80}
                    src="/images/logo/vava_logo.svg"
                    alt="Logo"
                    className="dark:hidden"
                  />
                  <Image
                    width={110}
                    height={80}
                    src="/images/logo/vava_logo.svg"
                    alt="Logo"
                    className="hidden dark:block"
                  />
                </a>

                <p className="mt-5 mb-10 whitespace-pre-wrap text-gray dark:text-white font-medium text-para3">
                  WE SOLVE VIDEO FOOTAGE TREMBLING PROBLEMS. <br/>
                  WE INVENT NEW SOLUTIONS TO IMPROVE OUR LIVES.
                </p>

                <p className="uppercase tracking-[5px] text-sectiontitle mb-1.5 text-gray dark:text-white font-medium text-para3">
                  Phone
                </p>
                <a
                  href="tel:+821079259111"
                  className="text-md text-black dark:text-white font-medium"
                >
                  +82 10 7925 9111
                </a>
                <p className="uppercase tracking-[5px] text-sectiontitle mb-1.5 mt-3 text-gray dark:text-white font-medium text-para3">
                  E-mail
                </p>
                <a
                  href="mailto:vava.innovation@gmail.com"
                  className="text-md text-black dark:text-white font-medium"
                >
                  vava.innovation@gmail.com
                </a>
                {/* <p className="uppercase tracking-[5px] text-sectiontitle mb-1.5 mt-3">
                  Address
                </p>
                <a
                  href="mailto:vava.innovation@gmail.com"
                  className="text-black dark:text-white font-medium text-itemtitle"
                >
                  505-104, 63, HEOLLEUNG-RO 590-GIL, GANGNAM-GU, SEOUL, SOUTH KOREA
                </a> */}
                {/* <p className="uppercase tracking-[5px] text-sectiontitle mb-1.5 mt-3">
                  BUSINESS REGISTRATION NO.
                </p>
                <a
                  href="mailto:vava.innovation@gmail.com"
                  className="text-black dark:text-white font-medium text-itemtitle"
                >
                  388-43-00606
                </a> */}
              </motion.div>

              <div className="w-full lg:w-1/2 xl:w-1/2 flex flex-col md:flex-row md:justify-between gap-8 md:gap-0">
                <motion.div
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: -20,
                    },

                    visible: {
                      opacity: 1,
                      y: 0,
                    },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 1, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="animate_top"
                >
                  <h4 className="font-medium text-black dark:text-white text-itemtitle2 mb-9">
                    Quick Links
                  </h4>

                  <ul>
                    <li>
                      <a
                        href="#"
                        className="inline-block hover:text-primary mb-3 text-gray dark:text-white font-medium text-para3"
                      >
                        Home
                      </a>
                    </li>
                    <li>
                      <a
                        href="/blog"
                        className="inline-block hover:text-primary mb-3 text-gray dark:text-white font-medium text-para3"
                      >
                        Blog
                      </a>
                    </li>
                    {/* <li>
                      <a
                        href="#"
                        className="inline-block hover:text-primary mb-3"
                      >
                        Careers
                      </a>
                    </li> */}
                    {/* <li>
                      <a
                        href="#"
                        className="inline-block hover:text-primary mb-3"
                      >
                        Pricing
                      </a>
                    </li> */}
                  </ul>
                </motion.div>

                <motion.div
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: -20,
                    },

                    visible: {
                      opacity: 1,
                      y: 0,
                    },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 1, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="animate_top"
                >
                  <h4 className="font-medium text-black dark:text-white text-itemtitle2 mb-9">
                    Support
                  </h4>

                  <ul>
                    {/* <li>
                      <a
                        href="#"
                        className="inline-block hover:text-primary mb-3"
                      >
                        Company
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="inline-block hover:text-primary mb-3"
                      >
                        Press media
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="inline-block hover:text-primary mb-3"
                      >
                        Our Blog
                      </a>
                    </li> */}
                    <li>
                      <a
                        href="/support"
                        className="inline-block hover:text-primary mb-3 text-gray dark:text-white font-medium text-para3"
                      >
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </motion.div>
                
                <motion.div
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: -20,
                    },

                    visible: {
                      opacity: 1,
                      y: 0,
                    },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 1, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="animate_top"
                >
                  <h4 className="font-medium text-black dark:text-white text-itemtitle2 mb-9">
                    Channels
                  </h4>
                  <ul>
                    <li>
                      <a 
                      href="tel:+821079259111" 
                      className="inline-block hover:text-primary mb-3 text-gray dark:text-white font-medium text-para3">
                        WhatsApp
                      </a>
                    </li>
                    <li>
                      <a 
                      href="https://www.facebook.com/zava.vib/"
                      target="_blank"
                      className="inline-block hover:text-primary mb-3 text-gray dark:text-white font-medium text-para3">
                        Facebook (ENG)
                      </a>
                    </li>
                    <li>
                      <a 
                      href="https://www.facebook.com/za.va.33633/"
                      target="_blank"
                      className="inline-block hover:text-primary mb-3 text-gray dark:text-white font-medium text-para3">
                        Facebook (KOR)
                      </a>
                    </li>
                    <li>
                      <a 
                      href="https://link.inpock.co.kr/vava.innovation"
                      target="_blank"
                      className="inline-block hover:text-primary mb-3 text-gray dark:text-white font-medium text-para3">
                        Link in Bio
                      </a>
                    </li>
                    <li>
                      <a 
                      href="https://drive.google.com/drive/folders/10U-rmOMFYO7e8RONQnba1gETpSVz09Ek?usp=drive_link"
                      target="_blank"
                      className="inline-block hover:text-primary mb-3 text-gray dark:text-white font-medium text-para3">
                        Video Archive (ENG)
                      </a>
                    </li>
                    <li>
                      <a 
                      href="https://drive.google.com/drive/folders/11SM8rDkpCp6dqYjw9_bKOg5YoC7P3s7M"
                      target="_blank"
                      className="inline-block hover:text-primary mb-3 text-gray dark:text-white font-medium text-para3">
                        Case Archive (KOR/JPN)
                      </a>
                    </li>
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>
          {/* <!-- Footer Top --> */}

          {/* <!-- Footer Bottom --> */}
          <div className="border-t border-stroke dark:border-strokedark flex flex-wrap flex-col lg:flex-row items-center justify-center lg:justify-between gap-5 lg:gap-0 py-7">
            {/* <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top"
            >
              <ul className="flex items-center gap-8">
                <li>
                  <a href="#" className="hover:text-primary">
                    English
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Support
                  </a>
                </li>
              </ul>
            </motion.div> */}

            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top"
            >
              <p className="text-gray dark:text-white font-medium text-para3">Copyright 2020. VAVA Co. All rights reserved.</p>
              {/* <p className="text-gray dark:text-white font-medium text-para3">&copy; Copyright 2020. VAVA Co. All rights reserved.</p> */}
            </motion.div>

            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top"
            >
              <ul className="flex items-center gap-5">
                {/* 페북 */}
                <li>
                  <a href="https://www.facebook.com/zava.vib/" target='_blank' >
                    <svg
                      className="fill-[#D1D8E0] hover:fill-primary transition-all duration-300"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_48_1499)">
                        <path
                          d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z"
                          fill=""
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_48_1499">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                </li>
                {/* 인스타 */}
                {/* <li>
                  <a href="#">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="fill-[#D1D8E0] hover:fill-primary transition-all duration-300">
                      <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.336 3.608 1.311.975.975 1.249 2.242 1.311 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.336 2.633-1.311 3.608-.975.975-2.242 1.249-3.608 1.311-1.264.058-1.644.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.336-3.608-1.311-.975-.975-1.249-2.242-1.311-3.608-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849c.062-1.366.336-2.633 1.311-3.608.975-.975 2.242-1.249 3.608-1.311 1.266-.059 1.646-.07 4.85-.07zm0-2.163C6.075 0 5.22 0 4.29.049c-1.225.049-2.38.38-3.336 1.336-.956.956-1.287 2.111-1.336 3.336-.049.93-.049 1.785-.049 7.288s0 6.358.049 7.289c.049 1.225.38 2.38 1.336 3.336.956.956 2.111 1.287 3.336 1.336.93.048 1.785.048 7.289.048s6.358 0 7.289-.049c1.225-.049 2.38-.38 3.336-1.336.956-.956 1.287-2.111 1.336-3.336.049-.93.049-1.785.049-7.289s0-6.358-.049-7.288c-.049-1.225-.38-2.38-1.336-3.336-.956-.956-2.111-1.287-3.336-1.336-.93-.048-1.785-.048-7.289-.048z"/>
                      <path d="M12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" />
                      <path d="M18.394 6.015a1.394 1.394 0 1 0 0 2.787 1.394 1.394 0 0 0 0-2.787z"/>
                    </svg>
                  </a>
                </li> */}
                {/* <li>
                  <a href="#">
                    <svg
                      className="fill-[#D1D8E0] hover:fill-primary transition-all duration-300"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_48_1505)">
                        <path
                          d="M6.94 5.00002C6.93974 5.53046 6.72877 6.03906 6.35351 6.41394C5.97825 6.78883 5.46944 6.99929 4.939 6.99902C4.40857 6.99876 3.89997 6.78779 3.52508 6.41253C3.1502 6.03727 2.93974 5.52846 2.94 4.99802C2.94027 4.46759 3.15124 3.95899 3.5265 3.5841C3.90176 3.20922 4.41057 2.99876 4.941 2.99902C5.47144 2.99929 5.98004 3.21026 6.35492 3.58552C6.72981 3.96078 6.94027 4.46959 6.94 5.00002ZM7 8.48002H3V21H7V8.48002ZM13.32 8.48002H9.34V21H13.28V14.43C13.28 10.77 18.05 10.43 18.05 14.43V21H22V13.07C22 6.90002 14.94 7.13002 13.28 10.16L13.32 8.48002Z"
                          fill=""
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_48_1505">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                </li> */}
              </ul>
            </motion.div>
          </div>
          {/* <!-- Footer Bottom --> */}
        </div>
      </footer>
    </>
  );
};

export default Footer;
