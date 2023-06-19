import PropTypes from 'prop-types';
import css from './FriendList.module.css';
import { FriendItem } from '../FriendListItem/FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(friend => {
        return (
          <li key={friend.id} className={css.item}>
            <FriendItem
              id={friend.id}
              isOnline={friend.isOnline}
              avatar={friend.avatar}
              name={friend.name}
            />
          </li>
        );
      })}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
