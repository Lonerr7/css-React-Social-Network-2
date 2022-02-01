import s from '../../Login.module.css';

const Error = (props) => {
  return <div className={s.loginPage__fromErrorMsg}>{props.children}</div>;
};

export default Error;
