import React from 'react';
import { Link } from 'react-router-dom';
import { baseUrl } from '../config/constant';
import AuthService from '../service/AuthService';
import UserService from '../service/UserService';

class Notifications extends React.Component {
  state = {
    notification: [
      {
        notificationInfo: {
          notificationInfo: '',
          userID: '',
          object_type: '',
          object_typeID: '',
          date_noti: '',
          date_read: ''
        },
        commentInfo: {
          comment: {
            commentID: '',
            userID: '',
            threadID: '',
            content: '',
            image_arr: [],
            reply_to: 0,
            commentNO: 0,
            date_create: ''
          },
          threadInfo: {
            thread: {
              threadID: '',
              userID: '',
              topic: '',
              tag_arr: [],
              content: '',
              threadNO: 0,
              up_vote_arr: [],
              down_vote_arr: [],
              up_vote_count: 0,
              down_vote_count: 0,
              total_comment: 0,
              number_of_all_comment: 0,
              date_create: ''
            },
            userInfo: {
              userID: '',
              name: '',
              exp: 0,
              rank: '',
              isAdmin: false,
              isLoggin: false
            }
          },
          userInfo: {
            userID: '',
            name: '',
            exp: 0,
            rank: '',
            isAdmin: false,
            isLoggin: false
          }
        }
      }
    ]
  }

  fetchNotification = async () => {
    const userID = AuthService.getUserID();
    console.log(userID)
    let response = await fetch(`http://localhost:3000/notifications/any/users/${userID}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
      .then(obj => this.setState({
        notification: obj
      }));
  }

  componentDidMount() {
    this.fetchNotification();
  }

  checkRead = async () => {
    await fetch(`${ baseUrl }/`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.token}`
      }
    })
  }

  render() {
    // scripts
    console.dir(this.state.notification[0]);
    return (
      <div>
        {this.state.notification.map((noti: any) => (
          <Link to={`/Thread/${noti.commentInfo.threadInfo.thread.threadID}`}>
            { noti.commentInfo.userInfo.name} is comment at thread
            <b> {noti.commentInfo.threadInfo.thread.topic} </b>
            as { noti.commentInfo.comment.content} <hr />
          </Link>
        ))}
      </div>
    );
  }
}

export default Notifications;