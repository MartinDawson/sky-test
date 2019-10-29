import { loadMembers } from './members';
import members from '../data/members.json';
import { MEMBERS_LOADED } from './action-types';

const mockMembers = members;

jest.mock('../data', () => ({
  getMembers: () => new Promise(resolve => {
    process.nextTick(() => resolve(mockMembers));
  })
}));

describe('members', () => {
  it('loadMembers should dispatch MEMBERS_LOADED correctly', async () => {
    const dispatch = jest.fn();
    const thunk = loadMembers();

    await thunk(dispatch);

    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch).toHaveBeenCalledWith({
      type: MEMBERS_LOADED,
      payload: members,
    });
  });
});
