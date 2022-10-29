import React, { useState } from "react";
import styles from "./account.module.css";
import Adress from "./Adress/Adress";
import Aside from "./Aside/Aside";
import Payment from "./Payment/Payment";
import RightSide from "./RightSide/RightSide";
import Security from "./Security/Security";
import { accountAsideBoxInfoObj, ava, checkboxElInfoObj, onChange } from "../interfaces/interface";


interface MainProps {
   accountAsideBoxInfo: accountAsideBoxInfoObj[];
   checkboxElInfo: checkboxElInfoObj;
   ava: ava;
   onChange1: onChange;
   onChange2: onChange;
   onChange3: onChange;
   onChange4: onChange;
   changeValue1: string;
   changeValue2: string;
   changeValue3: string;
   changeValue4: string
   profilePicture: string;
}


const Account: React.FC<MainProps> = (props) => {
   const [rightSideCheckedInner, setRightSideCheckedInner] = useState<string>();

   const passState = (res: string): void => { //=?
      setRightSideCheckedInner(res);
   }

   const RightSideInner = (res = 'Account') => {
      if (res === 'Account') {
         return (
            <RightSide ava={props.ava} checkboxElInfo={props.checkboxElInfo}
               profilePicture={props.profilePicture}
               onChange1={props.onChange1} changeValue1={props.changeValue1}
               onChange2={props.onChange2} changeValue2={props.changeValue2}
               onChange3={props.onChange3} changeValue3={props.changeValue3}
               onChange4={props.onChange4} changeValue4={props.changeValue4}
            />
         )
      } else if (res === 'Address') {
         return (
            <Adress />
         )
      } else if
         (res === 'Payment method') {
         return (
            <Payment />
         )
      } else if
         (res === 'Security') {
         return (
            <Security />
         )
      }
   }

   return (
      <main className={styles.main}>
         <section className={styles.page}>
            <div className={styles.container}>
               <div className={styles.page__inner}>
                  <Aside passState={passState} accountAsideBoxInfo={props.accountAsideBoxInfo} />
                  {RightSideInner(rightSideCheckedInner)}
               </div>
            </div>
         </section>
      </main>
   )
}

export default Account;