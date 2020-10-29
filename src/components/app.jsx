import React from 'react';
import MessageList from '../containers/message_list';
import ChannelList from '../containers/channel_list';

const App = () => {
  return (
    <div className="messaging-wrapper">
      <div className="logo-container">
        <img className="messaging-logo" src="https://dwj199mwkel52.cloudfront.net/assets/lewagon-logo-square-b6124eb974be375884558e4464efce48a9b5664f18422768156364363ecdd1fc.png" alt="logo" />
      </div>
      <ChannelList />
      <MessageList />
    </div>
  );
};

export default App;
