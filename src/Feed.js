import * as React from "react";
import CreateIcon from "@mui/icons-material/Create";
import "./Feed.css";
import { Avatar } from "@mui/material";
import InputOption from "./InputOption";
import ImageIcon from "@mui/icons-material/Image";
import VideocamIcon from "@mui/icons-material/Videocam";
import WorkIcon from "@mui/icons-material/Work";
import EventNoteIcon from "@mui/icons-material/EventNote";
import Post from "./Post";
import { db } from "./firebase.util";
import firebase from "firebase/compat/app";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import FlipMove from "react-flip-move"

function Feed() {
  const user = useSelector(selectUser)
  const [posts, setPosts] = React.useState([]);
  const [input, setInput] = React.useState("");
  console.log(user.displayName,user)

  React.useEffect(() => {
    db.collection("posts").orderBy("timestamp","desc").onSnapshot((snapshot) =>
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
  }, []);

  const sendPost = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: user.photoUrl || "" ,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput('');
  };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <Avatar src={user.photoUrl || ""} />
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input
              value={input}
              type="text"
              onChange={(e) => setInput(e.target.value)}
              placeholder="Start a post"
            />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>

        <div className="feed__inputOptions">
          <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
          <InputOption Icon={VideocamIcon} title="Video" color="green" />
          <InputOption Icon={WorkIcon} title="Job" color="#70B5F9" />
          <InputOption Icon={EventNoteIcon} title="Notes" color="pink" />
        </div>
      </div>

      <FlipMove>
      {posts.map(({ id, data: { name, message, description, photoUrl } }) => (
        <Post
          key={id}
          name={name}
          message={message}
          description={description}
          photoUrl={photoUrl}
        />
      ))}
      </FlipMove>

     

    </div>
  );
}

export default Feed;
