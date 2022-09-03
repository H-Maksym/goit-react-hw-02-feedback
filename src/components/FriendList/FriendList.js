import PropTypes from 'prop-types';
import FriendListItem from 'components/FriendListItem/FriendListItem';
import s from 'components/FriendList/FriendList.module.css';

export default function FriendList({ friends }) {
  return (
    <ul className={s.friendList}>
      {friends.map(({ id, isOnline, avatar, name }) => (
        <li key={id} className={s.item}>
          <FriendListItem isOnline={isOnline} avatar={avatar} name={name} />
        </li>
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
