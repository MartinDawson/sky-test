import { loadMessages } from './messages';
import messages from '../data/messages.json';
import { MESSAGES_LOADED } from './action-types';

const mockMessages = messages;

jest.mock('../data', () => ({
  getMessages: () => new Promise(resolve => {
    process.nextTick(() => resolve(mockMessages));
  })
}));

describe('messages', () => {
  it('loadMessages should dispatch MESSAGES_LOADED correctly', async () => {
    const dispatch = jest.fn();
    const thunk = loadMessages();

    await thunk(dispatch);

    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch).toHaveBeenCalledWith({
      type: MESSAGES_LOADED,
      payload: messages,
    });
  });
});
