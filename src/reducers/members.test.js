import { MEMBERS_LOADED } from '../action-creators/action-types';
import members, { converMembersToMap } from './members';
import membersJson from '../data/members';

describe('members', () => {
  it('returns initial state correctly', () => {
    const state = members(undefined, {});

    expect(state).toEqual({});
  });

  it(`${MEMBERS_LOADED} converts the members payload from the action to a members map`, () => {
    const state = members(undefined, {
      payload: membersJson,
      type: MEMBERS_LOADED,
    });

    expect(state).toEqual(converMembersToMap(membersJson));
  });
});
