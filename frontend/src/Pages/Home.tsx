import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Thread } from '../interfaces/newsEntity';
import 'bootstrap/dist/css/bootstrap.css';

const Home = () => {
  const [thread, setThread] = useState<Thread[]>([]);

  useEffect(() => {
    fetch('http://localhost:3000')
      .then(res => res.json())
      .then(obj => {
        setThread(obj.json());
      });
  },[]);

  return (
     <div className="container">
       <h6>Latest</h6>
       <ul>
         <Link to={ `Threads` }>
           { thread.map(item => {
             return <li key={ item.userID }>{ item.content }</li>
           }) }
         </Link>
       </ul>
       <h6>Hottest</h6>
       <ul>
         <Link to={ `Threads` }>
          { thread.map(item => {
              return <li key={ item.userID }>{ item.content }</li>
            }) }
         </Link>
       </ul>
       <h6>News</h6>
       <ul>
        <Link to={ `Threads` }>
          { thread.map(item => {
            return <li key={ item.userID }>{ item.content }</li>
          }) }
        </Link>
       </ul>
     </div>
  );
}

export default Home;