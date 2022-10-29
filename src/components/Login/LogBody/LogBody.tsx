import React, { useState, useEffect } from "react";
import styles from "./logBody.module.css";

import passwordShow from "../../../images/password_right.svg"
import passwordHide from "../../../images/hide.svg"
import { NavLink } from "react-router-dom";
import { users } from "../../interfaces/interface";

interface MainProps {
   Users: users[]
}

const LogBody: React.FC<MainProps> = (props) => {

   const [passState, setpassState] = useState<boolean>(false);
   const [errMessage, seterrMessage] = useState<boolean>(false);

   const hideShow = (): void => {
      setpassState((state) => !state);
   }

   const changeType: string = passState ? "text" : "password";
   const changeImgPassword: string = passState ? passwordHide : passwordShow;

   const [login, setLogin] = useState<string>('');
   const [password, setPassword] = useState<string>('');

   const [isLoged, setisLoged] = useState<boolean>(false);
   const successLog: string = isLoged ? '/Account' : '/';

   let errorMessage: string = errMessage ? 'mail or password is invalid' : '';

   const errorMessageFunc = (): void => {
      seterrMessage(true);
   }

   const isTrueLoged = () => {
      for (let i = 0; i < props.Users.length; i++) {
         if (login === props.Users[i].login) {
            if (password === props.Users[i].password) {
               return setisLoged(true);
            } else {
               setisLoged(false);
            }
         } else {
            setisLoged(false);
         }
      }
   }
   useEffect((): void => {
      isTrueLoged();
   })
   const onChangeLogin = (evt: React.ChangeEvent<HTMLInputElement>) => {
      setLogin(evt.target.value);
   }

   const onChangePassword = (evt: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(evt.target.value);
   }

   return (
      <div>
         <main className={styles.main}>
            <div className={styles.container}>
               <div className={styles.form__info}>
                  <h1 className={styles.form__info_login}>
                     Login
                  </h1>
                  <p className={styles.form__info_text}>
                     Sign in with your data that you
                     entered during your registration.
                  </p>
               </div>
               <form className={styles.main__form}>
                  <div className={styles.main__form_mail}>
                     <label className={styles.mail__label}>Email</label>
                     <input type="text" onChange={onChangeLogin} value={login} placeholder="name@example.com" />
                  </div>
                  <div className={styles.main__form_password}>
                     <label>Password</label>
                     <input type={changeType} onChange={onChangePassword} value={password} placeholder="min. 8 characters" />
                     <img onClick={hideShow} alt='img' src={changeImgPassword} />
                     <label className={styles.errMessage}>{errorMessage}</label>
                  </div>
                  <div className={styles.main__form_checkbox}>
                     <input type="checkbox" />
                     <label className={styles.checkbox__label}>keep me logged in</label>
                     <NavLink to={successLog}><button onClick={errorMessageFunc} className={styles.checkbox__btn} type="button">Login</button></NavLink>
                  </div>
               </form>
               <a className={styles.form__forget} href="/d">Forgot password</a>
            </div>
         </main>
         <div className={styles.footer}>
            <div className={styles.container}>
               <div className={styles.footer__inner}>
                  <p>Don’t have an account? <a href="/d">Sign up</a></p>
               </div>
            </div>
         </div>
      </div>
   )
}


export default LogBody;