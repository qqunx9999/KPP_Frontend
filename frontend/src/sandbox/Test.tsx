import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.module.css';

// export default class Test extends React.Component {
//   state = {
//     users: [],
//     total: [],
//     per_page: [],
//     current_page: []
//   }

//   makeHTTPRequestWithPage = async (pageNumber: any) => {
//     let response = await fetch(`https://reqres.in/api/users?page=${pageNumber}`, {
//       method: 'GET',
//       headers: {
//         'Accept': 'applecation/json',
//         'Content-Type': 'application/json'
//       },
//     });

//     const data = await response.json();

//     this.setState({
//       users: data.data,
//       total: data.total,
//       per_page: data.per_page,
//       current_page: data.page
//     });
//   }

//   componentDidMount() {
//     this.makeHTTPRequestWithPage(1);
//   }

//   render() {
//     console.dir(this.state.current_page);
//     let users: any;
//     let pageNum = this.state.current_page;

//     if (this.state.users !== []) {
//       users = this.state.users.map((user: any) => (
//         <tr key={user.id}>
//           <td>{user.id}</td>
//           <td>{user.first_name}</td>
//           <td>{user.last_name}</td>
//         </tr>
//       ));
//     };
//     return (
//       <div className="container">
//         <table className="table table-dark">
//           <thead>
//             <tr>
//               <td>S/N</td>
//               <td>First Name</td>
//               <td>Last Name</td>
//             </tr>
//           </thead>
//           <tbody>
//             { users }
//           </tbody>
//         </table>

//         {
//           Number(this.state.current_page) === 1 ?
//             <div>
//               <nav aria-label="Page navigation example">
//                 <ul className="pagination">
//                   <li onClick={() => this.makeHTTPRequestWithPage(Number(this.state.current_page) - 1)} className="page-item disabled"><div className="page-link">Previous</div></li>
//                   <li onClick={() => this.makeHTTPRequestWithPage(1)} className="page-item"><div className="page-link active">1</div></li>
//                   <li onClick={() => this.makeHTTPRequestWithPage(2)} className="page-item"><div className="page-link">2</div></li>
//                   <li onClick={() => this.makeHTTPRequestWithPage(3)} className="page-item"><div className="page-link">3</div></li>
//                   <li onClick={() => this.makeHTTPRequestWithPage(Number(this.state.current_page) + 1)} className="page-item"><div className="page-link">Next</div></li>
//                 </ul>
//               </nav>
//             </div>
//             :
//             <div>
//               <nav aria-label="Page navigation example">
//                 <ul className="pagination">
//                   <li onClick={() => this.makeHTTPRequestWithPage(Number(this.state.current_page) - 1)} className="page-item"><div className="page-link">Previous</div></li>
//                   <li onClick={() => this.makeHTTPRequestWithPage(Number(this.state.current_page) - 1)} className="page-item"><div className="page-link">{Number(this.state.current_page) - 1}</div></li>
//                   <li onClick={() => this.makeHTTPRequestWithPage(Number(this.state.current_page))} className="page-item active"><div className="page-link">{this.state.current_page}</div></li>
//                   <li onClick={() => this.makeHTTPRequestWithPage(Number(this.state.current_page) + 1)} className="page-item"><div className="page-link">{Number(this.state.current_page) + 1}</div></li>
//                   <li onClick={() => this.makeHTTPRequestWithPage(Number(this.state.current_page) + 1)} className="page-item"><div className="page-link">Next</div></li>
//                 </ul>
//               </nav>
//             </div>
//         }
//       </div>
//     );
//   }
// }

export default class Test extends React.Component {
  state = {
    latest: {
      threads: [],
      pageInfo: []
    },
    hottest: {
      threads: [],
      pageInfo: []
    },
    news: {
      threads: [],
      pageInfo: []
    }
  }

  fetchLatestPages = async (pageNumber: any) => {
    let response = await fetch(`http://localhost:3000/threads/filter/%20/Latest/8/${ pageNumber }`, {
      method: 'GET',
      headers: {
        'Accept': 'applecation/json',
        'Content-Type': 'application/json'
      },
    })

    const data = await response.json();

    this.setState({
      latest: {
        threads: data[0].threads,
        pageInfo: data[0].pageInfo
      }
    });
  }

  fetchHottestPages = async (pageNumber: any) => {
    let response = await fetch(`http://localhost:3000/threads/filter/%20/Hottest/8/${pageNumber}`, {
      method: 'GET',
      headers: {
        'Accept': 'applecation/json',
        'Content-Type': 'application/json'
      },
    })

    const data = await response.json();

    this.setState({
      hottest: {
        threads: data[0].threads,
        pageInfo: data[0].pageInfo
      }
    });
  }

  fetchNewsPages = async (pageNumber: any) => {
    let response = await fetch(`http://localhost:3000/threads/filter/%20/Newest/8/${pageNumber}`, {
      method: 'GET',
      headers: {
        'Accept': 'applecation/json',
        'Content-Type': 'application/json'
      },
    })

    const data = await response.json();

    this.setState({
      newest: {
        threads: data[0].threads,
        pageInfo: data[0].pageInfo
      }
    });
  }

  componentDidMount() {
    this.fetchLatestPages(1);
    this.fetchHottestPages(1);
    this.fetchNewsPages(1)
  }

  render() {
    console.dir(this.state.latest.threads);
    let latestThreads: any, hottestThreads: any, newsThreads: any;

    if (this.state.latest.threads !== []) {
      latestThreads = this.state.latest.threads.map((thread: any) => (
        <ul>
          <li key={thread.threadID}>
            <p>{ thread.topic }</p>
          </li>
        </ul>
      ));
    };

    if (this.state.hottest.threads !== []) {
      hottestThreads = this.state.latest.threads.map((thread: any) => (
        <ul>
          <li key={thread.threadID}>
            <p>{thread.topic}</p>
          </li>
        </ul>
      ));
    };

    if (this.state.news.threads !== []) {
      newsThreads = this.state.latest.threads.map((thread: any) => (
        <ul>
          <li key={thread.threadID}>
            <p>{thread.topic}</p>
          </li>
        </ul>
      ));
    };

    return (
      <div>
        <h1>Latest</h1>
        { latestThreads }
        <h1>Hottest</h1>
        { hottestThreads }
        <h1>News</h1>
        { newsThreads }
      </div>
    );
  }
}