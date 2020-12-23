import "../styles/Feed.css";
import CreateIcon from "@material-ui/icons/Create";
import InputOption from "./InputOption";
import ImageIcon from "@material-ui/icons/Image";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import { Post } from "./Post";
import { useEffect, useState } from "react";
import { database } from "../firebase";
import firebase from "firebase";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/userSlice";
import Flipmove from "react-flip-move";

export default function Feed() {
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState("");
  const user = useSelector(selectUser);

  useEffect(() => {
    database
      .collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs?.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  const sendPost = (e) => {
    e.preventDefault();
    database.collection("posts").add({
      name: user?.displayName,
      description: user?.email,
      message: input,
      photoUrl: user?.photoUrl || "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form action="">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit" onClick={sendPost}>
              Send
            </button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption color="#70B5F9" title="Photo" Icon={ImageIcon} />
          <InputOption color="red" title="Video" Icon={SubscriptionsIcon} />
          <InputOption color="#C0CBCD" title="Event" Icon={EventNoteIcon} />
          <InputOption
            color="#7FC15E"
            title="Write article"
            Icon={CalendarViewDayIcon}
          />
        </div>
      </div>
      <Flipmove>
        {posts?.map(
          ({ id, data: { name, description, message, photoUrl } }) => (
            <Post
              name={name}
              description={description}
              message={message}
              photoUrl=""
              key={id}
            />
          )
        )}
      </Flipmove>
    </div>
  );
}
