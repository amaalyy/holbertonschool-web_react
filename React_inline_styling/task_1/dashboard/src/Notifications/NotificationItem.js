import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class NotificationItem extends PureComponent {
  render() {
    const { type = 'default', html, value } = this.props;
    const liProps = {
      "data-priority": type
    };

    if (html) {
      liProps.dangerouslySetInnerHTML = html;
    } else {
      liProps.children = value;
    }

    return (
      <li {...liProps} />
    );
  }
}

NotificationItem.propTypes = {
  type: PropTypes.string,
  html: PropTypes.shape({ __html: PropTypes.string }),
  value: PropTypes.string
};

export default NotificationItem;
