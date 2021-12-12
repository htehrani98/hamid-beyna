import React from "react";
import Tweet from "./Tweet";
const TweetList = ({name, massage}) => {
  return (
    <div className="tweet-list">
      <Tweet name={name} massage={massage}/>
      <Tweet name={name} massage={massage}/>
      <Tweet name={name} massage={massage}/>
    </div>
  )
}
export default TweetList;