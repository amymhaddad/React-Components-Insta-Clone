// look at the likes on this component. Right now it is hard coded on line 20.
// console.log your props and see how to add likes to this component so that it will update when you click the icon.
// HINT: You will need to add an onClick event pass through your props and update the hard coded Likes
import React, {useState} from "react";
import heart from "../../assets/heart.svg"
import "./Posts.css";

export default function LikeSection({totalLikes}) {
  let startingValue = totalLikes
  let [likes, setLikes] = useState(startingValue);

  return (
    <div>
      <div
        className="like-section"
        key="likes-icons-container"
      >
      <div className="like-section-wrapper">
        <i className="far fa-heart"/>
      </div>

      <div className="like-section-wrapper">
        <i className="far fa-comment" />
      </div>

      <div className="like">
        <img 
        className = "like-icon"
        src={heart}
        onClick = { () => setLikes(likes += 1)}
        />
      </div>

    </div>
    
    <p className="like-number">
      {likes} Likes</p>
</div>
  )
};
