import { MESSAGES_LOADED } from '../action-creators/action-types';

export default (state = [], action) => {
  switch (action.type) {
    case MESSAGES_LOADED: {
      const sortedMessages = [
        ...action.payload.sort((a, b) => {
          const newDate = new Date(a.timestamp) - new Date(b.timestamp);

          return newDate;
        }),
      ];
      return sortedMessages;
    }
  }
  return state;
};
