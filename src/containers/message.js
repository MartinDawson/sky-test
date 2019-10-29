import React from 'react';
import PropTypes from 'prop-types';
import { MessagePropType, MemberPropType } from '../propTypes';
import { connect } from 'react-redux';
import dayjs from 'dayjs';

class Message extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.messageOnMouseLeave = this.messageOnMouseLeave.bind(this);
    this.messageOnMouseEnter = this.messageOnMouseEnter.bind(this);
  }

  messageOnMouseEnter() {
    this.setState({
      messageHovered: true,
    });
  }

  messageOnMouseLeave() {
    this.setState({
      messageHovered: false,
    });
  }

  render() {
    return this.props.member ? (
      <div className="message" onMouseEnter={this.messageOnMouseEnter} onMouseLeave={this.messageOnMouseLeave}>
        <img src={this.props.member.avatar} />
        {this.state.messageHovered && <div className="email">{this.props.member.email}</div>}
        {this.props.message.message}
        <div className="timestamp">{dayjs(this.props.message.timestamp).format('DD/MM/YYYY')}</div>
      </div>
    ) : null;
  }
}

const mapStateToProps = (state, props) => {
  const member = state.members[props.message.userId];

  return {
    member,
  };
};

Message.propTypes = {
  message: PropTypes.shape(MessagePropType),
  member: PropTypes.shape(MemberPropType),
};

export default connect(mapStateToProps)(Message);
