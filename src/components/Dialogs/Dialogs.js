import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import NewMessage from './NewMessage/NewMessage';

const Dialogs = ({
  updateNewMessageText,
  sendMessage,
  dialogsPage,
}) => {
  const dialogsElements = dialogsPage.dialogs.map((d) => (
    <DialogItem key={d.id} name={d.name} id={d.id} />
  ));

  const messagesElements = dialogsPage.messages.map((m) => (
    <Message key={m.id} message={m.message} id={m.id} />
  ));

  return (
    <div className={s.dialogs}>
      <div className={s.dialogs__items}>{dialogsElements}</div>
      <div className={s.dialogs__messages}>{messagesElements}</div>
      <NewMessage
        updateNewMessageText={updateNewMessageText}
        sendMessage={sendMessage}
        newMessageText={dialogsPage.newMessageText}
      />
    </div>
  );
};

export default Dialogs;
