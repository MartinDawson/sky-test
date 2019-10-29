import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadMessages } from '../action-creators/messages';
import Messages from './messages';
import { MessagePropType } from '../propTypes';
import { loadMembers } from '../action-creators/members';

class Home extends React.Component {
  componentDidMount() {
    this.props.loadMessages();
    this.props.loadMembers();
  }

  render() {
    return (
      <div>
        <Messages messages={this.props.messages} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  messages: state.messages,
});

Home.propTypes = {
  loadMessages: PropTypes.func.isRequired,
  loadMembers: PropTypes.func.isRequired,
  messages: PropTypes.arrayOf(PropTypes.shape(MessagePropType).isRequired).isRequired,
};

export default connect(
  mapStateToProps,
  {
    loadMembers,
    loadMessages,
  }
)(Home);
