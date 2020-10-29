import React from 'react';
import { emojify } from 'react-emojione';

const Message = (props) => {
  const time = new Date(props.created_at).toLocaleTimeString("fr-FR");
  function hashCode(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i += 1) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return hash;
  }

  function intToRGB(i) {
    const c = (i & 0x00FFFFFF)
      .toString(16)
      .toUpperCase();

    return `#${"00000".substring(0, 6 - c.length)}${c}`;
  }

  return (
    <div className="message-container">
      <i className="author">
        <span style={{ color: intToRGB(hashCode(props.author)) }}>{props.author}</span>
        <small>{time}</small>
      </i>
      <p>{emojify(props.content)}</p>
    </div>
  );
};

export default Message;
