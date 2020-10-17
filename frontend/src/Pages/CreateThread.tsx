import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import '../CSSsource/CreateThread.css';

const CreateThread = () => {
  

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link to={ `/Home` }><a className="navbar-brand" href="#">KU People</a></Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link to={ `/SearchThread` }><a className="nav-link" href="#">Seacrh Thread</a></Link>
          </li>

          <li className="nav-item active">
            <Link to={ `/CreateThread` }><a className="nav-link" href="#">Create Thread</a></Link>
          </li>
          
          <li className="nav-item">
            <a className="nav-link disabled" href="#">By KUTheWeeb</a>
          </li>

          <li className="nav-item active">
            <a className="nav-link " href="#">
                ProfilePicHere
              
            </a>
          </li>

          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">
              Dropdown link
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a className="dropdown-item" href="#">Action</a>
              <a className="dropdown-item" href="#">Another action</a>
              <a className="dropdown-item" href="#">Something else here</a>
            </div>
          </li>

        </ul>
      </div>
    </nav>

        <div className="backgroundCreateThread">
          <div className="frameGoBackCreateThread">
            <div className="textGoBackCreateThread"> 
            &lt; Go Back
            </div>

          </div>
          <div className="whiteFrameCreateThread">
            <div className="createNewThreadTextCreateThread">
              Create New Thread
            </div>
            <div className="topicBlackFrameCreateThread">
              <form>
                <div className="topicTextCreateThread">
                  Topic :
                </div>
                <input placeholder="Topic name..." style={{ width:"960px" , height:"60px" }} onFocus= {undefined} onBlur={undefined} onChange={undefined} onSubmit={undefined} value={""}  className="inputTopicNameCreateThread"/>
              </form>
            </div>
            <div className="tagsBlackFrameCreateThread">
              <div className="tagsTextCreateThread">
                Tags :
              </div>
              <div className="needHelpFrameCreateThread">
                  <form>
                    <input className="needHelpClickBoxCreateThread" style={{ width:"40px" , height:"40px" }} type="checkbox" id="NeedHelpTag" name="NeedHelpTag" value="unClick"></input>  
                  </form> 
                  <div className="needHelpTextCreateThread">
                      Need Help
                  </div>
              </div>

              <div className="foodFrameCreateThread">
                  <form>
                    <input className="foodClickBoxCreateThread" style={{ width:"40px" , height:"40px" }} type="checkbox" id="FoodTag" name="FoodTag" value="unClick"></input>  
                  </form> 
                  <div className="foodTextCreateThread">
                      Food
                  </div>
              </div>

              <div className="newsFrameCreateThread">
                  <form>
                    <input className="newsClickBoxCreateThread" style={{ width:"40px" , height:"40px" }} type="checkbox" id="NewsTag" name="NewsTag" value="unClick"></input>  
                  </form> 
                  <div className="newsTextCreateThread">
                      News
                  </div>
              </div>

              <div className="facultyFrameCreateThread">
                  <form>
                    <input className="facultyClickBoxCreateThread" style={{ width:"40px" , height:"40px" }} type="checkbox" id="FacultyTag" name="FacultyTag" value="unClick"></input>  
                  </form> 
                  <div className="facultyTextCreateThread">
                      Faculty
                  </div>
              </div>

              <div className="questionFrameCreateThread">
                  <form>
                    <input className="questionClickBoxCreateThread" style={{ width:"40px" , height:"40px" }} type="checkbox" id="questionTag" name="questionTag" value="unClick"></input>  
                  </form> 
                  <div className="questionTextCreateThread">
                      Question
                  </div>
              </div>

              <div className="sharingFrameCreateThread">
                  <form>
                    <input className="sharingClickBoxCreateThread" style={{ width:"40px" , height:"40px" }} type="checkbox" id="sharingTag" name="sharingTag" value="unClick"></input>  
                  </form> 
                  <div className="sharingTextCreateThread">
                      Sharing
                  </div>
              </div>

              <div className="complainFrameCreateThread">
                  <form>
                    <input className="complainClickBoxCreateThread" style={{ width:"40px" , height:"40px" }} type="checkbox" id="complainTag" name="complainTag" value="unClick"></input>  
                  </form> 
                  <div className="complainTextCreateThread">
                      Complain
                  </div>
              </div>

              <div className="nonsenseFrameCreateThread">
                  <form>
                    <input className="nonsenseClickBoxCreateThread" style={{ width:"40px" , height:"40px" }} type="checkbox" id="nonsenseTag" name="nonsenseTag" value="unClick"></input>  
                  </form> 
                  <div className="nonsenseTextCreateThread">
                      Nonsense
                  </div>
              </div>
            </div>
            <div className="placeYourContentFrameCreateThread">
              <div className="placeYourContentTextCreateThread">
                Place your content :
              </div>  
              <div className="toolsPlaceYourContentCreateThread">
                <div className="frameBoldLettersToolsPlaceYourContentCreateThread">
                </div>
                <div className="frameItalicLettersToolsPlaceYourContentCreateThread">
                </div>
                <div className="frameFontsToolsPlaceYourContentCreateThread">
                  <div className="textFontsToolsPlaceYourContentCreateThread">
                    Fonts
                  </div>
                </div>
                <div className="frameSizeToolsPlaceYourContentCreateThread">
                  <form>
                    <div className="textSizeToolsPlaceYourContentCreateThread">
                      Size
                    </div>
                    <input style={{ width:"70px" , height:"40px" }} onFocus= {undefined} onBlur={undefined} onChange={undefined} onSubmit={undefined} value={""}  className="inputSizeCreateThread"/>
                  </form>
                </div>
                <div className="frameClipboardCreateThread">
                </div>
                <div className="frameUploadCreateThread">
                </div>
                <div className="frameLinkCreateThread">
                </div>
                <div className="frameImageCreateThread">
                </div>
                <div className="frameBarCreateThread">
                </div>
                <div className="frameSendCreateThread">
                </div>
                <form>
                  <input style={{ width:"1140px" , height:"250px" }} onFocus= {undefined} onBlur={undefined} onChange={undefined} onSubmit={undefined} value={""}  className="inputContentCreateThread"/>
                </form>

              </div>
            </div>

          </div>
        </div>
    </div>
  );
}

export default CreateThread;