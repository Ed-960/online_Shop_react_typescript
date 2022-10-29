import pizzaUrl from "../images/menu__food/pizza.png";
import burgerUrl from "../images/menu__food/burger.png";
import bbqUrl from "../images/menu__food/meat.png";
import sushiUrl from "../images/menu__food/sushi.png";
import veganUrl from "../images/menu__food/broccoli.png";
import desserteUrl from "../images/menu__food/cake.png";

import RoyalSushiHouse from "../images/restaurants/1.png";
import BurgersPizza from "../images/restaurants/2.png";
import Ninjasushi from "../images/restaurants/3.png";
import Steirereck from "../images/restaurants/1.png";
import TheChairman from "../images/restaurants/2.png";
import WillGoldfarb from "../images/restaurants/3.png";

import sushiIcon from "../images/menu__food/sushi.png";
import BurgerIcon from "../images/menu__food/burger.png";
import pizzaIcon from "../images/menu__food/pizza.png";
import bbqIcon from "../images/menu__food/meat.png";
import veganIcon from "../images/menu__food/broccoli.png";
import cakeIcon from "../images/menu__food/cake.png";

import icon1 from "../images/aside__img/asideBox__img/icon1.svg"
import icon2 from "../images/aside__img/asideBox__img/icon2.svg"
import icon3 from "../images/aside__img/asideBox__img/icon3.svg"
import icon4 from "../images/aside__img/asideBox__img/icon4.svg"

import girlImg from "../images/images_left/girl.png";
import boyImg from "../images/images_left/boy.png";

import img1 from '../images/Ava/img1.jpg'
import img2 from '../images/Ava/img2.jpg'
import img3 from '../images/Ava/img3.jpg'
import img4 from '../images/Ava/img4.jpg'
import img5 from '../images/Ava/img5.jpg'
import img6 from '../images/Ava/img6.jpg'
import img7 from '../images/Ava/img7.jpg'
import img8 from '../images/Ava/img8.jpg'
import img9 from '../images/Ava/img9.jpg'
import img10 from '../images/Ava/img10.jpg'

import avatarka from "../images/avatarka.svg";
export const avatarkaImg = avatarka;

export const food = [
   { id: 1, name: "Pizza", img: `${pizzaUrl}` },
   { id: 2, name: "Burger", img: `${burgerUrl}` },
   { id: 3, name: "BBQ", img: `${bbqUrl}` },
   { id: 4, name: "Sushi", img: `${sushiUrl}` },
   { id: 5, name: "Vegan", img: `${veganUrl}` },
   { id: 6, name: "Cake", img: `${desserteUrl}` },
];

export const restaurants = [
   {
      id: 1, name: "Royal Sushi House", img: `${RoyalSushiHouse}`,
      resinfo: ["30-40 min", "$32 min sum"],
      resFoods: [
         { resName: "Sushi", img: `${sushiIcon}`, price: 25 },
      ]
   },
   {
      id: 2, name: "Burgers & Pizza", img: `${BurgersPizza}`,
      resinfo: ["40-60 min", "$24 min sum"],
      resFoods: [
         { resName: "Burger", img: `${BurgerIcon}`, price: 15 },
         { resName: "Pizza", img: `${pizzaIcon}`, price: 19 },
      ]
   },
   {
      id: 3, name: "Ninja sushi", img: `${Ninjasushi}`,
      resinfo: ["20-40 min", "$40 min sum"],
      resFoods: [
         { resName: "Sushi", img: `${sushiIcon}`, price: 22 },
      ]
   },
   {
      id: 4, name: "Steirereck", img: `${Steirereck}`,
      resinfo: ["10-20 min", "$50 min sum"],
      resFoods: [
         { resName: "BBQ", img: `${bbqIcon}`, price: 20 },
         { resName: "Vegan", img: `${veganIcon}`, price: 10 },
      ]
   },
   {
      id: 5, name: "The Chairman", img: `${TheChairman}`,
      resinfo: ["20-35 min", "$30 min sum"],
      resFoods: [
         { resName: "Cake", img: `${cakeIcon}`, price: 13 },
         { resName: "Sushi", img: `${sushiIcon}`, price: 22 },
      ]
   },
   {
      id: 6, name: "Will Goldfarb", img: `${WillGoldfarb}`,
      resinfo: ["20-30 min", "$70 min sum"],
      resFoods: [
         { resName: "Burger", img: `${BurgerIcon}`, price: 17 },
         { resName: "Vegan", img: `${veganIcon}`, price: 11 },

      ]
   },
];

export const accountAsideBoxInfo = [
   {
      id: 1,
      img: `${icon1}`,
      info: ["Account", "Personal information"]
   },
   {
      id: 2,
      img: `${icon2}`,
      info: ["Address", "Shippings addresses"]
   },
   {
      id: 3,
      img: `${icon3}`,
      info: ["Payment method", "Connected credit cards"]
   },
   {
      id: 4,
      img: `${icon4}`,
      info: ["Security", "Password, 2FA"]
   },

];

export const checkboxElInfo = {
   left: ["New deals", "Password changes", "New restaurants"],
   right: ["Special offers", "Order statuses", "Newsletter"]
};

export const ReviewInfo = [
   {
      id: 1,
      personImg: `${girlImg}`,
      personName: "Savannah Miles",
      starCount: 5,
      timeOfReview: 10,
      comment: "Lorem ipsum dolor sit amet, adhuc nulla definiebas mei ad, ei doming aperiam delicata est."
   },
   {
      id: 2,
      personImg: `${boyImg}`,
      personName: "Jacob Jones",
      starCount: 4,
      timeOfReview: 1,
      comment: "After all, a true best friend is supposed to be there to make sure they don’t flop."
   },
   {
      id: 3,
      personImg: `${girlImg}`,
      personName: "Savannah Miles",
      starCount: 3,
      timeOfReview: 10,
      comment: "Lorem ipsum dolor sit amet, adhuc nulla definiebas mei ad, ei doming aperiam delicata est."
   },
];

export const Users = [
   {
      user: 1,
      login: 'user1',
      password: 'qwerty1'
   },
   {
      user: 2,
      login: 'user2',
      password: 'qwerty2'
   },
   {
      user: 3,
      login: 'user3',
      password: 'qwerty3'
   },

];

// account pictures

export const pictures = [
   { id: 1, img: img7 },
   { id: 2, img: img9 },
   { id: 3, img: img3 },
   { id: 4, img: img4 },
   { id: 5, img: img5 },
   { id: 6, img: img6 },
   { id: 7, img: img1 },
   { id: 8, img: img8 },
   { id: 9, img: img2 },
   { id: 10, img: img10 }
];
