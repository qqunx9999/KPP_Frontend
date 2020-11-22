// import React from 'react';
// import { Button, Modal } from 'react-bootstrap';
// import AuthService from '../service/AuthService';
// import ThreadService from '../service/ThreadService';

// export default class Test extends React.Component {
//   state = {
//     report: {
//       threads: [],
//       pageInfo: []
//     },
//     oneThreadReport: {
//       reportT: [],
//       threadInfo: [],
//       userInfo: [],
//       fetching: false
//     },
//     modal: {
//       show: false
//     }
//   }

//   fetchReport() {
//     let userID = AuthService.getUserID();
//     ThreadService.fetchReportThread(userID)
//       .then(res => this.setState({
//         report: {
//           threads: res.RTs_page,
//           pageInfo: res.pageInfo
//         }
//       }))
//   }

//   fetchOneReport(reportID: string) {
//     ThreadService.fetchOneThreadReport(reportID)
//       .then(res => this.setState({
//         oneThreadReport: {
//           reportT: res.reportT,
//           threadInfo: res.threadInfo,
//           userInfo: res.userInfo
//         }
//       }))
//   }

//   componentDidMount(number: number) {
//     this.fetchReport();
//   }

//   handleShow() {
//     this.setState({
//       modal: {
//         show: true
//       }
//     })
//   }

//   handleClose() {
//     this.setState({
//       modal: {
//         show: false
//       }
//     })
//   }

//   reportModal(reportID: string) {
//     return (
//       <div>
//         <Button variant="primary" onClick={() => this.handleShow()}>
//           Read
//         </Button>

//         <Modal show={this.state.modal.show} onHide={() => this.handleClose()}>
//           {/* {this.fetchOneReport(reportID)} */}
//           {/* {console.dir(this.state.oneThreadReport)} */}
//           <Modal.Header closeButton>
//             <Modal.Title>Thread Report</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>
//             <h2>Topic :</h2>
//             <h2>By :</h2>
//             <h2>Reason :</h2>
//           </Modal.Body>
//           <Modal.Footer>
//             <Button variant="success">Approve</Button>
//             <Button variant="danger">Disapprove</Button>
//           </Modal.Footer>
//         </Modal>
//       </div>
//     );
//   }

//   threadReportMap() {
//     const result = this.state.report.threads.map((thread: any) => {
//       // console.log(thread[0].reportTID)
//       return (
//         <div>
//           { this.reportModal(thread[0].reportTID) }
//           {/* { thread[0].reportTID } */}
//         </div>
//       );
//     })
//     return result;
//   }

//   render() {
//     // console.dir(this.state.report.threads[0])
//     return (
//       <div>
//         {this.threadReportMap()}
//       </div>
//     );
//   }
// }

import React from 'react';
import Notifications from '../component/Notifications';

export default class Test extends React.Component {
  render() {
    return (
      <div>
        <Notifications />
      </div>
    );
  }
}