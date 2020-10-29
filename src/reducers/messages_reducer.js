import { GET_MESSAGES, CREATE_MESSAGE, CHANNEL_SELECTED } from '../actions';


export default function(state = null, action) {
  switch (action.type) {
    case GET_MESSAGES:
      return action.payload;
    // eslint-disable-next-line no-case-declarations
    case CREATE_MESSAGE:
      const newState = state.slice(0);
      newState.push(action.payload);
      return newState;
    case CHANNEL_SELECTED:
      return [];
    default:
      return state;
  }
}
