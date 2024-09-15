import React, { Component } from 'react';
import './Notifications.css';
import closeIcon from '../assets/close-icon.jpg';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';
import PropTypes from 'prop-types';

class Notifications extends Component {
  shouldComponentUpdate(nextProps) {
    // Check if the length of the new listNotifications is longer than the previous one
    return nextProps.listNotifications.length > this.props.listNotifications.length;
  }

  render() {
    const { displayDrawer, listNotifications } = this.props;

    return (
      <>
        <div className='notificationsContainer'>
          <div className="menuItem">
              Your notifications
          </div>
          {displayDrawer && (              
              <div className="Notifications" style={{ position: 'relative' }}>
                  <button
                      style={{ position: 'absolute', right: '10px', top: '10px' }}
                      aria-label="Close"
                      onClick={() => console.log('Close button has been clicked')}
                  >
                      <img src={closeIcon} alt="Close" />
                  </button>
                  <p>
                      {listNotifications.length > 0 ? 'Here is the list of notifications' : 'No new notification for now'}
                  </p>
                  <ul>
                      {listNotifications.map(notification => (
                          <NotificationItem 
                              key={notification.id} 
                              type={notification.type} 
                              value={notification.value} 
                              html={notification.html} 
                          />
                      ))}
                  </ul>
              </div>                
          )}
        </div>
      </>
    );
  }
}

Notifications.propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape)
};

Notifications.defaultProps = {
    displayDrawer: false,
    listNotifications: []
};

export default Notifications;
