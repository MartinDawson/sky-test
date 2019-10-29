import { MEMBERS_LOADED } from '../action-creators/action-types';

export const converMembersToMap = members => {
  const membersMap = {};

  members.forEach(member => {
    membersMap[member.id] = member;
  });

  return membersMap;
};

export default (state = {}, action) => {
  switch (action.type) {
    case MEMBERS_LOADED: {
      return converMembersToMap(action.payload);
    }
  }
  return state;
};
