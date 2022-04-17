import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import HeaderOption from "./HeaderOption";
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import WorkIcon from '@mui/icons-material/Work';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser, userSignedOut } from "./features/userSlice";
import { auth } from "./firebase.util";


function Header() {


  const dispatch = useDispatch()
  const user = useSelector(selectUser)

  const logoutOfApp =()=>{
    // dispatch(logout())
    dispatch(userSignedOut())
    auth.signOut()
    console.log('login',user)
  }

  return (
    <div className="header">
      <div className="header__left">
      <LinkedInIcon />
        <div className="header__search">
            <SearchIcon />
            <input type="search" placeholder="Search" />
        </div>
      </div>

      <div className="header__right">
          <HeaderOption Icon={HomeIcon} title="Home"/>
          <HeaderOption Icon={SupervisorAccountIcon} title="Network"/>
          <HeaderOption Icon={WorkIcon} title="Jobs"/>
          <HeaderOption Icon={MessageIcon} title="Messaging"/>
          <HeaderOption Icon={NotificationsIcon} title="Notifications" />
          <HeaderOption onClick={logoutOfApp} avatar="https://media-exp1.licdn.com/dms/image/C5103AQGzKi0DO5cerA/profile-displayphoto-shrink_100_100/0/1551612615854?e=2147483647&v=beta&t=t8MfPFuGnnO7tTQn4OUp1mw4XW_sQtZCd3VaVlaVt2U" />
      </div>
    </div>
  );
}

export default Header;

