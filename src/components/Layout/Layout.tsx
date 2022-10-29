import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";


interface Props {
   profilePicture: string
}

const Layout: React.FC<Props> = (props) => {
   return (
      <>
         <Header profilePicture={props.profilePicture} />
         <div className="line__divider"></div>
         <div>
            <Outlet />
         </div>
      </>
   )
}

export default Layout;