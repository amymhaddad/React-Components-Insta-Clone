import React, { useState } from "react";
import Post from "./Post";
import "./Posts.css";
import dummyData from "../../dummy-data.js";

const PostsPage = () => {
  return (
    <div className="posts-container-wrapper">
      
      {dummyData.map((post) => (
          <Post key={post.username} post={post}/>
      ))}
      
    </div>
  );
};

export default PostsPage;