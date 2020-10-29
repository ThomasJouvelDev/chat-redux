import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Message from '../components/message';
import MessageForm from '../containers/message_form';
import { getMessages } from '../actions';

class MessageList extends Component {
  componentWillMount() {
    this.getMessages();
  }

  // componentDidMount() {
  //   this.refresher = setInterval(this.getMessages, 5000);
  // }

  componentDidMount() {
    
  }

  shouldComponentUpdate(nextProps) {
    return this.props.messages.length !== nextProps.messages.length;
  }

  componentDidUpdate() {
    this.list.scrollTop = this.list.scrollHeight;
  }

  componentWillUnmount() {
    clearInterval(this.refresher);
  }

  getMessages = () => {
    this.props.getMessages(this.props.selectedChannel);
  }

  renderList() {
    return this.props.messages.map((message) => {
      return (
        <Message key={message.created_at} content={message.content} author={message.author} created_at={message.created_at} />
      );
    });
  };

  render() {
    return (
      <div className="channel-container">
        <div className="channel-title">
          <span>Channel #{this.props.selectedChannel}</span>
        </div>
        <div className="channel-content" ref={(list) => { this.list = list; }}>
          {this.renderList()}
        </div>
        <MessageForm />
      </div>
    );
  }
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { getMessages },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    messages: state.messages,
    selectedChannel: state.selectedChannel,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
