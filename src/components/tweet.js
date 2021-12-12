import React from "react";

const Tweet = ({name , massage}) => {
  return(
    <div className="tweet">
    <h3>b {massage}</h3>
    <button>Delete</button>
    <button>like</button>
    </div>
  )
}

export default Tweet;