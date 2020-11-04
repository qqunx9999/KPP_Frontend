import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Navigtion from '../component/NavBar';
import ThreadForm from '../component/ThreadForm';
import AuthService from '../service/AuthService';
import '../CSSsource/CreateThread.css';

function CreateThread_new() {
  const history = useHistory();

 

  return (
    <div>
      <Navigtion />
      <div className="backgroundCreateThread">
        <div className="textGoBackCreateThread">
        <button className="btn btn-success sThread_goback_button" onClick={ history.goBack }>Go Back</button>
        </div>
        <div className="whiteFrameCreateThread">
          <div className="createNewThreadTextCreateThread"> Create New Thread</div>
          <ThreadForm />
        </div>
      </div>
    </div>
  );
}

export default CreateThread_new;
