import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { selectChannel, getMessages } from '../actions';

class ChannelList extends Component {
  handleClick = (channel) => {
    this.props.selectChannel(channel);
    this.props.getMessages(channel);
  }
  render () {
    return (
      <div className="channels-container">
        <span>Redux Chat</span>
        <ul>
          {this.props.channels.map((channel) => {
            return (
              <li key={channel} className={(this.props.selectedChannel === channel ? "active" : "")} onClick={() => this.handleClick(channel)} >
                {channel}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { selectChannel, getMessages },
    dispatch
  );
}


function mapStateToProps(state) {
  return {
    channels: state.channels,
    selectedChannel: state.selectedChannel,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);
