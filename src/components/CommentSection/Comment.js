// You do not need to do anything in this file. Look at the CommentSection file. 

import React from 'react';
import './Comment.css';

export default function Comment ({comment, timestamp}) {
  return (
    <div className="comment-text">  
      <div>{timestamp}</div>
      <span className="user">{comment.username}</span>
      {' '}
      <span className="comment">{comment.text}</span>
    </div>
   
  );
};