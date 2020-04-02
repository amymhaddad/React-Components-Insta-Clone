import React, { useState } from "react";
import CommentSection from "../CommentSection/CommentSection";
import LikeSection from "./LikeSection";
import PostHeader from "./PostHeader";
import PostBody from "./PostBody";
import "./Posts.css";

export default function Post({post}) {

  return (
    <div className="post-border">
      <PostHeader
        username={post.username}
        thumbnailUrl={post.thumbnailUrl}
      />
      
      <PostBody 
        src={post.imageUrl}   
      />
     
      <LikeSection totalLikes={post.likes} />

      <CommentSection
        comments={post.comments}
        timestamp={post.timestamp}
      />
      
    </div>
  );
};
