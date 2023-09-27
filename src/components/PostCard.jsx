import React from "react";
import "./post.css"

const PostCard = ({ post }) => {
  console.log(post);
  return (
    <div className=" w-[712px] postcard hover:bg-gradient-to-r from-[#2DC4EA] to-[#3AE7AB] group ">
      <div className=" px-3 py-2 flex items-start gap-4">
        <h2 className=" text-[#2DC4EA] text-[40px] font-semibold group-hover:text-white">{post?.id < 10 ? '0' : ''}{post?.id}</h2>
        <div className=" flex flex-col gap-2 pt-3">
          <h2 className=" text-[20px] uppercase group-hover:text-white">{post?.title}</h2>
          <h2 className=" text-[18px] text-gray-600 group-hover:text-white">{post?.body}</h2>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
