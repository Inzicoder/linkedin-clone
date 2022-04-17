import { Avatar } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import './HeaderOption.css'


function HeaderOption({avatar, Icon,title,onClick}) {
 const user = useSelector(selectUser)

    return (
    <div onClick={onClick} className="headerOption">
        {Icon && <Icon className="headerOption__icon"/>} 
        <h3>
            {title}
        </h3>
        {avatar && <Avatar className="headerOption__Icon" src={user?.photoUrl}>
             {user?.email[0]}
             </Avatar> }
        </div>
  )
}

export default HeaderOption