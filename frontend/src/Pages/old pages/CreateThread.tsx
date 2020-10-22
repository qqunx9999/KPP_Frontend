import React from 'react';
import Navigtion from '../../component/NavBar';
import '../CSSsource/CreateThread.css';
import { Link } from "react-router-dom";

const CreateThread = () => {
  

  return (
    <div>
      <Navigtion />
        <div className="backgroundCreateThread">
          <Link to="/Home" className="frameGoBackCreateThread">
            <div className="textGoBackCreateThread"> 
            &lt; Go Back
            </div>

          </Link>
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
                  <input style={{ width:"1140px" , height:"450px" }} onFocus= {undefined} onBlur={undefined} onChange={undefined} onSubmit={undefined} value={""}  className="inputContentCreateThread"/>
                </form>

              </div>
            </div>

          </div>
        </div>
    </div>
  );
}

export default CreateThread;