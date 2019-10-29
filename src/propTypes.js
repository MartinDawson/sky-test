import PropTypes from 'prop-types';

export const MessagePropType = {
  id: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
};

export const MemberPropType = {
  id: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  ip: PropTypes.string.isRequired,
};
