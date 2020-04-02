// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

export default function CommentSection({comments, timestamp}) {
  return (
    <div>
    {comments.map((comment) => (  
      <Comment key={comment.username} comment={comment} timestamp={timestamp}/>
    ))} 
      <CommentInput />
    </div>
  );
}