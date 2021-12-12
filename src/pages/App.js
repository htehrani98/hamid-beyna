import React, {useState} from 'react';
import Button from '../components/button';
import Tweet from '../components/Tweet';
import CreateTweet from '../components/CreateTweet';
import TweetList from '../components/TweetList';


function App() {
  const name = 'a';
  const massage = 'c';
  return (
    <div className="App">
      <CreateTweet />
      <h1>{name} </h1>
      <TweetList massage = {massage}/>
    </div>
  );
};

export default App;

// npx create-react-app XXX