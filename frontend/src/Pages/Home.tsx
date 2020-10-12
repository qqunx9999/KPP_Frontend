import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { thread } from '../interfaces/newsEntity';

const Home = () => {
  const [thread, setThread] = useState<thread[]>([]);

  const fetchNews = () => {
    
  }

  return (
     <div>
         
     </div>
  );
}

export default Home;