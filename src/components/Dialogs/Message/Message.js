import s from './Message.module.css';

const Message = ({ message }) => {
  return <div className={s.dialogs__message}>{message}</div>;
};

export default Message;
