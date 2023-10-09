import React from "react";
import Image from "next/image";
import Link from "next/link";
import BlogData from "./blogData";

const RelatedPost = async () => {
  return (
    <>
      <div className="animate_top rounded-md shadow-solid-13 bg-white dark:bg-blacksection border border-stroke dark:border-strokedark p-9">
        <h4 className="font-semibold text-2xl text-black dark:text-white mb-7.5">
          Related Posts
        </h4>

        <div>
          {BlogData.slice(0, 4).map((post, key) => (
            <div
              className="flex xl:flex-nowrap flex-wrap gap-4 2xl:gap-6 mb-7.5"
              key={key}
            >
                {post.mainImage ? (
                  <Image width={125} height={125} src={post.mainImage} alt="Blog" />
                ) : (
                  "No image"
                )}
              <h5 className="font-medium text-md text-black dark:text-white hover:text-primary dark:hover:text-primary transition-all duration-300">
                <Link href={`/blog/blog-details${post._id !== 1 ? post._id : ''}`}>
                  {post.title}
                </Link>
              </h5>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default RelatedPost;
