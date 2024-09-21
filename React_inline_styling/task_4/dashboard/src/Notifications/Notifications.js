import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css, keyframes } from 'aphrodite';
import closeIcon from '../assets/close-icon.jpg';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.listNotifications.length > this.props.listNotifications.length;
  }

  render() {
    const { displayDrawer, listNotifications } = this.props;

    const fadeIn = keyframes({
      '0%': { opacity: 0.5 },
      '100%': { opacity: 1 }
    });

    const bounce = keyframes({
      '0%': { transform: 'translateY(0px)' },
      '50%': { transform: 'translateY(-5px)' },
      '100%': { transform: 'translateY(5px)' }
    });

    return (
      <>
        {displayDrawer && (              
          <div className={css(styles.notifications)} data-testid="notifications">
            <button
              className={css(styles.notificationsButton)}
              aria-label="Close"
              onClick={() => console.log('Close button has been clicked')}
              data-testid="closeButton"
            >
              <img src={closeIcon} alt="Close" style={{ width: '20px' }} />
            </button>
            <p className={css(styles.notificationsP)}>
              {listNotifications.length > 0 ? 'Here is the list of notifications' : 'No new notification for now'}
            </p>
            <ul className={css(styles.notificationsUl)}>
              {listNotifications.length > 0 ? (
                listNotifications.map(notification => (
                  <NotificationItem 
                    key={notification.id}
                    type={notification.type}
                    value={notification.value}
                    html={notification.html}
                    markAsRead={this.markAsRead}
                    id={notification.id}
                  />
                ))
              ) : (
                <NotificationItem value="No new notification for now" />
              )}
            </ul>
          </div>                
        )}
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

const styles = StyleSheet.create({
  notifications: {
    display: 'flex',
    flexDirection: 'column',
    border: '2px dashed #e0003c',
    alignItems: 'flex-start',
    width: '100%',
  },
  notificationsButton: {
    textDecoration: 'none',
    border: 'none',
    background: 'none',
    cursor: 'pointer',
    position: 'fixed',
    top: 0,
    right: 0,
    backgroundColor: '#fff8f8',
    cursor: 'pointer',
    animationName: fadeIn, // Apply fade-in animation
    animationDuration: '1s', // Duration for fade-in animation
    animationFillMode: 'forwards', // Keep final state after animation
    animationIterationCount: 3, // Repeat animation 3 times
    ':hover': {
      animationName: bounce, // Apply bounce animation on hover
      animationDuration: '0.5s', // Duration for bounce animation
    }
  },
  notificationsP: {
    display: 'flex',
    justifyContent: 'flex-end',
    paddingTop: '20px',
    marginLeft: '10px',
    fontSize: '20px',
  },
  notificationsUl: {
    padding: 0,
  }
});

export default Notifications;
