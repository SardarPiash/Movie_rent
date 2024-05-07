import React, { useContext, useState } from "react";
import MovieLogo from "../assets/movie_rent.jpeg";
import Ring from "../assets/ring.svg";
import shoppingcart from "../assets/shopping-cart.svg";
import moon from "../assets/icons/moon.svg";
import sun from "../assets/sun.svg";
import Cart from "./Cart";
import { addCartMovie,darkMode } from "../contex/AddCartContex";

export default function Header() {
  const { addCartMovieDetails } = useContext(addCartMovie);
  const {showDarkMode,setShowDarkMode} =useContext(darkMode);
  const [showCart, setShowCart] = useState(false);
  function handleCartOpen() {
    setShowCart(true);
  }
  function handleCartClose() {
    setShowCart(false);
  }
  return (
    <header>
      {showCart && <Cart onClose={handleCartClose} />}
      <nav className="container flex items-center justify-between space-x-10 py-6">
        <a href="index.html" className=" ml-5">
          <img src={MovieLogo} width="110" height="20" alt="" />
        </a>

        <ul className="flex items-center space-x-5">
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src={Ring} width="24" height="24" alt="" />
            </a>
          </li>
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#" onClick={()=>setShowDarkMode(!showDarkMode)}
            >
              <img src={showDarkMode ? sun : moon} width="24" height="24" alt="" />
            </a>
          </li>
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
              onClick={handleCartOpen}
            >
              <img src={shoppingcart} width="24" height="24" alt="" />
              {addCartMovieDetails.length > 0 && (
                <span className="rounded-full absolute top-[-12px] left-[28px] bg-[#12CF6F] text-white text-center p-[2px] w-[30px] h-[30px]">
                  {addCartMovieDetails.length}
                </span>
              )}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
