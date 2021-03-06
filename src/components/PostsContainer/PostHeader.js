// You do not need to change any code in this file
import React from "react";
import "./Posts.css";

export default function PostHeader({username, thumbnailUrl}) {
  return (
    <div className="post-header">
      <div className="post-thumb-wrapper">
        <img
          alt="post header"
          className="post-thumb"
          src={thumbnailUrl}
        />
      </div>
      <h2>{username}</h2>
    </div>
  )

};