import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { createMessage } from '../actions';

class MessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  componentDidMount() {
    this.box.focus();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.selectedChannel !== nextProps.selectedChannel) {
      this.box.focus();
    }
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }

  handleSubmit = (event) => {
    this.props.createMessage(this.props.selectedChannel, this.props.currentUser, this.state.value);
    event.preventDefault();
    this.setState({ value: '' });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="channel-editor">
        <input type="text" value={this.state.value} onChange={this.handleChange} ref={(box) => { this.box = box; }} />
        <input type="submit" value="Send" className="button" />
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { createMessage },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
    selectedChannel: state.selectedChannel,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);
