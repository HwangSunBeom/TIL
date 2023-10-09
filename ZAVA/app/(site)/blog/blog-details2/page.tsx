import Image from "next/image";
import SharePost from "@/components/Blog/SharePost";
import RelatedPost from "@/components/Blog/RelatedPost";

const SingleBlogPage = async () => {
  return (
    <>
      <title>{`Blog Details - Solid`}</title>
      <section className="pt-35 lg:pt-45 xl:pt-50 pb-20 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex flex-col-reverse lg:flex-row gap-7.5 xl:gap-12.5">
            <div className="md:w-1/2 lg:w-[32%]">
              <RelatedPost />
            </div>

            <div className="lg:w-2/3">
              <div className="animate_top rounded-md shadow-solid-13 bg-white dark:bg-blacksection border border-stroke dark:border-strokedark p-7.5 md:p-10">

                <h2 className="font-semibold text-3xl 2xl:text-sectiontitle2 text-black dark:text-white mt-11 mb-5">
                Examples of Traffic Impact
                </h2>

                <ul className="flex flex-wrap gap-5 2xl:gap-7.5 mb-9">
                  <li>
                    <span className="text-black dark:text-white">Author: </span>{" "}
                    VAVA_MUNPYEONG
                  </li>
                  <li>
                    <span className="text-black dark:text-white">
                      Published On: December 19, 2022
                    </span>{" "}
                  </li>
                  <li>
                    <span className="text-black dark:text-white">
                      Category: {" "}
                    </span>
                    Installation
                  </li>
                </ul>

                <div className="blog-details">
                  <div className="relative aspect-[97/97] w-full sm:aspect-[97/97]">
                    <Image
                      src="/images/21 영주_영주제일교회_영문/슬라이드1.png"
                      alt="Kobe Steel plant that supplied"
                      fill
                      className="object-cover object-center rounded-md"
                    />
                  </div>

                  <div className="relative aspect-[97/97] w-full sm:aspect-[97/97]">
                    <Image
                      src="/images/21 영주_영주제일교회_영문/슬라이드2.png"
                      alt="Kobe Steel plant that supplied"
                      fill
                      className="object-cover object-center rounded-md"
                    />
                  </div>

                  <div className="relative aspect-[97/97] w-full sm:aspect-[97/97]">
                    <Image
                      src="/images/21 영주_영주제일교회_영문/슬라이드3.png"
                      alt="Kobe Steel plant that supplied"
                      fill
                      className="object-cover object-center rounded-md"
                    />
                  </div>

                  <div className="relative aspect-[97/97] w-full sm:aspect-[97/97]">
                    <Image
                      src="/images/21 영주_영주제일교회_영문/슬라이드4.png"
                      alt="Kobe Steel plant that supplied"
                      fill
                      className="object-cover object-center rounded-md"
                    />
                  </div>

                  <div className="relative aspect-[97/97] w-full sm:aspect-[97/97]">
                    <Image
                      src="/images/21 영주_영주제일교회_영문/슬라이드5.png"
                      alt="Kobe Steel plant that supplied"
                      fill
                      className="object-cover object-center rounded-md"
                    />
                  </div>

                  <div className="relative aspect-[97/97] w-full sm:aspect-[97/97]">
                    <Image
                      src="/images/21 영주_영주제일교회_영문/슬라이드6.png"
                      alt="Kobe Steel plant that supplied"
                      fill
                      className="object-cover object-center rounded-md"
                    />
                  </div>

                  <div className="relative aspect-[97/97] w-full sm:aspect-[97/97]">
                    <Image
                      src="/images/21 영주_영주제일교회_영문/슬라이드7.png"
                      alt="Kobe Steel plant that supplied"
                      fill
                      className="object-cover object-center rounded-md"
                    />
                  </div>

                  <div className="relative aspect-[97/97] w-full sm:aspect-[97/97]">
                    <Image
                      src="/images/21 영주_영주제일교회_영문/슬라이드8.png"
                      alt="Kobe Steel plant that supplied"
                      fill
                      className="object-cover object-center rounded-md"
                    />
                  </div>

                  <div className="relative aspect-[97/97] w-full sm:aspect-[97/97]">
                    <Image
                      src="/images/21 영주_영주제일교회_영문/슬라이드2.png"
                      alt="Kobe Steel plant that supplied"
                      fill
                      className="object-cover object-center rounded-md"
                    />
                  </div>

                  <div className="relative aspect-[97/97] w-full sm:aspect-[97/97]">
                    <Image
                      src="/images/21 영주_영주제일교회_영문/슬라이드9.png"
                      alt="Kobe Steel plant that supplied"
                      fill
                      className="object-cover object-center rounded-md"
                    />
                  </div>

                  <div className="relative aspect-[97/97] w-full sm:aspect-[97/97]">
                    <Image
                      src="/images/21 영주_영주제일교회_영문/슬라이드10.png"
                      alt="Kobe Steel plant that supplied"
                      fill
                      className="object-cover object-center rounded-md"
                    />
                  </div>

                  <div className="relative aspect-[97/97] w-full sm:aspect-[97/97]">
                    <Image
                      src="/images/21 영주_영주제일교회_영문/슬라이드11.png"
                      alt="Kobe Steel plant that supplied"
                      fill
                      className="object-cover object-center rounded-md"
                    />
                  </div>
                </div>

                {/* <SharePost /> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleBlogPage;
