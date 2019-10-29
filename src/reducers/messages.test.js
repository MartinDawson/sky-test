import { MESSAGES_LOADED } from '../action-creators/action-types';
import messages from './messages';
import messagesJson from '../data/messages';

describe('messages', () => {
  it('returns initial state correctly', () => {
    const state = messages(undefined, {});

    expect(state).toEqual([]);
  });

  it(`${MESSAGES_LOADED} sorts the messages by timestamp`, () => {
    const state = messages(undefined, {
      payload: messagesJson,
      type: MESSAGES_LOADED,
    });
    const sortedMessages = [
      ...messagesJson.sort((a, b) => {
        const newDate = new Date(a.timestamp) - new Date(b.timestamp);

        return newDate;
      }),
    ];

    expect(state).toEqual(sortedMessages);
  });
});
