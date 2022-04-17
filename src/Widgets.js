
import React from "react";
import "./Widgets.css";
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';


function Widgets() {

    const newsArticle = (header,subtitle)=>(
      <div className="widgets_article">
         <div className="widgets_articleLeft">
        <FiberManualRecordIcon />
        </div>
        <div className="widgets_articleRight">
        <h4>{header}</h4>
        <p>{subtitle}</p>
        </div>
      </div>
    )

  return (
    <div className="widgets">
      <div className="widgets_header">
        <h2>
            LinkedIn News
        </h2>
        <InfoIcon />
      </div>
      {newsArticle("Linkedin Clone",'Clone Series')}
      {newsArticle("Covid 19",'Top News,cases dropping fastly')}
      {newsArticle("Elon Musk",'Top News,In talks with Twitter')}
      {newsArticle("Javascript",'New Libraries floating ')}
      {newsArticle("React JS",'Jobs increasing exponentially')}
      {newsArticle("React Native",'Top News,Worth the hype ?')}
      {newsArticle("React Native",'Worth the hype ?')}
      {newsArticle("React Native",'Worth the hype ?')}
      {newsArticle("React Native",'Worth the hype ?')}
      {newsArticle("React Native",'Worth the hype ?')}
      {newsArticle("React Native",'Worth the hype ?')}
    </div>
  );
}

export default Widgets;
