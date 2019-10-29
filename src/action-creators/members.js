import { getMembers } from '../data';
import { MEMBERS_LOADED } from './action-types';

export const loadMembers = () => dispatch =>
  getMembers().then(data =>
    dispatch({
      type: MEMBERS_LOADED,
      payload: data,
    })
  );
