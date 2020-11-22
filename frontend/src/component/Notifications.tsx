import React from 'react';
import AuthService from '../service/AuthService';
import UserService from '../service/UserService';

class Notifications extends React.Component {
  state = {
    notification: []
  }

  fetchNotification = async () => {
    const userID = AuthService.getUserID();
    let response = await UserService.notification(userID);
    // console.log(response);

    // let data = response.json();

    this.setState({
      notification: response
    })
  }

  componentDidMount() {
    this.fetchNotification();
  }

  render() {
    // scripts
    console.dir(this.state.notification);
    return (
      <div>
        {/* return component */}
      </div>
    );
  }
}

export default Notifications;