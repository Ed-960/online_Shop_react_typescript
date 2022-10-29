export interface foodObj {
   id?: number;
   name: string;
   img: string;
};

export interface resFoodObj {
   resName: string;
   img: string;
   price?: number;
};

export interface restaurantObj {
   id: number;
   name: string;
   img: string;
   resinfo: string[];
   resFoods: resFoodObj[];
};

export interface accountAsideBoxInfoObj {
   id?: number;
   img: string;
   info: string[];
};

export interface checkboxElInfoObj {
   left: string[];
   right: string[];
};

export interface ReviewInfoObj {
   id?: number;
   personImg: string;
   personName: string;
   starCount: number;
   timeOfReview: number;
   comment: string;
};

export interface users {
   user: number;
   login: string;
   password: string;
};



export interface cartFoods {
   resName: string;
   img: string;
   price: number;
};

export interface accPictures {
   id: number;
   img: string;
}

export type strFunc = (a: string) => string;


export type ava = (id: number) => void;
export type onChange = (evt: React.ChangeEvent<HTMLInputElement>) => void;
export type strVoid = (res: string) => void;
export type numVoid = (res: number) => void;

export type buttonStyleHideT = {
   display: string
} 