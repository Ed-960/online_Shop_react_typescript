import styles from "./rightSide.module.css";
import CheckboxEl from "./CheckboxEl/CheckboxEl";
import { NavLink } from "react-router-dom";
import { ava, checkboxElInfoObj, onChange } from "../../interfaces/interface";

interface Props {
   checkboxElInfo: checkboxElInfoObj
   profilePicture: string
   changeValue1: string
   changeValue2: string
   changeValue3: string
   changeValue4: string
   onChange1: onChange
   onChange2: onChange
   onChange3: onChange
   onChange4: onChange
   ava: ava
}

const RightSide: React.FC<Props> = (props) => {

   return (
      <div className={styles.page__item}>
         <h5 className={styles.page__item_head}>Account</h5>
         <div className={styles.page__item_boxes}>
            <div className={styles.page__item_box}>
               <h6 className={styles.page__box_head}>Personal information</h6>
               <div className={styles.page__item_info}>
                  <p className={styles.page__item_avatar}>Avatar</p>
               </div>
               <div className={styles.page__item_info_box}>
                  <img src={props.profilePicture} alt='img' className={styles.page__item_info_img} />
                  <div className={styles.page__item_info_left}>
                     <NavLink to="/Pictures"><div><span className={styles.page__item_text_1}>Change</span></div></NavLink>
                     <div><span onClick={function () { props.ava(0) }} className={styles.page__item_text_2}>Remove</span></div>
                  </div>
               </div>
            </div>
            <div className={styles.page__item_form}>
               <form>
                  <div className={styles.page__form_info}>
                     <div>
                        <label className={styles.page__form_fname}>First name</label>
                        <input value={props.changeValue1} type="text" onChange={props.onChange1} className={styles.page__form_input} placeholder="Jane" />
                     </div>
                     <div className={styles.form__left}>
                        <label className={styles.page__form_fname}>Last name</label>
                        <input value={props.changeValue2} type="text" onChange={props.onChange2} className={styles.page__form_input} placeholder="Robertson" />
                     </div>
                  </div>
                  <div className={styles.page__form_info}>
                     <div>
                        <label className={styles.page__form_fname}>e-mail</label>
                        <input value={props.changeValue3} type="email" onChange={props.onChange3} className={styles.page__form_input} placeholder="jane.robertson@example.com" />
                     </div>
                     <div className={styles.form__left}>
                        <label className={styles.page__form_fname}>Phone</label>
                        <input value={props.changeValue4} type="tel" onChange={props.onChange4} className={styles.page__form_input} placeholder="(217) 555-0113" />
                     </div>
                  </div>
                  <div className={styles.bottom}>
                     <h6 className={styles.page__checkbox_head}>Email notifications</h6>
                     <div className={styles.checkbox}>
                        <div className={styles.checkbox__left}>
                           {
                              props.checkboxElInfo.left.map((item, i) => <CheckboxEl
                                 key={i}
                                 info={item}
                              />)
                           }
                        </div>
                        <div className={styles.checkbox__right}>
                           {
                              props.checkboxElInfo.right.map((item, i) => <CheckboxEl
                                 key={i + 1}
                                 info={item}
                              />)
                           }
                        </div>
                     </div>
                  </div>
                  <div className={styles.line}></div>
                  <div className={styles.buttons}>
                     <NavLink to="/"><button type="button" className={styles.page__form_btn_1}>Log out</button></NavLink>
                     <button type="button" className={styles.page__form_btn_2}>Discard changes</button>
                     <button type="button" className={styles.page__form_btn_3} >Save changes</button>
                  </div>
               </form>
            </div>
         </div>
      </div>
   )
}

export default RightSide;