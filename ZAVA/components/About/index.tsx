"use client";

import React, {useEffect, useRef} from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const About = () => {

  const ref = useRef(null);
  useEffect(() => {
    import("@lottiefiles/lottie-player");
  });

  return (
    <>
      {/* <!-- ===== About Start ===== --> */}
      <section className="pb-20 lg:pb-25 xl:pb-30 overflow-hidden">
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
          <div className="flex items-center gap-8 lg:gap-32.5">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left hidden md:block md:w-1/2 relative mx-auto aspect-[588/526.5]"
            >
              <Image
                src="/images/svg/ZAVA_IIChurch_source.svg"
                alt="About"
                className="dark:hidden"
                fill
              />
              <Image
                src="/images/svg/ZAVA_IIChurch_source.svg"
                alt="About"
                className="hidden dark:block"
                fill
              />
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right md:w-1/2"
            >
              {/* <h4 className="text-black dark:text-white font-medium uppercase">
                <span className="bg-meta text-white text-metatitle inline-flex rounded-full py-1 px-4.5 mr-4 mb-4 uppercase ">
                  New
                </span>
                SaaS Boilerplate for Next.js
              </h4> */}
              <h2 className="relative font-bold text-black dark:text-white text-3xl xl:text-hero mb-6">
                Why do cameras need the{" "}
                <span className="inline-block relative before:absolute before:bottom-2.5 before:left-0 before:w-full before:h-3 before:bg-titlebg dark:before:bg-titlebgdark before:-z-1 whitespace-pre-wrap">
                  ZAVA bracket
                </span>
                ?
              </h2>
              <p className="text-gray dark:text-white font-medium text-para3">
                Today, many churches, schools, and event venues
                install and use cameras. Even if not all, most cameras
                are installed and used on the walls or mezzanine
                balustrade.
              </p>

              {/* <div className="mt-7.5 flex items-center gap-5">
                <div className="w-15 h-15 rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection flex items-center justify-center">
                  <p className="text-black dark:text-white font-semibold text-metatitle2">
                    01
                  </p>
                </div>
                <div className="w-3/4">
                  <h5 className="text-black dark:text-white text-metatitle2 mb-0.5">
                    React 18, Next.js 13 and TypeScript
                  </h5>
                  <p className="text-gray dark:text-white font-medium text-para3">Ut ultricies lacus non fermentum ultrices.</p>
                </div>
              </div>
              <div className="mt-7.5 flex items-center gap-5">
                <div className="w-15 h-15 rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection flex items-center justify-center">
                  <p className="text-black dark:text-white font-semibold text-metatitle2">
                    02
                  </p>
                </div>
                <div className="w-3/4">
                  <h5 className="text-black dark:text-white text-metatitle2 mb-0.5">
                    Fully Customizable
                  </h5>
                  <p className="text-gray dark:text-white font-medium text-para3">consectetur adipiscing elit fermentum ultricies.</p>
                </div>
              </div> */}
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== About End ===== --> */}

      {/* <!-- ===== About Two Start ===== --> */}
      <section>
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 2xl:px-0 overflow-hidden">
          <div className="flex items-center gap-8 lg:gap-32.5">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left md:w-1/2"
            >
              {/* <h4 className="text-black dark:text-white font-medium uppercase">
                Launch Your SaaS Fast
              </h4> */}
              <h2 className="relative font-bold text-black dark:text-white text-3xl xl:text-hero mb-6">
              These cameras all require high magnification zoom.
                {/* <span className="inline-block relative before:absolute before:bottom-2.5 before:left-0 before:w-full before:h-3 before:bg-titlebg dark:before:bg-titlebgdark before:-z-1 whitespace-pre-wrap">
                  ZAVA bracket
                </span> */}
              </h2>
              <p className="text-gray dark:text-white font-medium text-para3">
              They are remotely controlled from a control center.
              They are installed on walls, columns, ceilings, mezzanine balustrades, under mezzanines, etc.
              Their video footage is transmitted to high-resolution electronic signboards or streamed in high-definition live.
              </p>
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right hidden md:block md:w-1/2 relative mx-auto aspect-[588/526.5]"
            >
              <Image
                src="./images/svg/ZAVA_image based source_PTZ lens.svg"
                alt="About"
                className="dark:hidden"
                fill
              />
              <Image
                src="./images/svg/ZAVA_image based source_PTZ lens.svg"
                alt="About"
                className="hidden dark:block"
                fill
              />
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== About Two End ===== --> */}

      {/* <!-- ===== About Three Start ===== --> */}
      <section className="pb-20 lg:pb-25 xl:pb-30 overflow-hidden">
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
          <div className="flex items-center gap-8 lg:gap-32.5">
          <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right hidden md:block md:w-1/2 relative mx-auto aspect-[588/526.5]"
            >
              <lottie-player
          id="firstLottie"
          ref={ref}
          autoplay
          loop
          mode="normal"
          src="./images/lottie/ZAVA_video footage tremble_renew.json"
        />
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right md:w-1/2"
            >
              <h2 className="relative font-bold text-black dark:text-white text-3xl xl:text-hero mb-6">
              We often see unwanted trembling within the video footage.
                {/* <span className="inline-block relative before:absolute before:bottom-2.5 before:left-0 before:w-full before:h-3 before:bg-titlebg dark:before:bg-titlebgdark before:-z-1 whitespace-pre-wrap">
                  ZAVA bracket
                </span> */}
              </h2>
              <p className="whitespace-pre-wrap text-gray dark:text-white font-medium text-para3">
                Sometimes it is very slight, but sometimes it is such huge that we can see it. It was shaking from the beginning, always.
                But it was discovered too late.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== About Three End ===== --> */}

      {/* <!-- ===== About Four Start ===== --> */}
      <section>
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 2xl:px-0 overflow-hidden">
          <div className="flex items-center gap-8 lg:gap-32.5">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left md:w-1/2"
            >
              <h2 className="relative font-bold text-black dark:text-white text-3xl xl:text-hero mb-6">
              We invented ZAVA to solve this trembling problem.
                {/* <span className="inline-block relative before:absolute before:bottom-2.5 before:left-0 before:w-full before:h-3 before:bg-titlebg dark:before:bg-titlebgdark before:-z-1 whitespace-pre-wrap">
                  ZAVA bracket
                </span> */}
              </h2>
              <p className="text-gray dark:text-white font-medium text-para3">
              ZAVA reduces the video footage trembling by about 93% on average. We invented ZAVA to solve this trembling problem. We continue to improve and develop.
              </p>
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left hidden md:block md:w-1/2 relative mx-auto aspect-[588/526.5]"
            >
              <Image
                src="/images/svg/ZAVA_decrease.svg"
                alt="About"
                className="dark:hidden"
                fill
              />
              <Image
                src="/images/svg/ZAVA_decrease.svg"
                alt="About"
                className="hidden dark:block"
                fill
              />
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== About Four End ===== --> */}
    </>
  );
};

export default About;
