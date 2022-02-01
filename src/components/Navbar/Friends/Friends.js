import Friend from './Friend/Friend';
import s from './Friends.module.css';

const Friends = ({ friends }) => {
  const friendsElements = friends.map((f) => (
    <Friend key={f.id} id={f.id} name={f.name} avatar={f.avatar} />
  ));

  return <div className={s.friends}>{friendsElements}</div>;
};

export default Friends;
