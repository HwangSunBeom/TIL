import React, { useRef } from "react";
import { FeatureTab } from "@/types/featureTab";
import Image from "next/image";

const FeaturesTabItem = ({ featureTab }: { featureTab: FeatureTab }) => {
  const { title, desc1, desc2, image, imageDark } = featureTab;

  const ref = useRef(null);
  React.useEffect(() => {
    import("@lottiefiles/lottie-player");
  });

  return (
    <>
      <div className="flex items-center gap-8 lg:gap-19">
        <div className="md:w-1/2">
          <h2 className="text-black dark:text-white text-3xl xl:text-sectiontitle2 font-bold mb-7">
            {title}
          </h2>
          <p className="mb-5 text-gray dark:text-white font-medium text-para3">{desc1}</p>
          <p className="w-11/12 text-gray dark:text-white font-medium text-para3">{desc2}</p>
        </div>
        <div className="hidden md:block md:w-1/2 relative mx-auto aspect-[562/366] max-w-[550px]">
          {/* <Image src={image} alt={title} fill className="dark:hidden" />
          <Image
            src={imageDark}
            alt={title}
            fill
            className="hidden dark:block"
          /> */}
          {/* <Lottie animationData={image} /> */}
          <lottie-player
          id="firstLottie"
          ref={ref}
          autoplay
          loop
          mode="normal"
          src={image}
        />
        </div>
      </div>
    </>
  );
};

export default FeaturesTabItem;
