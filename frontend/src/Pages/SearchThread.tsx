import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import '../CSSsource/SearchThread.css';
import '../CSSsource/Home.css';

const SearchThread = () => {
  

  return (
    <div className="backgroundSearchThread">
      <div className="topBlackFrameHomePage">
        <div className="topKUPeopleHomePage">
        </div>
        <div className="searchSymbolHomePage">
        </div>
        <div className="SearchBlogSymbolHomePage">
        </div>
        <div className="profilePicHomePage">
        </div>
        <div className="userRankHomePage">
          Beginner
        </div>
        <div className="userDisplayNameHomePage">
          Patrick Star
        </div>
      </div>

      <div className="frameSearchAndTopicSearchThread">
        <form>
          <div className="searchTextSearchAndTopicSearchThread">
            Search :
          </div>
          <input placeholder="Enter Your Keyword..." style={{ width:"850px" , height:"60px" }} onFocus= {undefined} onBlur={undefined} onChange={undefined} onSubmit={undefined} value={""}  className="inputKeywordSearchThread"/>
          <div className="frameSubmitSearchThread">
            <div className="textSubmitSearchThread">
              Submit
            </div>
          </div>
      
          <div className="topicTextSearchThread">
                Topic :
          </div>
              <div className="needHelpFrameSearchThread">
                  <form>
                    <input className="needHelpClickBoxSearchThread" style={{ width:"40px" , height:"40px" }} type="checkbox" id="NeedHelpTag" name="NeedHelpTag" value="unClick"></input>  
                  </form> 
                  <div className="needHelpTextSearchThread">
                      Need Help
                  </div>
              </div>

              <div className="foodFrameSearchThread">
                  <form>
                    <input className="foodClickBoxSearchThread" style={{ width:"40px" , height:"40px" }} type="checkbox" id="FoodTag" name="FoodTag" value="unClick"></input>  
                  </form> 
                  <div className="foodTextSearchThread">
                      Food
                  </div>
              </div>

              <div className="newsFrameSearchThread">
                  <form>
                    <input className="newsClickBoxSearchThread" style={{ width:"40px" , height:"40px" }} type="checkbox" id="NewsTag" name="NewsTag" value="unClick"></input>  
                  </form> 
                  <div className="newsTextSearchThread">
                      News
                  </div>
              </div>

              <div className="facultyFrameSearchThread">
                  <form>
                    <input className="facultyClickBoxSearchThread" style={{ width:"40px" , height:"40px" }} type="checkbox" id="FacultyTag" name="FacultyTag" value="unClick"></input>  
                  </form> 
                  <div className="facultyTextSearchThread">
                      Faculty
                  </div>
              </div>

              <div className="questionFrameSearchThread">
                  <form>
                    <input className="questionClickBoxSearchThread" style={{ width:"40px" , height:"40px" }} type="checkbox" id="questionTag" name="questionTag" value="unClick"></input>  
                  </form> 
                  <div className="questionTextSearchThread">
                      Question
                  </div>
              </div>

              <div className="sharingFrameSearchThread">
                  <form>
                    <input className="sharingClickBoxSearchThread" style={{ width:"40px" , height:"40px" }} type="checkbox" id="sharingTag" name="sharingTag" value="unClick"></input>  
                  </form> 
                  <div className="sharingTextSearchThread">
                      Sharing
                  </div>
              </div>

              <div className="complainFrameSearchThread">
                  <form>
                    <input className="complainClickBoxSearchThread" style={{ width:"40px" , height:"40px" }} type="checkbox" id="complainTag" name="complainTag" value="unClick"></input>  
                  </form> 
                  <div className="complainTextSearchThread">
                      Complain
                  </div>
              </div>

              <div className="nonsenseFrameSearchThread">
                  <form>
                    <input className="nonsenseClickBoxSearchThread" style={{ width:"40px" , height:"40px" }} type="checkbox" id="nonsenseTag" name="nonsenseTag" value="unClick"></input>  
                  </form> 
                  <div className="nonsenseTextSearchThread">
                      Nonsense
                  </div>
              </div>
          <div className="frameSortBySearchThread">
            <div className="textSortBySearchThread">
              Sort By &#86;
            </div>
          </div>
        </form>
      </div>

      <div className="frameResultSearchThread">
        <div className="textFirstThreadResultSearchThread">
          กินพริกป่าว
        </div>
        <div className="commentFirstThreadResultSearchThread">
          5
        </div>
        <div className="likeFirstThreadResultSearchThread">
          20
        </div>
        <div className="dislikeFirstThreadResultSearchThread">
          0
        </div>

        <div className="textSecondThreadResultSearchThread">
          ด่วนก่อนถูกลบ
        </div>
        <div className="commentSecondThreadResultSearchThread">
          69
        </div>
        <div className="likeSecondThreadResultSearchThread">
          1234
        </div>
        <div className="dislikeSecondThreadResultSearchThread">
          0
        </div>

        <div className="textThirdThreadResultSearchThread">
          แอบแซ่บ
        </div>
        <div className="commentThirdThreadResultSearchThread">
          0
        </div>
        <div className="likeThirdThreadResultSearchThread">
          1
        </div>
        <div className="dislikeThirdThreadResultSearchThread">
          0
        </div>

        <div className="textFourthThreadResultSearchThread">
          คลิปใหม่อัพทุกวัน
        </div>
        <div className="commentFourthThreadResultSearchThread">
          1
        </div>
        <div className="likeFourthThreadResultSearchThread">
          100
        </div>
        <div className="dislikeFourthThreadResultSearchThread">
          0
        </div>
      </div>
    </div>
  );
}

export default SearchThread;