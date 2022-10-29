import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Account from './components/Account/Account';
import Pictures from './components/Account/Pictures/Pictures';
import Cart from './components/Cart/Cart';
import Deals from './components/Deals/Deals';
import Layout from './components/Layout/Layout';
import Layout2 from './components/Layout/Layout2';
import Login from './components/Login/login';
import Main from './components/Main/Main';
import Orders from './components/Orders/Orders';
import RestaurantsList from './components/RestaurantsList/RestaurantsList';
import { accountAsideBoxInfo, avatarkaImg, checkboxElInfo, food, pictures, restaurants, ReviewInfo, Users } from './redux/state';
import defaultImg from './images/Ava/default.jpg'
import { cartFoods } from './components/interfaces/interface';


const App: React.FC = () => {
  const [profilePicture, setProfilePicture] = useState<string>(avatarkaImg);

  function ava(id: number) {
    if (id > 0) {
      return setProfilePicture(pictures[id - 1].img);
    } else if (id === 0) { //remove an img, that is set a default one
      return setProfilePicture(defaultImg);
    }
  }

  const [changeValue1, setChangeValue1] = useState<string>("");
  const [changeValue2, setChangeValue2] = useState<string>("");
  const [changeValue3, setChangeValue3] = useState<string>("");
  const [changeValue4, setChangeValue4] = useState<string>("");

  const onChange1 = (evt: React.ChangeEvent<HTMLInputElement>): void => {
    setChangeValue1(evt.target.value);
  }

  const onChange2 = (evt: React.ChangeEvent<HTMLInputElement>): void => {
    setChangeValue2(evt.target.value);
  }

  const onChange3 = (evt: React.ChangeEvent<HTMLInputElement>): void => {
    setChangeValue3(evt.target.value);
  }

  const onChange4 = (evt: React.ChangeEvent<HTMLInputElement>): void => {
    setChangeValue4(evt.target.value);
  }

  // show and hide a button that is for showing all the foods 

  const [showState, setshowState] = useState<boolean>(false);

  const buttonStyleHide = {
    display: showState ? 'block' : 'none'
  }

  //=== get name for a filter 
  let [foodName, setfoodName] = useState<string>('default');
  const getNameFood = (name: string): void => {
    setfoodName(name);
    setshowState(true); //for showing or hiding the button at the same time
  }

  // Cart
  const [cartFoods, setCartFoods] = useState<cartFoods[]>([]);

  const passSetCartFoods = (id: number): void => {
    setCartFoods([...cartFoods, restaurants[id - 1].resFoods[0]]);
  }

  const removeFoodCart = (id: number): void => {
    setCartFoods(cartFoods.splice(id, 1));
    setCartFoods([...cartFoods]);
  }


  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout profilePicture={profilePicture} />}>
            <Route path='/Main'
              element={<Main food={food} res={restaurants} getNameFood={getNameFood} foodName={foodName} buttonStyleHide={buttonStyleHide} passSetCartFoods={passSetCartFoods} />} />
            <Route path='/RestaurantsList'
              element={<RestaurantsList />} />
            <Route path='/Deals'
              element={<Deals />} />
            <Route path='/Orders'
              element={<Orders />} />
            <Route path='/Cart'
              element={<Cart cartFoods={cartFoods} removeFoodCart={removeFoodCart} />} />
            <Route path="/Account"
              element={<Account
                accountAsideBoxInfo={accountAsideBoxInfo}
                checkboxElInfo={checkboxElInfo} profilePicture={profilePicture} ava={ava}
                onChange1={onChange1} changeValue1={changeValue1}
                onChange2={onChange2} changeValue2={changeValue2}
                onChange3={onChange3} changeValue3={changeValue3}
                onChange4={onChange4} changeValue4={changeValue4}
              />} />
          </Route>
          <Route path="/" element={<Layout2 />}>
            <Route path="/Pictures"
              element={<Pictures ava={ava} arr={pictures} />} />
            <Route index
              element={<Login ReviewInfo={ReviewInfo} Users={Users} />} />
            <Route
              path="*"
              element={
                <main style={{ padding: "1rem" }}>
                  <p>There's nothing here!</p>
                </main>
              }
            />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
