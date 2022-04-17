import { Avatar } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import "./Sidebar.css";

function Sidebar() {
  const user = useSelector(selectUser);
  console.log(user, "user");

  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          alt="background-cover"
          src="https://media-exp1.licdn.com/dms/image/C4D16AQFBTEZH9739Ng/profile-displaybackgroundimage-shrink_200_800/0/1610818787022?e=1653523200&v=beta&t=MU7PacWaOF3Ba-IVbDR9ejYJzdXqWdJFbVglG0XxmvQ"
        />
        <Avatar
          className="sidebar__avatar"
          src={user.photoUrl}
        >
          {user.email[0]}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
        <p>Front End Developer at ETG</p>

        <div className="sidebar__stats">
          <div className="sidebar__stat">
            <p>who viewed you</p>
            <p className="sidebar__statNumber">232</p>
          </div>
          <div className="sidebar__stat">
            <p>Views on posts</p>
            <p className="sidebar__statNumber">122</p>
          </div>
        </div>

        <div className="sidebar__bottom">
          <p>Recent</p>
          <p> {recentItem("reactjs")}</p>
          <p> {recentItem("programming")}</p>
          <p> {recentItem("software developer")}</p>
          <p> {recentItem("react native")}</p>
          <p> {recentItem("js")}</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
