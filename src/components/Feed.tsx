import { StylesProvider } from "@material-ui/styles";
import styles from "./Feed.module.css";
import React from "react";
import { auth } from "../firebase";
import TweetInput from "./TweetInput";


const Feed = () => {
  return (
    <div className={styles.Feed}>
      Feed
      <TweetInput/>
      <button onClick={() => auth.signOut()}>Logout</button>
      
    </div>
  );
};
export default Feed;
