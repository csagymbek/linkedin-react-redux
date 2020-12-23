import { Avatar } from "@material-ui/core";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/userSlice";
import "../styles/Sidebar.css";

export default function Sidebar() {
  const user = useSelector(selectUser);

  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar_hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://desktopwalls.net/wp-content/uploads/2015/02/Red%20Desert%20Mountains%20Desktop%20Wallpaper.jpg"
          alt=""
        />
        <Avatar className="sidebar__avatar" src={user.photoUrl}>
          {user.displayName[0]}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewd you</p>
          <p className="sidebar__statNumber">2,542</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">2,200</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("programming")}
        {recentItem("softwareengineering")}
        {recentItem("design")}
        {recentItem("developer ")}
      </div>
    </div>
  );
}
