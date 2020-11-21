import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.module.css';
import AuthService from '../service/AuthService';

export default class Test extends React.Component {
  state: any = {
    threads: [],
    threadsInfo: [],
    comment: [],
    commentInfo: [],
    thread: [],
    threadInfo: []
  }

  fetchThread = async (userID: string, pageNo: number) => {
    let response = await fetch(`http://localhost:3000/reports/reportTs/list/${userID}/8/${pageNo}`, {
      method: 'GET',
      headers: {
        'Accept': 'applicaiton/json',
        'Content-Type': 'application/json'
      }
    })

    const data = response.json().then(res => this.setState({
      threads: res.RTs_page,
    }));
  }

  fetchOneThread = async (reportID: string) => {
    let response = await fetch(`/reports/reportTs/${ reportID }`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })

    const data = response.json().then(res => this.setState({
      thread: res[1],
      threadInfo: res[2]
    }));
    // console.dir(data);
  }

  componentDidMount() {
    const userID = AuthService.getUserID();
    this.fetchThread(userID, 1);
    // this.fetchOneThread();
  }

  render() {
    console.dir(this.state.threads);
    let report: any = [];

    if (this.state.threads !== []) {
      report = this.state.threads.map((thread: any) => (
        <li>
          <h1>Report Thread</h1>
          { thread.reportID }
        </li>
      ))
    }
    return (
      <div>
        { report }
      </div>
    );
  }
}

// export default class Test extends React.Component {
//   state = {
//     latest: {
//       threads: [],
//       pageInfo: []
//     },
//     hottest: {
//       threads: [],
//       pageInfo: []
//     },
//     news: {
//       threads: [],
//       pageInfo: []
//     }
//   }

//   fetchLatestPages = async (pageNumber: any) => {
//     let response = await fetch(`http://localhost:3000/threads/filter/%20/Latest/8/${ pageNumber }`, {
//       method: 'GET',
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//       },
//     })

//     const data = await response.json();

//     this.setState({
//       latest: {
//         threads: data[0].threads,
//         pageInfo: data[0].pageInfo
//       }
//     });
//   }

//   fetchHottestPages = async (pageNumber: any) => {
//     let response = await fetch(`http://localhost:3000/threads/filter/%20/Hottest/8/${pageNumber}`, {
//       method: 'GET',
//       headers: {
//         'Accept': 'applecation/json',
//         'Content-Type': 'application/json'
//       },
//     })

//     const data = await response.json();

//     this.setState({
//       hottest: {
//         threads: data[0].threads,
//         pageInfo: data[0].pageInfo
//       }
//     });
//   }

//   fetchNewsPages = async (pageNumber: any) => {
//     let response = await fetch(`http://localhost:3000/threads/filter/%20/Newest/8/${pageNumber}`, {
//       method: 'GET',
//       headers: {
//         'Accept': 'applecation/json',
//         'Content-Type': 'application/json'
//       },
//     })

//     const data = await response.json();

//     this.setState({
//       newest: {
//         threads: data[0].threads,
//         pageInfo: data[0].pageInfo
//       }
//     });
//   }

//   componentDidMount() {
//     this.fetchLatestPages(1);
//     this.fetchHottestPages(1);
//     this.fetchNewsPages(1)
//   }

//   render() {
//     console.dir(this.state.latest.threads);
//     let latestThreads: any, hottestThreads: any, newsThreads: any;

//     if (this.state.latest.threads !== []) {
//       latestThreads = this.state.latest.threads.map((thread: any) => (
//         <ul>
//           <li key={thread.threadID}>
//             <p>{ thread.topic }</p>
//           </li>
//         </ul>
//       ));
//     };

//     if (this.state.hottest.threads !== []) {
//       hottestThreads = this.state.latest.threads.map((thread: any) => (
//         <ul>
//           <li key={thread.threadID}>
//             <p>{thread.topic}</p>
//           </li>
//         </ul>
//       ));
//     };

//     if (this.state.news.threads !== []) {
//       newsThreads = this.state.latest.threads.map((thread: any) => (
//         <ul>
//           <li key={thread.threadID}>
//             <p>{thread.topic}</p>
//           </li>
//         </ul>
//       ));
//     };

//     return (
//       <div>
//         <h1>Latest</h1>
//         { latestThreads }
//         <h1>Hottest</h1>
//         { hottestThreads }
//         <h1>News</h1>
//         { newsThreads }
//       </div>
//     );
//   }
// }