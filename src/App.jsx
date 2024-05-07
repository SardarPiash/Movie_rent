import { useContext, useReducer, useState } from "react";
import { addCartMovie,darkMode } from "./contex/AddCartContex";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Pages from "./Pages";
import { MovieReducer,initialValue } from "./reducer/MovieReducer";

export default function App() {
  const [state,dispatch] = useReducer(MovieReducer,initialValue);
  const [showDarkMode,setShowDarkMode]=useState(false);
  return (
    <div className={`h-full w-full ${showDarkMode ? "dark" : ""}`} >
      <darkMode.Provider value={{showDarkMode,setShowDarkMode}} >
      <addCartMovie.Provider value={{state,dispatch}}>
        <Pages />
        <ToastContainer />
      </addCartMovie.Provider>
      </darkMode.Provider>
    </div>
  );
}
