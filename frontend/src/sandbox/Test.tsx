import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.module.css';
import AuthService from '../service/AuthService';
import ReadReport from '../Pages/ReadReport';
import Notifications from '../component/Notifications';

// export default class Test extends React.Component {
//   state: any = {
//     threads: [[{}]],
//     threadsInfo: [],
//     comment: [],
//     commentInfo: [],
//     thread: [],
//     threadInfo: []
//   }

//   fetchThread = async (userID: string, pageNo: number) => {
//     let response = await fetch(`http://localhost:3000/reports/reportTs/list/${userID}/8/${pageNo}`, {
//       method: 'GET',
//       headers: {
//         'Accept': 'applicaiton/json',
//         'Content-Type': 'application/json'
//       }
//     })

//     const data = response.json().then(res => this.setState({
//       threads: res.RTs_page,
//     }));
//   }

//   fetchOneThread = async (reportID: string) => {
//     let response = await fetch(`/reports/reportTs/${ reportID }`, {
//       method: 'GET',
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//       }
//     })

//     const data = response.json().then(res => this.setState({
//       thread: res[1],
//       threadInfo: res[2]
//     }));
//     // console.dir(data);
//   }

//   componentDidMount() {
//     const userID = AuthService.getUserID();
//     this.fetchThread(userID, 1);
//     // this.fetchOneThread();
//   }

//   render() {
//     console.dir(this.state.threads[0][0]);
//     let report: any = [];

//     function handleReadThread(reportTID: string) {
//       return (
//         <ReadReport />
//       );
//     }

//     if (this.state.threads !== []) {
//       report = this.state.threads.map((thread: any) => (
//         <li>
//           <h1>Report Thread</h1>
//           <button onClick={ () => handleReadThread(thread[0].reportTID) }>read</button>
//         </li>
//       ))
//     }
//     return (
//       <div>
//         { report }
//       </div>
//     );
//   }
// }

export default class Test extends React.Component {
  render() {
    return (
      <div>
        <Notifications />
      </div>
    );
  }
}