import React from 'react';
import PropTypes from 'prop-types';
import { MessagePropType } from '../propTypes';
import Message from './message';

class Messages extends React.Component {
  render() {
    return (
      <div>
        {this.props.messages.map(message => (
          <Message key={message.id} message={message} />
        ))}
      </div>
    );
  }
}

Messages.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape(MessagePropType)),
};

export default Messages;
