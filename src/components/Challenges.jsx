import React from "react";
import image from "../images/case-study-trip-pro-our-challenges@2x.png";
import { useGetDataQuery } from "../app/dataFetch";
import PostCard from "./PostCard";

const Challenges = () => {
  const { data, error, isLoading } = useGetDataQuery();
  // console.log(data[0]?.title);
  return (
    <div className=" ">
      <div className=" w-full flex justify-center items-center gap-10">
        <div>
          <img src={image} alt="" className=" w-[738px] h-[552px]" />
        </div>
        <div>
          <h2 className=" uppercase text-[36px] font-semibold">
            our <span className=" text-[#2DC4EA]">challenges</span>
          </h2>
          <div
            className=" overflow-y-hidden mt-8 flex flex-col gap-7"
            style={{
              overflowY: "scroll",
              scrollBehavior: "smooth",
              maxHeight: "552px",
            }}>
            {data?.map((post) => (
              <PostCard post={post} />
            ))}
          </div>
          <button className=" uppercase text-white font-semibold text-[20px] bg-gradient-to-r from-[#2DC4EA] to-[#3AE7AB] px-10 py-3 rounded-full mt-5">
            view more
          </button>
        </div>
      </div>
    </div>
  );
};
export default Challenges;
