import React from 'react';
import './Header.css';

import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "./StateProvider";
import { auth } from './firebase'

function Header() {
    const [{basket,user}] = useStateValue();

    const login = ()=>{
        if(user){
            auth.signOut();
        }
    };
  return (
    <nav className='header'>
       <Link to="/">
            <img className="header_logo" 
              src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" 
                alt=""/>
          </Link>

          {/*search box*/}
        <div className="header_search">
            <input type="text" className="header_searchInput"/>
            <SearchIcon className="header_searchIcon"/>

    </div>

    <div className="header_nav">
            <Link to={!user && "/login"} className="header_link">
                <div onClick={login} className="header_option">
    <span className="header__optionLineOne">Hello {user}</span>
                    <span className="header__optionLineTwo">{user?'Sign Out' : 'Sign In'}</span>
                </div>
            </Link>

            <Link to="/" className="header_link">
                <div className="header_option">
                    <span className="header__optionLineOne">Returns</span>
                    <span className="header__optionLineTwo">& Orders</span>
                </div>
            </Link>

            <Link to="/" className="header_link">
                <div className="header_option">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime</span>
                </div>
            </Link>

            <Link to="/checkout" className="header_link">
                <div className="header_optionBasket">
                    <ShoppingBasketIcon/>
    <span className="header__optionLineTwo header_BasketCount">{basket?.length}</span>
                </div>
            </Link>
        </div>
         
        



    </nav>
  )
}

export default Header