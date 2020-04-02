/* 
Start here and then work through the 
PostsContainer components and the CommentSection Components. 
Not all files need code added. 
Look at each file to see where you need to pass props or add code 
*/
import React from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBarContainer.js";
import PostsPage from "./components/PostsContainer/PostsPage.js";

//update syntax

const App = () => {

  return (
    <div className="App">
      {/* rendering SErachBar and PostsPage (these are just functionss) */}
      <SearchBar />
      <PostsPage />
    </div>
  );
};

export default App;
