import { Avatar } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/userSlice";
import "../styles/HeaderOptions.css";

export default function HeaderOptions({ Icon, title, avatar, onClick }) {
  const user = useSelector(selectUser);

  return (
    <div className="headerOptions" onClick={onClick}>
      {Icon && <Icon className="headerOptions__icon" />}
      {avatar && (
        <Avatar className="headerOptions__icon" src={user?.photoUrl}>
          {user?.displayName[0]}
        </Avatar>
      )}
      <h3 className="headerOptions__title">{title}</h3>
    </div>
  );
}
